'use client'

import { useEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'

type ChatMessage = {
  role: 'user' | 'forgi'
  text: string
  loading?: boolean   // Forgi "trabajando" placeholder
  undoable?: boolean  // show ↩ Deshacer button
}

const UI = {
  bg: "#FAFAFA",
  bgAlt: "#F3E8FF",
  surface: "#FFFFFF",
  border: "#E0AAFF",
  accent: "#9D4EDD",
  accentAlt: "#7B2CBF",
  accentLight: "#E0AAFF",
  text: "#1A1A2E",
  white: "#FFFFFF",
  gray: "#6B7280",
  font: "'DM Sans', -apple-system, sans-serif",
  mono: "'Space Mono', monospace",
}

// ── HTML section utilities ────────────────────────────────────────────────────
function extractSectionHtml(fullHtml: string, sectionId: string): string | null {
  const openRe = new RegExp(
    `<(section|div|header|footer|nav|main)[^>]*data-section=["']${sectionId}["'][^>]*>`, 'i',
  )
  const match = openRe.exec(fullHtml)
  if (!match) return null
  const tag   = match[1].toLowerCase()
  const start = match.index
  let depth = 1
  let i     = start + match[0].length
  const oRe = new RegExp(`<${tag}(\\s[^>]*)?>`, 'gi')
  const cRe = new RegExp(`</${tag}>`, 'gi')
  while (i < fullHtml.length && depth > 0) {
    oRe.lastIndex = i; cRe.lastIndex = i
    const nO = oRe.exec(fullHtml)
    const nC = cRe.exec(fullHtml)
    if (!nC) break
    if (nO && nO.index < nC.index) { depth++; i = nO.index + nO[0].length }
    else { depth--; if (depth === 0) return fullHtml.slice(start, nC.index + nC[0].length); i = nC.index + nC[0].length }
  }
  return null
}

function replaceSectionHtml(fullHtml: string, oldSec: string, newSec: string): string {
  const idx = fullHtml.indexOf(oldSec)
  return idx === -1 ? fullHtml : fullHtml.slice(0, idx) + newSec + fullHtml.slice(idx + oldSec.length)
}

export default function PreviewPage() {
  const { id } = useParams<{ id: string }>()
  const [html, setHtml]         = useState<string | null>(null)
  const [noData, setNoData]     = useState(false)
  const [iframeSrc, setIframeSrc] = useState('')
  const [surveyData, setSurveyData] = useState<Record<string, unknown> | null>(null)

  const [deploying, setDeploying]     = useState(false)
  const [deployedUrl, setDeployedUrl] = useState<string | null>(null)
  const [deployError, setDeployError] = useState('')

  // Domain connection panel
  const [showDomainPanel, setShowDomainPanel]   = useState(false)
  const [domainInput, setDomainInput]           = useState('')
  const [connectingDomain, setConnectingDomain] = useState(false)
  const [domainError, setDomainError]           = useState('')
  const [domainResult, setDomainResult]         = useState<{
    domain: string
    dns: { type: string; host: string; value: string; note: string }
    message: string
  } | null>(null)
  const [verifying, setVerifying]               = useState(false)
  const [verifyStatus, setVerifyStatus]         = useState<{ status: string; message: string } | null>(null)

  // Link href editor
  const [linkEdit, setLinkEdit] = useState<{ linkIdx: string; href: string; sectionId: string; top: number; left: number } | null>(null)
  const [linkHrefInput, setLinkHrefInput] = useState('')

  // Forgi chat
  const [chatOpen, setChatOpen]   = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [messages, setMessages]   = useState<ChatMessage[]>([
    { role: 'forgi', text: '¡Hola! Soy Forgi 👋 ¿Qué quieres cambiar en tu landing page? Puedo modificar secciones, añadir nuevas, cambiar textos, colores...' },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const iframeRef      = useRef<HTMLIFrameElement>(null)
  const [selectedSection, setSelectedSection] = useState<{ id: string; label: string } | null>(null)
  const [isWorking, setIsWorking] = useState(false)
  const [undoStack, setUndoStack] = useState<string[]>([])
  const liveHtmlRef       = useRef<string | null>(null)  // tracks HTML including inline edits (no re-render)
  const supabaseSaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Keep liveHtmlRef in sync when html state changes (initial load, AI edit, undo)
  useEffect(() => { liveHtmlRef.current = html }, [html])

  function scheduleSupabaseSave(newHtml: string) {
    if (!id || id === 'preview') return
    if (supabaseSaveTimer.current) clearTimeout(supabaseSaveTimer.current)
    supabaseSaveTimer.current = setTimeout(() => {
      fetch(`/api/landing/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html_content: newHtml }),
      }).catch(e => console.warn('Text-edit Supabase save failed:', e))
    }, 2000)
  }

  function scrollChat() {
    setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 50)
  }

  function persistHtml(newHtml: string, addToUndo = true) {
    if (addToUndo && liveHtmlRef.current) setUndoStack(s => [...s.slice(-9), liveHtmlRef.current!])
    setHtml(newHtml)
    if (id && id !== 'preview') {
      fetch(`/api/landing/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html_content: newHtml }),
      }).catch(e => console.warn('Supabase save failed:', e))
    }
  }

  function handleUndo() {
    if (undoStack.length === 0) return
    const prev = undoStack[undoStack.length - 1]
    setUndoStack(s => s.slice(0, -1))
    persistHtml(prev, false)
    setMessages(m => [
      ...m.map(msg => ({ ...msg, undoable: false })),
      { role: 'forgi', text: '↩ Deshecho' },
    ])
    scrollChat()
  }

  async function handleSend() {
    const text = chatInput.trim()
    if (!text || isWorking || !liveHtmlRef.current) return
    setChatInput('')
    setIsWorking(true)
    setMessages(prev => [
      ...prev,
      { role: 'user', text },
      { role: 'forgi', text: 'Forgi está trabajando...', loading: true },
    ])
    scrollChat()

    try {
      if (selectedSection) {
        // ── MODO 1: edición de sección ─────────────────────────────
        const sectionHtml = extractSectionHtml(liveHtmlRef.current!, selectedSection.id)
        if (!sectionHtml) throw new Error(`No se encontró la sección "${selectedSection.label}"`)

        const res  = await fetch('/api/forgi-edit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sectionId:    selectedSection.id,
            sectionLabel: selectedSection.label,
            sectionHtml,
            userPrompt:   text,
          }),
        })
        const data = await res.json() as { newSectionHtml?: string; error?: string }
        if (!res.ok || data.error) throw new Error(data.error || `Error ${res.status}`)

        persistHtml(replaceSectionHtml(liveHtmlRef.current!, sectionHtml, data.newSectionHtml!))
        setMessages(prev => [
          ...prev.slice(0, -1),
          { role: 'forgi', text: `✅ Sección "${selectedSection.label}" actualizada`, undoable: true },
        ])
      } else {
        // ── MODO 2: chat general ────────────────────────────────────
        const res  = await fetch('/api/forgi-global', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullHtml: liveHtmlRef.current!, userPrompt: text }),
        })
        const data = await res.json() as { newFullHtml?: string; error?: string }
        if (!res.ok || data.error) throw new Error(data.error || `Error ${res.status}`)

        persistHtml(data.newFullHtml!)
        setMessages(prev => [
          ...prev.slice(0, -1),
          { role: 'forgi', text: '✅ Cambios aplicados', undoable: true },
        ])
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Error desconocido'
      setMessages(prev => [
        ...prev.slice(0, -1),
        { role: 'forgi', text: `❌ ${msg}. Inténtalo de nuevo.` },
      ])
    } finally {
      setIsWorking(false)
      scrollChat()
    }
  }

  // Script injected into iframe to highlight sections on hover + inline text editing
  const HOVER_SCRIPT = `(function(){
  var hov=null;
  var eEl=null;  // element being inline-edited
  var btn=document.createElement('button');
  btn.setAttribute('data-forgi-ui','1');
  btn.style.cssText='position:fixed;z-index:99999;pointer-events:auto;background:#00E5A0;color:#0A0E17;border:none;border-radius:6px;padding:5px 10px;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;font-family:-apple-system,sans-serif;box-shadow:0 2px 10px rgba(0,229,160,.4);display:none;align-items:center;gap:4px;';
  btn.innerHTML='✨ Editar';
  document.body.appendChild(btn);
  function posBtn(el){var r=el.getBoundingClientRect();btn.style.top=(r.top+8)+'px';btn.style.right=(document.documentElement.clientWidth-r.right+8)+'px';}
  function activate(el){
    if(eEl)return;  // suppress hover while text editing
    if(hov&&hov!==el){hov.style.outline='';hov.style.outlineOffset='';}
    hov=el;
    el.style.outline='2px dashed rgba(0,229,160,.5)';
    el.style.outlineOffset='-1px';
    btn.dataset.sid=el.getAttribute('data-section')||'';
    btn.dataset.slabel=el.getAttribute('data-section-label')||el.getAttribute('data-section')||'Sección';
    posBtn(el);
    btn.style.display='flex';
  }
  function deactivate(){
    if(hov){hov.style.outline='';hov.style.outlineOffset='';}
    hov=null;btn.style.display='none';
  }
  document.querySelectorAll('[data-section]').forEach(function(el){
    el.addEventListener('mouseenter',function(){activate(el);});
    el.addEventListener('mouseleave',function(e){if(e.relatedTarget===btn)return;deactivate();});
  });
  btn.addEventListener('mouseleave',function(e){
    var rt=e.relatedTarget;
    if(rt&&rt.closest&&rt.closest('[data-section]'))return;
    deactivate();
  });
  btn.addEventListener('click',function(){
    window.parent.postMessage({type:'forgi-section-edit',sectionId:btn.dataset.sid,sectionLabel:btn.dataset.slabel},'*');
  });
  window.addEventListener('scroll',function(){if(hov)posBtn(hov);},true);

  // ── Inline text editing ────────────────────────────────────────────────────
  var ETAGS={H1:1,H2:1,H3:1,H4:1,H5:1,H6:1,P:1,SPAN:1,A:1,BUTTON:1,LI:1,STRONG:1,EM:1,LABEL:1,TD:1,TH:1};
  function isEditable(el){
    if(el.tagName in ETAGS)return true;
    if(el.tagName==='DIV'&&el.children.length===0&&el.textContent.trim().length>0)return true;
    return false;
  }
  function startEdit(el){
    if(eEl===el)return;
    if(eEl)saveEdit(eEl);
    eEl=el;
    deactivate();
    if(el.tagName==='A')el.dataset._href=el.getAttribute('href')||'';
    if(el.tagName==='A')el.removeAttribute('href');
    el.setAttribute('contenteditable','true');
    el.style.outline='2px solid #00E5A0';
    el.style.outlineOffset='2px';
    el.style.borderRadius='3px';
    el.focus();
    var r=document.createRange(),s=window.getSelection();
    r.selectNodeContents(el);s.removeAllRanges();s.addRange(r);
  }
  function saveEdit(el){
    el.removeAttribute('contenteditable');
    el.style.outline='';el.style.outlineOffset='';el.style.borderRadius='';
    if(el.tagName==='A'&&el.dataset._href!==undefined){if(el.dataset._href)el.setAttribute('href',el.dataset._href);delete el.dataset._href;}
    eEl=null;
    var sec=el.closest('[data-section]');
    if(!sec)return;
    window.parent.postMessage({type:'forgi-text-edit',sectionId:sec.getAttribute('data-section'),sectionHtml:sec.outerHTML},'*');
  }
  function cancelEdit(el){
    el.removeAttribute('contenteditable');
    el.style.outline='';el.style.outlineOffset='';el.style.borderRadius='';
    if(el.tagName==='A'&&el.dataset._href!==undefined){if(el.dataset._href)el.setAttribute('href',el.dataset._href);delete el.dataset._href;}
    eEl=null;
  }
  document.querySelectorAll('[data-section] *').forEach(function(el){
    if(!isEditable(el))return;
    el.addEventListener('dblclick',function(e){e.stopPropagation();e.preventDefault();startEdit(el);});
  });
  document.addEventListener('click',function(e){
    if(!eEl||eEl===e.target||eEl.contains(e.target))return;
    saveEdit(eEl);
  });
  document.addEventListener('keydown',function(e){
    if(!eEl)return;
    if(e.key==='Escape'){e.preventDefault();cancelEdit(eEl);}
    else if(e.key==='Enter'&&!e.shiftKey&&eEl.tagName!=='P'&&eEl.tagName!=='LI'){e.preventDefault();saveEdit(eEl);}
  });

  // ── Link href editor (single click on <a>) ──────────────────────────────
  var linkIdx=0;
  document.querySelectorAll('[data-section] a[href], [data-section] button[onclick]').forEach(function(el){
    el.setAttribute('data-forgi-link-idx',String(linkIdx++));
    el.addEventListener('click',function(e){
      if(eEl)return; // don't interfere with text editing
      e.preventDefault();e.stopPropagation();
      var href=el.getAttribute('href')||'';
      var r=el.getBoundingClientRect();
      var sec=el.closest('[data-section]');
      window.parent.postMessage({type:'forgi-link-click',href:href,linkIdx:el.getAttribute('data-forgi-link-idx'),sectionId:sec?sec.getAttribute('data-section'):'',top:r.top,left:r.left,width:r.width},'*');
    });
  });
  window.addEventListener('message',function(e){
    if(e.data&&e.data.type==='forgi-link-update'){
      var el=document.querySelector('[data-forgi-link-idx=\"'+e.data.linkIdx+'\"]');
      if(!el)return;
      el.setAttribute('href',e.data.newHref);
      var sec=el.closest('[data-section]');
      if(sec)window.parent.postMessage({type:'forgi-text-edit',sectionId:sec.getAttribute('data-section'),sectionHtml:sec.outerHTML},'*');
    }
  });
})();`

  // Listen for messages from the iframe (section-edit clicks + inline text edits)
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.type === 'forgi-section-edit') {
        setSelectedSection({ id: e.data.sectionId, label: e.data.sectionLabel })
        setChatOpen(true)
      } else if (e.data?.type === 'forgi-link-click') {
        setLinkEdit({ linkIdx: e.data.linkIdx, href: e.data.href, sectionId: e.data.sectionId, top: e.data.top, left: e.data.left })
        setLinkHrefInput(e.data.href || '')
      } else if (e.data?.type === 'forgi-text-edit') {
        if (!liveHtmlRef.current) return
        const oldSec = extractSectionHtml(liveHtmlRef.current, e.data.sectionId)
        if (!oldSec) return
        const newHtml = replaceSectionHtml(liveHtmlRef.current, oldSec, e.data.sectionHtml)
        liveHtmlRef.current = newHtml
        scheduleSupabaseSave(newHtml)
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  function handleIframeLoad() {
    const doc = iframeRef.current?.contentDocument
    if (!doc) return
    try {
      const s = doc.createElement('script')
      s.textContent = HOVER_SCRIPT
      doc.head.appendChild(s)
    } catch (e) {
      console.warn('Forgi: could not inject hover script', e)
    }
  }

  // Load from sessionStorage, or fall back to Supabase
  useEffect(() => {
    const storedHtml   = sessionStorage.getItem('previewHtml')
    const storedSurvey = sessionStorage.getItem('surveyData')

    if (storedHtml) {
      setHtml(storedHtml)
      // Save to Supabase immediately so deploy can find the HTML
      if (id && id !== 'preview') {
        fetch(`/api/landing/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ html_content: storedHtml }),
        }).catch(e => console.warn('Initial Supabase save failed:', e))
        sessionStorage.removeItem('previewHtml')
        sessionStorage.removeItem('surveyData')
      }
    } else if (id && id !== 'preview') {
      fetch(`/api/landing/${id}`)
        .then((r) => r.json())
        .then((data: { html?: string; surveyData?: Record<string, unknown> }) => {
          if (data.html) {
            setHtml(data.html)
            if (data.surveyData) setSurveyData(data.surveyData)
          } else {
            setNoData(true)
          }
        })
        .catch(() => setNoData(true))
    } else {
      setNoData(true)
    }

    if (storedSurvey) {
      try { setSurveyData(JSON.parse(storedSurvey)) } catch { /* ignore */ }
    }
  }, [id])

  // Convert HTML string to blob URL for iframe
  useEffect(() => {
    if (!html) return
    const blob = new Blob([html], { type: 'text/html; charset=utf-8' })
    const url  = URL.createObjectURL(blob)
    setIframeSrc(url)
    return () => URL.revokeObjectURL(url)
  }, [html])

  function handleDownload() {
    if (!html) return
    const blob = new Blob([html], { type: 'text/html; charset=utf-8' })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = `landing-${id || 'page'}.html`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  async function handleDeploy() {
    if (deploying) return
    setDeployError('')
    setDeploying(true)
    try {
      const currentHtml = liveHtmlRef.current || html
      const res = await fetch('/api/deploy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          landingId: id,
          html: currentHtml,
          businessName: (surveyData?.businessName as string | undefined),
        }),
      })
      if (!res.ok) {
        const d = await res.json().catch(() => ({}))
        throw new Error((d as { error?: string }).error || `Error ${res.status}`)
      }
      const data = await res.json() as { url: string }
      setDeployedUrl(data.url)
    } catch (err) {
      setDeployError(err instanceof Error ? err.message : 'Error al publicar')
    } finally {
      setDeploying(false)
    }
  }

  async function handleConnectDomain() {
    const domain = domainInput.trim()
    if (!domain || connectingDomain) return
    setConnectingDomain(true)
    setDomainError('')
    setDomainResult(null)
    try {
      const res = await fetch('/api/connect-domain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ landingId: id, customDomain: domain }),
      })
      const data = await res.json() as {
        domain?: string
        dns?: { type: string; host: string; value: string; note: string }
        message?: string
        error?: string
      }
      if (!res.ok || data.error) throw new Error(data.error || `Error ${res.status}`)
      setDomainResult({ domain: data.domain!, dns: data.dns!, message: data.message! })
    } catch (err) {
      setDomainError(err instanceof Error ? err.message : 'Error al conectar dominio')
    } finally {
      setConnectingDomain(false)
    }
  }

  function handleSaveLinkHref() {
    if (!linkEdit) return
    const newHref = linkHrefInput.trim()

    // 1. Update iframe visually
    iframeRef.current?.contentWindow?.postMessage({
      type: 'forgi-link-update',
      linkIdx: linkEdit.linkIdx,
      newHref,
    }, '*')

    // 2. Update HTML directly in parent (don't rely on iframe roundtrip)
    if (liveHtmlRef.current && linkEdit.sectionId) {
      const oldSec = extractSectionHtml(liveHtmlRef.current, linkEdit.sectionId)
      if (oldSec) {
        // Escape special regex chars in the old href
        const escaped = linkEdit.href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const updatedSec = oldSec.replace(
          new RegExp(`href=(["'])${escaped}\\1`),
          `href="${ newHref.replace(/"/g, '&quot;') }"`,
        )
        if (updatedSec !== oldSec) {
          const newHtml = replaceSectionHtml(liveHtmlRef.current, oldSec, updatedSec)
          liveHtmlRef.current = newHtml
          setHtml(newHtml)
          // Save immediately to Supabase (no debounce — link edits are deliberate)
          if (id && id !== 'preview') {
            fetch(`/api/landing/${id}`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ html_content: newHtml }),
            }).catch(e => console.warn('Link save failed:', e))
          }
        }
      }
    }

    setLinkEdit(null)
  }

  async function handleVerifyDomain() {
    if (!domainResult?.domain || verifying) return
    setVerifying(true)
    setVerifyStatus(null)
    try {
      const res = await fetch('/api/verify-domain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: domainResult.domain }),
      })
      const data = await res.json() as { status: string; message: string }
      setVerifyStatus(data)
    } catch {
      setVerifyStatus({ status: 'error', message: 'Error al verificar' })
    } finally {
      setVerifying(false)
    }
  }

  if (noData) {
    return (
      <div style={{
        minHeight: '100vh', background: UI.bg, display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px',
        fontFamily: UI.font, color: UI.text,
      }}>
        <p style={{ fontSize: '20px', fontWeight: 700 }}>Sin datos de preview</p>
        <p style={{ color: UI.gray, fontSize: '14px' }}>La sesión expiró o accediste directamente a esta URL.</p>
        <a href="/survey" style={{
          marginTop: '8px', padding: '10px 24px', borderRadius: '9px',
          background: `linear-gradient(135deg, ${UI.accent}, ${UI.accentAlt})`,
          color: UI.white, fontWeight: 800, fontSize: '14px', textDecoration: 'none',
        }}>← Generar nueva landing</a>
      </div>
    )
  }

  if (!html) {
    return (
      <div style={{
        minHeight: '100vh', background: UI.bg, display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px',
        fontFamily: UI.font, color: UI.text,
      }}>
        <div style={{ fontSize: '32px', animation: 'spin 1.5s linear infinite' }}>⟳</div>
        <p style={{ color: UI.gray, fontSize: '15px' }}>Cargando preview...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh', background: UI.bg, fontFamily: UI.font,
      display: 'flex', flexDirection: 'column',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Space+Mono:wght@700&display=swap" rel="stylesheet" />

      {/* ── TOOLBAR ── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: UI.surface, backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${UI.border}`,
        boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
        padding: '10px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
        flexWrap: 'wrap', minHeight: '56px',
      }}>
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '7px', textDecoration: 'none' }}>
            <div style={{
              width: '26px', height: '26px', borderRadius: '7px',
              background: `linear-gradient(135deg, ${UI.accent}, ${UI.accentAlt})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: '13px', color: UI.white, fontFamily: UI.mono,
            }}>L</div>
            <span style={{ fontWeight: 700, fontSize: '14px', color: UI.text, fontFamily: UI.mono }}>LandForge</span>
          </a>
          <div style={{ width: '1px', height: '18px', background: UI.border }} />
          <a href="/dashboard" style={{ fontSize: '13px', color: UI.gray, textDecoration: 'none' }}>← Dashboard</a>
        </div>

        {/* Right: actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {deployError && (
            <span style={{ fontSize: '12px', color: '#EF4444', maxWidth: '220px' }}>⚠ {deployError}</span>
          )}

          {/* Download HTML */}
          <button
            onClick={handleDownload}
            style={{
              padding: '8px 18px', borderRadius: '9px',
              background: '#F3E8FF', border: `1px solid ${UI.border}`,
              color: UI.accent, fontSize: '13px', fontWeight: 700, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}
          >
            ⬇ Descargar HTML
          </button>

          {/* Deploy / Deployed */}
          {deployedUrl ? (
            <>
              <a
                href={deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 20px', borderRadius: '9px', textDecoration: 'none',
                  background: 'linear-gradient(135deg, #22C55E, #16A34A)',
                  color: '#fff', fontSize: '13px', fontWeight: 800,
                  display: 'flex', alignItems: 'center', gap: '7px',
                }}
              >
                ✓ Ver en vivo →
              </a>
              <button
                onClick={() => { setShowDomainPanel(o => !o); setDomainError(''); }}
                style={{
                  padding: '8px 16px', borderRadius: '9px', border: `1px solid ${UI.border}`,
                  background: showDomainPanel ? UI.bgAlt : UI.surface,
                  color: UI.accent, fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}
              >
                🔗 Mi dominio
              </button>
            </>
          ) : (
            <button
              onClick={handleDeploy}
              disabled={deploying || !id}
              style={{
                padding: '8px 20px', borderRadius: '9px', border: 'none',
                background: deploying
                  ? '#F3E8FF'
                  : `linear-gradient(135deg, ${UI.accent}, ${UI.accentAlt})`,
                color: deploying ? UI.gray : UI.white,
                ...(deploying && { border: `1px solid ${UI.border}` }),
                fontSize: '13px', fontWeight: 800,
                cursor: deploying ? 'wait' : 'pointer',
                display: 'flex', alignItems: 'center', gap: '7px',
                transition: 'all 0.2s',
              } as React.CSSProperties}
            >
              {deploying
                ? <><span style={{ display: 'inline-block', animation: 'spin 0.7s linear infinite' }}>⟳</span> Publicando...</>
                : '🚀 Publicar'}
            </button>
          )}
        </div>
      </div>

      {/* ── INFO BAR ── */}
      <div style={{
        padding: '8px 20px',
        background: `${UI.accent}08`, borderBottom: `1px solid ${UI.accent}15`,
        display: 'flex', alignItems: 'center', gap: '8px',
        fontSize: '12px', color: `${UI.accent}CC`,
      }}>
        <span>✓</span>
        <span>
          Diseño generado por IA — único para este cliente.
          {!!surveyData?.keyword  && <> · <strong style={{ color: UI.accent }}>{String(surveyData.keyword)}</strong></>}
          {!!surveyData?.location && <> · {String(surveyData.location)}</>}
          {deployedUrl && <> · Publicada en <a href={deployedUrl} target="_blank" rel="noopener noreferrer" style={{ color: UI.accent }}>{deployedUrl}</a></>}
        </span>
      </div>

      {/* ── IFRAME ── */}
      {iframeSrc && (
        <iframe
          key={iframeSrc}
          ref={iframeRef}
          src={iframeSrc}
          onLoad={handleIframeLoad}
          style={{ flex: 1, width: '100%', minHeight: 'calc(100vh - 92px)', border: 'none', display: 'block' }}
          title="Landing page preview"
        />
      )}

      {/* ── LINK HREF EDITOR POPOVER ── */}
      {linkEdit && (
        <div style={{
          position: 'fixed', top: Math.min(linkEdit.top + 56 + 40, window.innerHeight - 120), left: Math.max(16, linkEdit.left),
          zIndex: 300, background: UI.surface, borderRadius: '12px',
          border: `1px solid ${UI.border}`, boxShadow: '0 8px 32px rgba(157,78,221,.18)',
          padding: '12px', width: '340px', maxWidth: 'calc(100vw - 32px)',
          fontFamily: UI.font, animation: 'forgiSlideUp .15s ease',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: UI.accent }}>🔗 Editar enlace</span>
            <button onClick={() => setLinkEdit(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: UI.gray, fontSize: '14px' }}>✕</button>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <input
              value={linkHrefInput}
              onChange={e => setLinkHrefInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSaveLinkHref()}
              placeholder="https://ejemplo.com"
              autoFocus
              style={{
                flex: 1, padding: '8px 10px', borderRadius: '8px',
                border: `1px solid ${UI.border}`, background: UI.bgAlt,
                color: UI.text, fontSize: '13px', outline: 'none', fontFamily: UI.font,
              }}
            />
            <button
              onClick={handleSaveLinkHref}
              style={{
                padding: '8px 14px', borderRadius: '8px', border: 'none',
                background: `linear-gradient(135deg, ${UI.accent}, ${UI.accentAlt})`,
                color: '#fff', fontSize: '12px', fontWeight: 700, cursor: 'pointer', flexShrink: 0,
              }}
            >Guardar</button>
          </div>
          {linkEdit.href && (
            <div style={{ fontSize: '11px', color: UI.gray, marginTop: '6px', wordBreak: 'break-all' }}>
              Actual: {linkEdit.href}
            </div>
          )}
        </div>
      )}

      {/* ── FORGI FLOATING BUTTON ── */}
      <button
        onClick={() => { setSelectedSection(null); setChatOpen(o => !o) }}
        title="Chat con Forgi"
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 200,
          width: '56px', height: '56px', borderRadius: '50%', border: 'none',
          background: `linear-gradient(135deg, ${UI.accent}, ${UI.accentAlt})`,
          color: UI.white, fontSize: '22px', cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(157,78,221,.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform .2s, box-shadow .2s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)' }}
      >
        {chatOpen ? '✕' : '✨'}
      </button>

      {/* ── FORGI CHAT PANEL ── */}
      {chatOpen && (
        <div style={{
          position: 'fixed', bottom: '92px', right: '24px', zIndex: 200,
          width: '360px', maxWidth: 'calc(100vw - 32px)',
          background: UI.surface, borderRadius: '16px',
          border: `1px solid ${UI.border}`,
          boxShadow: '0 12px 48px rgba(157,78,221,.15)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          animation: 'forgiSlideUp .2s ease',
          fontFamily: UI.font,
        }}>
          {/* Header */}
          <div style={{
            padding: '14px 16px',
            background: `linear-gradient(135deg, ${UI.accent}22, ${UI.accentAlt}22)`,
            borderBottom: `1px solid ${UI.border}`,
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
              background: `linear-gradient(135deg, ${UI.accent}, ${UI.accentAlt})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '15px', color: UI.white, fontWeight: 800,
            }}>F</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: '14px', color: UI.text }}>Forgi</div>
              <div style={{ fontSize: '11px', color: UI.gray }}>Asistente de edición</div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: UI.gray, fontSize: '16px', lineHeight: 1, padding: '4px',
              }}
            >✕</button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: 'auto', padding: '16px',
            display: 'flex', flexDirection: 'column', gap: '10px',
            maxHeight: '340px',
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '82%', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div
                  style={{
                    padding: '9px 13px', borderRadius: '12px',
                    fontSize: '13px', lineHeight: 1.5,
                    opacity: msg.loading ? 0.6 : 1,
                    ...(msg.role === 'user' ? {
                      background: `linear-gradient(135deg, ${UI.accent}, ${UI.accentAlt})`,
                      color: UI.white, fontWeight: 500,
                      borderBottomRightRadius: '4px',
                    } : {
                      background: '#F3E8FF', color: msg.loading ? UI.gray : UI.text,
                      border: `1px solid ${UI.border}`,
                      borderBottomLeftRadius: '4px',
                      fontStyle: msg.loading ? 'italic' : 'normal',
                    }),
                  }}
                >
                  {msg.loading
                    ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ display: 'inline-block', animation: 'spin 0.8s linear infinite' }}>⟳</span>
                        {msg.text}
                      </span>
                    : msg.text}
                </div>
                {msg.undoable && undoStack.length > 0 && (
                  <button
                    onClick={handleUndo}
                    style={{
                      alignSelf: 'flex-start', background: 'none',
                      border: `1px solid ${UI.border}`, borderRadius: '6px',
                      padding: '3px 9px', fontSize: '11px', color: UI.gray,
                      cursor: 'pointer', fontFamily: UI.font,
                    }}
                  >↩ Deshacer</button>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Section context badge */}
          {selectedSection && (
            <div style={{
              margin: '0 12px 8px',
              padding: '6px 10px', borderRadius: '8px',
              background: `${UI.accent}15`, border: `1px solid ${UI.accent}35`,
              fontSize: '12px', color: UI.accent, fontWeight: 600,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px',
            }}>
              <span>✏️ Editando: <strong>{selectedSection.label}</strong></span>
              <button
                onClick={() => setSelectedSection(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: UI.gray, fontSize: '14px', lineHeight: 1, padding: '0 2px' }}
              >✕</button>
            </div>
          )}

          {/* Input row */}
          <div style={{
            display: 'flex', gap: '8px', padding: '10px 12px',
            borderTop: `1px solid ${UI.border}`,
          }}>
            <input
              value={chatInput}
              onChange={e => setChatInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()}
              placeholder={selectedSection ? `¿Qué cambio en ${selectedSection.label}?` : '¿Qué quieres cambiar?'}
              disabled={isWorking}
              style={{
                flex: 1, background: UI.surface, border: `1px solid ${isWorking ? UI.border : UI.border}`,
                borderRadius: '8px', padding: '9px 12px',
                color: UI.text, fontSize: '13px', outline: 'none',
                fontFamily: UI.font, opacity: isWorking ? 0.5 : 1,
              }}
            />
            <button
              onClick={handleSend}
              disabled={isWorking}
              style={{
                width: '36px', height: '36px', borderRadius: '8px', border: 'none',
                background: `linear-gradient(135deg, ${UI.accent}, ${UI.accentAlt})`,
                color: UI.white, fontSize: '15px',
                cursor: isWorking ? 'wait' : 'pointer',
                flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: isWorking ? 0.4 : 1, transition: 'opacity .15s',
              }}
            >➤</button>
          </div>
        </div>
      )}

      {/* ── DOMAIN PANEL ── */}
      {showDomainPanel && deployedUrl && (
        <div style={{
          position: 'fixed', bottom: '92px', left: '24px', zIndex: 200,
          width: '360px', maxWidth: 'calc(100vw - 32px)',
          background: UI.surface, borderRadius: '16px',
          border: `1px solid ${UI.border}`,
          boxShadow: '0 12px 48px rgba(157,78,221,.15)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          animation: 'forgiSlideUp .2s ease',
          fontFamily: UI.font,
        }}>
          {/* Header */}
          <div style={{
            padding: '14px 16px',
            background: `linear-gradient(135deg, ${UI.accent}22, ${UI.accentAlt}22)`,
            borderBottom: `1px solid ${UI.border}`,
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <span style={{ fontSize: '20px', lineHeight: 1 }}>🔗</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: '14px', color: UI.text }}>Conectar dominio</div>
              <div style={{ fontSize: '11px', color: UI.gray }}>Apunta tu dominio a esta landing</div>
            </div>
            <button
              onClick={() => setShowDomainPanel(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: UI.gray, fontSize: '16px', lineHeight: 1, padding: '4px' }}
            >✕</button>
          </div>

          {/* Body */}
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* LandForge URL */}
            <div>
              <div style={{ fontSize: '11px', color: UI.gray, marginBottom: '4px', fontWeight: 600 }}>URL ACTUAL (LandForge)</div>
              <a
                href={deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '12px', color: UI.accent, textDecoration: 'none',
                  wordBreak: 'break-all', display: 'block',
                  padding: '7px 10px', borderRadius: '8px',
                  background: UI.bgAlt, border: `1px solid ${UI.border}`,
                }}
              >
                {deployedUrl}
              </a>
            </div>

            {/* Domain input */}
            {!domainResult && (
              <>
                <div>
                  <div style={{ fontSize: '11px', color: UI.gray, marginBottom: '6px', fontWeight: 600 }}>TU DOMINIO PROPIO</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      value={domainInput}
                      onChange={e => setDomainInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleConnectDomain()}
                      placeholder="landing.tuempresa.com"
                      disabled={connectingDomain}
                      style={{
                        flex: 1, background: UI.bgAlt, border: `1px solid ${UI.border}`,
                        borderRadius: '8px', padding: '8px 11px',
                        color: UI.text, fontSize: '13px', outline: 'none',
                        fontFamily: UI.font, opacity: connectingDomain ? 0.6 : 1,
                      }}
                    />
                    <button
                      onClick={handleConnectDomain}
                      disabled={connectingDomain || !domainInput.trim()}
                      style={{
                        padding: '8px 14px', borderRadius: '8px', border: 'none',
                        background: `linear-gradient(135deg, ${UI.accent}, ${UI.accentAlt})`,
                        color: '#fff', fontSize: '13px', fontWeight: 700,
                        cursor: connectingDomain ? 'wait' : 'pointer',
                        flexShrink: 0, opacity: connectingDomain || !domainInput.trim() ? 0.5 : 1,
                        transition: 'opacity .15s',
                      }}
                    >
                      {connectingDomain
                        ? <span style={{ display: 'inline-block', animation: 'spin 0.7s linear infinite' }}>⟳</span>
                        : 'Conectar'}
                    </button>
                  </div>
                </div>
                {domainError && (
                  <p style={{ fontSize: '12px', color: '#EF4444', margin: 0 }}>⚠ {domainError}</p>
                )}
              </>
            )}

            {/* DNS instructions (after success) */}
            {domainResult && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ padding: '10px', borderRadius: '8px', background: '#DCFCE7', border: '1px solid #BBF7D0', color: '#166534', fontSize: '13px', fontWeight: 600 }}>
                  {domainResult.message}
                </div>

                <div>
                  <div style={{ fontSize: '11px', color: UI.gray, marginBottom: '8px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Configuración DNS Requerida
                  </div>
                  
                  <div style={{
                    background: '#0F172A', borderRadius: '12px', padding: '16px',
                    fontFamily: UI.mono, fontSize: '13px', border: '1px solid #334155',
                    display: 'flex', flexDirection: 'column', gap: '10px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '8px' }}>
                      <span style={{ color: '#94A3B8' }}>Tipo</span>
                      <span style={{ color: '#F8FAFC', fontWeight: 700, background: '#334155', padding: '2px 6px', borderRadius: '4px' }}>{domainResult.dns.type}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '8px' }}>
                      <span style={{ color: '#94A3B8' }}>Nombre / Host</span>
                      <span style={{ color: '#F8FAFC' }}>{domainResult.dns.host}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ color: '#94A3B8' }}>Valor / Destino</span>
                      <span style={{ color: '#A78BFA', wordBreak: 'break-all', fontWeight: 700 }}>{domainResult.dns.value}</span>
                    </div>
                  </div>
                </div>

                <div style={{ 
                  background: '#F8FAFC', padding: '12px', borderRadius: '10px', border: '1px solid #E2E8F0',
                  fontSize: '12px', color: '#475569', lineHeight: '1.6'
                }}>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>¿Cómo hacerlo?</strong> Ve a tu proveedor de dominios (GoDaddy, Namecheap, etc.) y añade el registro indicado arriba.
                  </p>
                  <ul style={{ paddingLeft: '18px' }}>
                    <li><strong>Dominio principal:</strong> Usa el registro tipo <b>A</b> con host <b>@</b>.</li>
                    <li><strong>Subdominio:</strong> Usa el registro <b>CNAME</b> con el nombre (ej. "web").</li>
                  </ul>
                </div>

                <p style={{ fontSize: '11px', color: UI.gray, textAlign: 'center' }}>
                  ⏳ Los cambios pueden tardar desde unos minutos hasta 48h.
                </p>

                {/* Verify domain button */}
                <button
                  onClick={handleVerifyDomain}
                  disabled={verifying}
                  style={{
                    padding: '10px', borderRadius: '8px', border: 'none',
                    background: verifyStatus?.status === 'verified'
                      ? 'linear-gradient(135deg, #22C55E, #16A34A)'
                      : `linear-gradient(135deg, ${UI.accent}, ${UI.accentAlt})`,
                    color: '#fff', fontSize: '13px', fontWeight: 700,
                    cursor: verifying ? 'wait' : 'pointer',
                    opacity: verifying ? 0.6 : 1, transition: 'opacity .15s',
                    fontFamily: UI.font,
                  }}
                >
                  {verifying
                    ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><span style={{ display: 'inline-block', animation: 'spin 0.7s linear infinite' }}>⟳</span> Verificando...</span>
                    : verifyStatus?.status === 'verified'
                      ? '✓ Dominio verificado'
                      : '🔍 Verificar conexión DNS'}
                </button>
                {verifyStatus && verifyStatus.status !== 'verified' && (
                  <div style={{
                    padding: '8px 10px', borderRadius: '8px', fontSize: '12px', lineHeight: 1.5,
                    background: verifyStatus.status === 'pending' ? '#FEF9C3' : '#FEE2E2',
                    border: `1px solid ${verifyStatus.status === 'pending' ? '#FDE68A' : '#FECACA'}`,
                    color: verifyStatus.status === 'pending' ? '#854D0E' : '#991B1B',
                  }}>
                    {verifyStatus.message}
                  </div>
                )}

                <button
                  onClick={() => { setDomainResult(null); setDomainInput(''); setVerifyStatus(null) }}
                  style={{
                    padding: '8px', background: 'transparent',
                    border: `1px solid ${UI.border}`, borderRadius: '8px',
                    fontSize: '12px', color: UI.gray, fontWeight: 600,
                    cursor: 'pointer', fontFamily: UI.font, transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#F3E8FF'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  ← Configurar otro dominio
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes forgiSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
