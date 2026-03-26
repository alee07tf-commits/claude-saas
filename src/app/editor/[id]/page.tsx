'use client'

import { useEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'

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
  dimGray: "#9CA3AF",
  font: "'DM Sans', -apple-system, sans-serif",
  mono: "'Space Mono', monospace",
  panelW: '340px',
}

// ─── Forgi hover script (injected into iframe) ────────────────────────────
const FORGI_SCRIPT = `
<script id="_forgi_editor">(function(){
  if(document.getElementById('_forgi_btn'))return;
  var cur=null;
  var eEl=null;
  var btn=document.createElement('button');
  btn.id='_forgi_btn';
  btn.innerHTML='&#10024;&nbsp;Editar';
  btn.style.cssText=['position:fixed','z-index:2147483647','display:none','top:0','right:16px','padding:7px 16px','background:linear-gradient(135deg,#9D4EDD,#7B2CBF)','color:#FFFFFF','border:none','border-radius:8px','font-weight:800','font-size:12px','cursor:pointer','font-family:system-ui,sans-serif','box-shadow:0 4px 20px rgba(157,78,221,.5)','white-space:nowrap','letter-spacing:.02em','transition:transform .1s'].join(';');
  document.body.appendChild(btn);
  var sty=document.createElement('style');
  sty.textContent='._fhl{outline:2px solid #9D4EDD!important;outline-offset:-2px!important;}';
  document.head.appendChild(sty);
  function closest(el){while(el&&el!==document.body){if(el.dataset&&el.dataset.section)return el;el=el.parentElement;}return null;}
  function showBtn(sec){var r=sec.getBoundingClientRect();btn.style.top=(Math.max(r.top,8)+8)+'px';btn.style.display='block';btn.dataset.s=sec.dataset.section||'';btn.dataset.l=sec.dataset.sectionLabel||sec.dataset.section||'Sección';}
  document.addEventListener('mouseover',function(e){if(eEl)return;if(e.target===btn||btn.contains(e.target))return;var sec=closest(e.target);if(!sec){if(cur){cur.classList.remove('_fhl');cur=null;}btn.style.display='none';return;}if(sec===cur)return;if(cur)cur.classList.remove('_fhl');cur=sec;sec.classList.add('_fhl');showBtn(sec);},{passive:true});
  document.addEventListener('scroll',function(){btn.style.display='none';if(cur){cur.classList.remove('_fhl');cur=null;}},{passive:true,capture:true});
  document.addEventListener('mouseleave',function(){btn.style.display='none';if(cur){cur.classList.remove('_fhl');cur=null;}});
  btn.addEventListener('mouseenter',function(){btn.style.transform='translateY(-1px)';});
  btn.addEventListener('mouseleave',function(){btn.style.transform='';});
  btn.addEventListener('click',function(e){e.stopPropagation();window.parent.postMessage({type:'forgi-edit',sectionId:btn.dataset.s,sectionLabel:btn.dataset.l},'*');});
  var ETAGS={H1:1,H2:1,H3:1,H4:1,H5:1,H6:1,P:1,SPAN:1,A:1,BUTTON:1,LI:1,STRONG:1,EM:1,LABEL:1,TD:1,TH:1};
  function isEditable(el){
    if(el.tagName in ETAGS)return true;
    // Leaf DIVs with no child elements (pills, badges, custom buttons)
    if(el.tagName==='DIV'&&el.children.length===0&&el.textContent.trim().length>0)return true;
    return false;
  }
  function startEdit(el){
    if(eEl===el)return;
    if(eEl)saveEdit(eEl);
    eEl=el;
    if(cur){cur.classList.remove('_fhl');cur=null;}
    btn.style.display='none';
    // For A tags: disable href temporarily to prevent navigation
    if(el.tagName==='A')el.dataset._href=el.getAttribute('href')||'';
    if(el.tagName==='A')el.removeAttribute('href');
    el.setAttribute('contenteditable','true');
    el.style.outline='2px solid #00E5A0';el.style.outlineOffset='2px';el.style.borderRadius='3px';
    el.focus();
    var r=document.createRange(),s=window.getSelection();
    r.selectNodeContents(el);s.removeAllRanges();s.addRange(r);
  }
  function saveEdit(el){
    el.removeAttribute('contenteditable');
    el.style.outline='';el.style.outlineOffset='';el.style.borderRadius='';
    // Restore href on A tags
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
})();</script>`

function buildEditorHtml(html: string): string {
  if (html.includes('_forgi_editor')) return html
  return html.replace('</body>', FORGI_SCRIPT + '\n</body>')
}

function extractSections(html: string): Array<{ id: string; label: string }> {
  const re = /data-section="([^"]+)"[^>]*data-section-label="([^"]+)"/g
  const seen = new Set<string>()
  const result: Array<{ id: string; label: string }> = []
  let m: RegExpExecArray | null
  while ((m = re.exec(html)) !== null) {
    if (!seen.has(m[1])) { seen.add(m[1]); result.push({ id: m[1], label: m[2] }) }
  }
  return result
}

function extractSectionHtml(fullHtml: string, sectionId: string): string | null {
  const marker = `data-section="${sectionId}"`
  const markerIdx = fullHtml.indexOf(marker)
  if (markerIdx === -1) return null
  let tagStart = markerIdx
  while (tagStart > 0 && fullHtml[tagStart] !== '<') tagStart--
  if (fullHtml[tagStart] !== '<') return null
  const tagNameMatch = fullHtml.slice(tagStart).match(/^<([a-zA-Z][a-zA-Z0-9]*)/)
  if (!tagNameMatch) return null
  const tagName = tagNameMatch[1].toLowerCase()
  let tagEnd = tagStart + 1
  let inQuote = false, quoteChar = ''
  while (tagEnd < fullHtml.length) {
    const ch = fullHtml[tagEnd]
    if (inQuote) { if (ch === quoteChar) inQuote = false }
    else if (ch === '"' || ch === "'") { inQuote = true; quoteChar = ch }
    else if (ch === '>') break
    tagEnd++
  }
  const afterOpen = tagEnd + 1
  const openPat = `<${tagName}`, closePat = `</${tagName}>`
  let depth = 1, pos = afterOpen
  while (depth > 0 && pos < fullHtml.length) {
    const nextOpen = fullHtml.indexOf(openPat, pos)
    const nextClose = fullHtml.indexOf(closePat, pos)
    if (nextClose === -1) return null
    if (nextOpen !== -1 && nextOpen < nextClose) { depth++; pos = nextOpen + openPat.length }
    else { depth--; if (depth === 0) return fullHtml.slice(tagStart, nextClose + closePat.length); pos = nextClose + closePat.length }
  }
  return null
}

function urlToEmbed(input: string): string {
  const trimmed = input.trim()
  if (trimmed.startsWith('<iframe') || trimmed.startsWith('<')) return trimmed
  // YouTube: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID
  const ytMatch = trimmed.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  if (ytMatch) return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${ytMatch[1]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  // Vimeo: vimeo.com/ID
  const vmMatch = trimmed.match(/vimeo\.com\/(\d+)/)
  if (vmMatch) return `<iframe width="560" height="315" src="https://player.vimeo.com/video/${vmMatch[1]}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`
  return trimmed
}

function replaceSectionHtml(full: string, old: string, next: string): string {
  const idx = full.indexOf(old)
  if (idx === -1) return full
  return full.slice(0, idx) + next + full.slice(idx + old.length)
}

// ─── Types ────────────────────────────────────────────────────────────────
type ChatMsg = { id: string; role: 'user' | 'forgi' | 'info'; text: string; isError?: boolean }
type Criterion = { name: string; score: number; feedback: string }
type ScoreResult = { score: number; criteria: Criterion[]; top_recommendations: string[] }

const SECTION_ICONS: Record<string, string> = {
  hero: '🎯', services: '⚙️', how_it_works: '📋', about: '👥',
  benefits: '✅', stats: '📊', testimonials: '⭐', gallery: '🖼️',
  team: '🙋', pricing: '💰', faq: '❓', contact_form: '📩',
  contact: '📩', cta_final: '🚀', navbar: '📌', footer: '🔻',
}

// ─────────────────────────────────────────────────────────────────────────
export default function EditorPage() {
  const { id } = useParams<{ id: string }>()

  const [html, setHtml]                 = useState<string | null>(null)
  const [noData, setNoData]             = useState(false)
  const [iframeSrc, setIframeSrc]       = useState('')
  const [businessName, setBusinessName] = useState('')
  const [sections, setSections]         = useState<Array<{ id: string; label: string }>>([])

  // Block editor state
  const [selected, setSelected]         = useState<{ id: string; label: string } | null>(null)
  const [prompt, setPrompt]             = useState('')
  const [applying, setApplying]         = useState(false)
  const [applyError, setApplyError]     = useState('')
  const [applySuccess, setApplySuccess] = useState(false)

  // Block panel — image + video attachments
  const [blockImage, setBlockImage]         = useState<{ url: string; name: string } | null>(null)
  const [blockUploading, setBlockUploading] = useState(false)
  const [blockUploadErr, setBlockUploadErr] = useState('')
  const [blockEmbed, setBlockEmbed]         = useState('')
  const [blockShowEmbed, setBlockShowEmbed] = useState(false)
  const blockFileRef                        = useRef<HTMLInputElement>(null)

  // Undo (shared between block + global edits)
  const [undoHtml, setUndoHtml]         = useState<string | null>(null)

  // Panel mode
  const [panelMode, setPanelMode]       = useState<'blocks' | 'global' | 'score' | 'knowledge'>('blocks')

  // Conversion Score state
  const [scoreData, setScoreData]       = useState<ScoreResult | null>(null)
  const [scoring, setScoring]           = useState(false)
  const [scoreError, setScoreError]     = useState('')

  // Knowledge base state
  const [kbItems, setKbItems]           = useState<Array<{ id: string; title: string; content_type: string; content_text?: string; created_at: string }>>([])
  const [kbLoading, setKbLoading]       = useState(false)
  const [kbTitle, setKbTitle]           = useState('')
  const [kbContent, setKbContent]       = useState('')
  const [kbSaving, setKbSaving]         = useState(false)
  const [kbError, setKbError]           = useState('')
  const [kbFileUploading, setKbFileUploading] = useState(false)
  const kbFileRef                       = useRef<HTMLInputElement>(null)

  // Global chat state
  const [chatMessages, setChatMessages] = useState<ChatMsg[]>([
    { id: 'welcome', role: 'info', text: 'Hola! Puedo hacer cambios globales: añadir secciones, cambiar el tono, redesign de colores... ¿Qué necesitas?' },
  ])
  const [chatPrompt, setChatPrompt]     = useState('')
  const [chatApplying, setChatApplying] = useState(false)
  const chatEndRef                      = useRef<HTMLDivElement>(null)

  // Global chat — image + video attachments
  const [chatImage, setChatImage]         = useState<{ url: string; name: string } | null>(null)
  const [chatUploading, setChatUploading] = useState(false)
  const [chatUploadErr, setChatUploadErr] = useState('')
  const [chatEmbed, setChatEmbed]         = useState('')
  const [chatShowEmbed, setChatShowEmbed] = useState(false)
  const chatFileRef                       = useRef<HTMLInputElement>(null)
  const liveHtmlRef                     = useRef<string | null>(null)
  const supabaseSaveTimer               = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Keep liveHtmlRef in sync with html state (initial load, AI edits, undo)
  useEffect(() => { liveHtmlRef.current = html }, [html])

  function scheduleSupabaseSave(newHtml: string) {
    if (!id) return
    if (supabaseSaveTimer.current) clearTimeout(supabaseSaveTimer.current)
    supabaseSaveTimer.current = setTimeout(() => {
      fetch(`/api/landing/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html_content: newHtml }),
      }).catch(e => console.warn('Text-edit Supabase save failed:', e))
    }, 2000)
  }

  // Reset block attachments when switching sections
  useEffect(() => {
    setBlockImage(null); setBlockUploadErr(''); setBlockEmbed(''); setBlockShowEmbed(false)
  }, [selected])

  // Shared image upload helper
  async function uploadImage(
    file: File,
    setUploading: (v: boolean) => void,
    onSuccess: (url: string, name: string) => void,
    onError: (msg: string) => void,
  ) {
    const ALLOWED = ['image/jpeg','image/jpg','image/png','image/webp','image/gif','image/svg+xml']
    if (!ALLOWED.includes(file.type) && !file.type.startsWith('image/')) { onError('Formato no soportado. Usa WebP, PNG o JPG'); return }
    if (file.size > 5 * 1024 * 1024) { onError('Imagen demasiado grande (máx 5 MB)'); return }
    setUploading(true)
    try {
      const form = new FormData()
      form.append('file', file)
      const res = await fetch('/api/upload-image', { method: 'POST', body: form })
      const data = await res.json() as { url?: string; error?: string }
      if (!res.ok || data.error) throw new Error(data.error || `Error ${res.status}`)
      onSuccess(data.url!, file.name)
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Error al subir imagen')
    } finally {
      setUploading(false)
    }
  }

  // ── Load ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!id) return
    fetch(`/api/landing/${id}`)
      .then(r => r.json())
      .then((data: { html?: string; businessName?: string }) => {
        if (data.html) { setHtml(data.html); setBusinessName(data.businessName || ''); setSections(extractSections(data.html)) }
        else setNoData(true)
      })
      .catch(() => setNoData(true))
  }, [id])

  // ── Iframe blob ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (!html) return
    const blob = new Blob([buildEditorHtml(html)], { type: 'text/html; charset=utf-8' })
    const url  = URL.createObjectURL(blob)
    setIframeSrc(url)
    return () => URL.revokeObjectURL(url)
  }, [html])

  // ── postMessage from iframe ───────────────────────────────────────────────
  useEffect(() => {
    function onMsg(e: MessageEvent) {
      if (!e.data) return
      if (e.data.type === 'forgi-edit') {
        setSelected({ id: e.data.sectionId, label: e.data.sectionLabel })
        setPrompt(''); setApplyError(''); setApplySuccess(false)
        setPanelMode('blocks')
      } else if (e.data.type === 'forgi-text-edit') {
        if (!liveHtmlRef.current) return
        const oldSec = extractSectionHtml(liveHtmlRef.current, e.data.sectionId)
        if (!oldSec) return
        const newHtml = replaceSectionHtml(liveHtmlRef.current, oldSec, e.data.sectionHtml)
        liveHtmlRef.current = newHtml
        scheduleSupabaseSave(newHtml)
      }
    }
    window.addEventListener('message', onMsg)
    return () => window.removeEventListener('message', onMsg)
  }, [])

  // ── Auto-scroll chat ──────────────────────────────────────────────────────
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages, chatApplying])

  // ── Shared save helper ────────────────────────────────────────────────────
  function persistHtml(newHtml: string) {
    setUndoHtml(html)
    setHtml(newHtml)
    setSections(extractSections(newHtml))
    if (id) {
      fetch(`/api/landing/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html_content: newHtml }),
      }).catch(console.error)
    }
  }

  // ── Block edit ────────────────────────────────────────────────────────────
  async function handleApply() {
    if (!html || !selected || !prompt.trim() || applying) return
    setApplyError(''); setApplySuccess(false); setApplying(true)
    try {
      const sectionHtml = extractSectionHtml(html, selected.id)
      if (!sectionHtml) throw new Error(`No se encontró la sección "${selected.label}"`)
      const res = await fetch('/api/forgi-edit', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sectionId: selected.id, sectionLabel: selected.label, sectionHtml, userPrompt: prompt.trim(),
          ...(blockImage ? { imageUrl: blockImage.url } : {}),
          ...(blockEmbed.trim() ? { embedCode: urlToEmbed(blockEmbed) } : {}),
        }),
      })
      // Handle SSE streaming response
      if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error((d as { error?: string }).error || `Error ${res.status}`) }
      if (!res.body) throw new Error('No se recibió respuesta del servidor')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buf = ''
      let newSectionHtml = ''

      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          buf += decoder.decode(value, { stream: true })
          const parts = buf.split('\n\n')
          buf = parts.pop() ?? ''
          for (const part of parts) {
            if (!part.startsWith('data: ')) continue
            try {
              const ev = JSON.parse(part.slice(6)) as { type: string; text?: string; newSectionHtml?: string; msg?: string }
              if (ev.type === 'chunk' && ev.text) { /* streaming chunks — Haiku is fast, just accumulate */ }
              else if (ev.type === 'done' && ev.newSectionHtml) newSectionHtml = ev.newSectionHtml
              else if (ev.type === 'error') throw new Error(ev.msg || 'Error de IA')
            } catch (pe) { if (pe instanceof Error && pe.message !== 'Unexpected end of JSON input') throw pe }
          }
        }
      } finally { reader.releaseLock() }

      if (!newSectionHtml) throw new Error('La IA no devolvió HTML')
      const newHtml = replaceSectionHtml(html, sectionHtml, newSectionHtml)
      if (newHtml === html) throw new Error('No se pudo localizar la sección para reemplazar')
      persistHtml(newHtml)
      setPrompt(''); setBlockImage(null); setBlockEmbed(''); setBlockShowEmbed(false); setApplySuccess(true)
      setTimeout(() => setApplySuccess(false), 3000)
    } catch (err) { setApplyError(err instanceof Error ? err.message : 'Error inesperado') }
    finally { setApplying(false) }
  }

  // ── Global chat edit (SSE streaming) ─────────────────────────────────────
  async function handleGlobalEdit() {
    if (!html || !chatPrompt.trim() || chatApplying) return
    const userText = chatPrompt.trim()
    setChatMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userText }])
    setChatPrompt('')
    setChatApplying(true)
    try {
      const res = await fetch('/api/forgi-global', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullHtml: html, userPrompt: userText,
          ...(chatImage ? { imageUrl: chatImage.url } : {}),
          ...(chatEmbed.trim() ? { embedCode: urlToEmbed(chatEmbed) } : {}),
        }),
      })
      if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error((d as { error?: string }).error || `Error ${res.status}`) }
      if (!res.body) throw new Error('No se recibió respuesta del servidor')

      // Consume SSE stream
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buf = ''
      const chunks: string[] = []

      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          buf += decoder.decode(value, { stream: true })
          const parts = buf.split('\n\n')
          buf = parts.pop() ?? ''
          for (const part of parts) {
            if (!part.startsWith('data: ')) continue
            try {
              const ev = JSON.parse(part.slice(6)) as { type: string; text?: string; msg?: string }
              if (ev.type === 'chunk' && ev.text) chunks.push(ev.text)
              else if (ev.type === 'error') throw new Error(ev.msg || 'Error de IA')
            } catch (pe) { if (pe instanceof Error && pe.message !== 'Unexpected end of JSON input') throw pe }
          }
        }
      } finally { reader.releaseLock() }

      const newFullHtml = chunks.join('').trim()
      if (!newFullHtml || !newFullHtml.toLowerCase().includes('<html')) throw new Error('La IA no devolvió HTML válido')

      persistHtml(newFullHtml)
      setChatImage(null); setChatEmbed(''); setChatShowEmbed(false)
      setChatMessages(prev => [...prev, { id: (Date.now()+1).toString(), role: 'forgi', text: '✓ Listo. El preview se ha actualizado con tus cambios.' }])
    } catch (err) {
      setChatMessages(prev => [...prev, { id: (Date.now()+1).toString(), role: 'forgi', text: err instanceof Error ? err.message : 'Error inesperado', isError: true }])
    } finally { setChatApplying(false) }
  }

  // ── Undo ──────────────────────────────────────────────────────────────────
  function handleUndo() {
    if (!undoHtml) return
    const prev = undoHtml
    setUndoHtml(null); setHtml(prev); setSections(extractSections(prev)); setApplySuccess(false)
    if (id) fetch(`/api/landing/${id}`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ html_content: prev }) }).catch(console.error)
  }

  // ── Conversion Score ──────────────────────────────────────────────────────
  async function handleScore() {
    if (!html || scoring) return
    setScoreError(''); setScoring(true)
    try {
      const res = await fetch('/api/conversion-score', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullHtml: html }),
      })
      if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error((d as { error?: string }).error || `Error ${res.status}`) }
      setScoreData(await res.json() as ScoreResult)
    } catch (err) { setScoreError(err instanceof Error ? err.message : 'Error inesperado') }
    finally { setScoring(false) }
  }

  function applyRecommendation(rec: string) {
    setChatPrompt(rec)
    setPanelMode('global')
  }

  function onBlockKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); handleApply() }
  }
  function onChatKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); handleGlobalEdit() }
  }

  // ── Knowledge base helpers ──────────────────────────────────────────────
  async function loadKnowledge() {
    if (!id) return
    setKbLoading(true)
    try {
      const res = await fetch(`/api/chatbot-knowledge?landingId=${id}`)
      const data = await res.json() as { items?: typeof kbItems }
      setKbItems(data.items ?? [])
    } catch { /* ignore */ }
    finally { setKbLoading(false) }
  }

  async function handleAddKnowledge() {
    if (!kbContent.trim() || kbSaving || !id) return
    setKbSaving(true)
    setKbError('')
    try {
      const res = await fetch('/api/chatbot-knowledge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ landingId: id, title: kbTitle || 'Info', content: kbContent }),
      })
      const data = await res.json() as { item?: typeof kbItems[0]; error?: string }
      if (!res.ok || data.error) throw new Error(data.error || 'Error')
      setKbItems(prev => [data.item!, ...prev])
      setKbTitle('')
      setKbContent('')
    } catch (err) {
      setKbError(err instanceof Error ? err.message : 'Error al guardar')
    } finally { setKbSaving(false) }
  }

  async function handleUploadKnowledgeFile(file: File) {
    if (!id) return
    setKbFileUploading(true)
    setKbError('')
    try {
      const form = new FormData()
      form.append('landingId', id)
      form.append('title', file.name)
      form.append('file', file)
      const res = await fetch('/api/chatbot-knowledge', { method: 'POST', body: form })
      const data = await res.json() as { item?: typeof kbItems[0]; error?: string }
      if (!res.ok || data.error) throw new Error(data.error || 'Error')
      setKbItems(prev => [data.item!, ...prev])
    } catch (err) {
      setKbError(err instanceof Error ? err.message : 'Error al subir archivo')
    } finally { setKbFileUploading(false) }
  }

  async function handleDeleteKnowledge(itemId: string) {
    try {
      await fetch('/api/chatbot-knowledge', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: itemId }),
      })
      setKbItems(prev => prev.filter(i => i.id !== itemId))
    } catch { /* ignore */ }
  }

  // ─────────────────────────────────────────────────────────────────────────
  if (noData) return (
    <div style={{ minHeight:'100vh', background:UI.bg, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'16px', fontFamily:UI.font, color:UI.text }}>
      <p style={{ fontSize:'20px', fontWeight:700 }}>Landing no encontrada</p>
      <a href="/dashboard" style={{ padding:'10px 24px', borderRadius:'9px', textDecoration:'none', background:`linear-gradient(135deg,${UI.accent},${UI.accentAlt})`, color:UI.white, fontWeight:800, fontSize:'14px' }}>← Dashboard</a>
    </div>
  )

  if (!html) return (
    <div style={{ minHeight:'100vh', background:UI.bg, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'16px', fontFamily:UI.font, color:UI.text }}>
      <div style={{ fontSize:'32px', animation:'spin 1.5s linear infinite' }}>⟳</div>
      <p style={{ color:UI.gray, fontSize:'15px' }}>Cargando editor...</p>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )

  return (
    <div style={{ height:'100vh', background:UI.bg, fontFamily:UI.font, display:'flex', flexDirection:'column', overflow:'hidden' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Space+Mono:wght@700&display=swap" rel="stylesheet" />

      {/* ── TOOLBAR ─────────────────────────────────────────────────────── */}
      <div style={{ flexShrink:0, zIndex:100, background:UI.surface, backdropFilter:'blur(16px)', borderBottom:`1px solid ${UI.border}`, padding:'0 20px', height:'52px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'12px', boxShadow:'0 1px 4px rgba(157,78,221,.08)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'14px' }}>
          <a href="/" style={{ display:'flex', alignItems:'center', gap:'7px', textDecoration:'none' }}>
            <div style={{ width:'24px', height:'24px', borderRadius:'6px', background:`linear-gradient(135deg,${UI.accent},${UI.accentAlt})`, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:'12px', color:UI.white, fontFamily:UI.mono }}>L</div>
            <span style={{ fontWeight:700, fontSize:'13px', color:UI.text, fontFamily:UI.mono }}>LandForge</span>
          </a>
          <div style={{ width:'1px', height:'16px', background:UI.border }} />
          <a href="/dashboard" style={{ fontSize:'12px', color:UI.gray, textDecoration:'none' }}>← Dashboard</a>
          <div style={{ width:'1px', height:'16px', background:UI.border }} />
          <span style={{ fontSize:'13px', fontWeight:600, color:UI.text, maxWidth:'200px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{businessName || 'Landing'}</span>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
          {undoHtml && (
            <button onClick={handleUndo} style={{ padding:'6px 14px', borderRadius:'8px', border:`1px solid ${UI.border}`, background:'transparent', color:UI.gray, fontSize:'12px', fontWeight:700, cursor:'pointer' }}>
              ↩ Deshacer
            </button>
          )}
          <div style={{ padding:'4px 12px', borderRadius:'20px', fontSize:'11px', fontWeight:800, background:`${UI.accent}20`, color:UI.accent, letterSpacing:'.04em' }}>✨ FORGI EDITOR</div>
          <a href={`/preview/${id}`} style={{ padding:'6px 14px', borderRadius:'8px', textDecoration:'none', border:`1px solid ${UI.border}`, color:UI.gray, fontSize:'12px', fontWeight:700 }}>Ver preview</a>
        </div>
      </div>

      {/* ── BODY ──────────────────────────────────────────────────────────── */}
      <div style={{ display:'flex', flex:1, overflow:'hidden', minHeight:0 }}>

        {/* IFRAME */}
        <div style={{ flex:1, overflow:'hidden', position:'relative', background:UI.bgAlt }}>
          {iframeSrc && <iframe key={iframeSrc} src={iframeSrc} style={{ width:'100%', height:'100%', border:'none', display:'block' }} title="Forgi Editor" />}
          {!iframeSrc && <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}><div style={{ fontSize:'32px', animation:'spin 1.5s linear infinite' }}>⟳</div></div>}
        </div>

        {/* ── SIDE PANEL ─────────────────────────────────────────────────── */}
        <div style={{ width:UI.panelW, flexShrink:0, background:UI.surface, borderLeft:`1px solid ${UI.border}`, display:'flex', flexDirection:'column', overflow:'hidden' }}>
          {/* Panel header */}
          <div style={{ padding:'12px 16px', borderBottom:`1px solid ${UI.border}`, flexShrink:0 }}>
            <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'10px' }}>
              <div style={{ width:'26px', height:'26px', borderRadius:'7px', flexShrink:0, background:`linear-gradient(135deg,${UI.accent},${UI.accentAlt})`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'12px' }}>✨</div>
              <span style={{ fontSize:'13px', fontWeight:800, color:UI.text, fontFamily:UI.mono }}>Forgi Editor</span>
            </div>
            {/* Tabs */}
            <div style={{ display:'flex', gap:'3px', padding:'3px', borderRadius:'10px', background:UI.bgAlt, border:`1px solid ${UI.border}` }}>
              {([['blocks','✨ Bloques'],['global','💬 Global'],['score','📊 Score'],['knowledge','🧠 Info']] as const).map(([mode, label]) => (
                <button key={mode} onClick={() => { setPanelMode(mode); if (mode!=='blocks') setSelected(null); if (mode==='knowledge') loadKnowledge() }}
                  style={{ flex:1, padding:'7px 0', borderRadius:'7px', border:'none', fontSize:'11px', fontWeight:700, cursor:'pointer', transition:'all .15s',
                    background: panelMode===mode ? `linear-gradient(135deg,${UI.accent},${UI.accentAlt})` : 'transparent',
                    color: panelMode===mode ? UI.white : UI.gray,
                    boxShadow: panelMode===mode ? '0 2px 8px rgba(157,78,221,.3)' : 'none',
                  }}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Panel body */}
          <div style={{ flex:1, overflowY:'auto', display:'flex', flexDirection:'column', minHeight:0 }}>

          {/* ── GLOBAL CHAT TAB ─────────────────────────────────────────── */}
          {panelMode === 'global' && (
            <div style={{ flex:1, display:'flex', flexDirection:'column', minHeight:0 }}>
              {/* Warning */}
              <div style={{ padding:'8px 16px', background:'#F59E0B0A', borderBottom:`1px solid #F59E0B20`, display:'flex', alignItems:'flex-start', gap:'7px', flexShrink:0 }}>
                <span style={{ fontSize:'12px', marginTop:'1px', flexShrink:0 }}>⚡</span>
                <span style={{ fontSize:'11px', color:'#F59E0B', lineHeight:'1.5' }}>
                  Los cambios globales envían todo el HTML a Claude. Pueden tardar <strong>15–30 s</strong>.
                </span>
              </div>
              {/* Messages */}
              <div style={{ flex:1, overflowY:'auto', padding:'14px 16px', display:'flex', flexDirection:'column', gap:'10px' }}>
                {chatMessages.map(msg => (
                  <div key={msg.id} style={{ display:'flex', flexDirection:msg.role==='user'?'row-reverse':'row', alignItems:'flex-end', gap:'8px' }}>
                    {msg.role!=='user' && (
                      <div style={{ width:'24px', height:'24px', borderRadius:'6px', flexShrink:0, background:`linear-gradient(135deg,${UI.accent},${UI.accentAlt})`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'11px' }}>✨</div>
                    )}
                    <div style={{
                      maxWidth:'82%', padding:'10px 13px',
                      borderRadius: msg.role==='user'?'12px 12px 2px 12px':'12px 12px 12px 2px',
                      background: msg.role==='user'?`linear-gradient(135deg,${UI.accent},${UI.accentAlt})`:msg.role==='info'?UI.bgAlt:msg.isError?'#EF444415':UI.bgAlt,
                      border:`1px solid ${msg.role==='user'?'transparent':msg.isError?'#EF444430':UI.border}`,
                      fontSize:'13px', lineHeight:'1.55',
                      color: msg.isError?'#EF4444':msg.role==='user'?UI.white:UI.text,
                    }}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {chatApplying && (
                  <div style={{ display:'flex', alignItems:'flex-end', gap:'8px' }}>
                    <div style={{ width:'24px', height:'24px', borderRadius:'6px', flexShrink:0, background:`linear-gradient(135deg,${UI.accent},${UI.accentAlt})`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'11px' }}>✨</div>
                    <div style={{ padding:'12px 16px', borderRadius:'12px 12px 12px 2px', background:UI.bgAlt, border:`1px solid ${UI.border}`, display:'flex', gap:'5px', alignItems:'center' }}>
                      {[0,1,2].map(i => (
                        <span key={i} style={{ width:'6px', height:'6px', borderRadius:'50%', background:UI.accent, display:'inline-block', animation:`dot .9s ${i*0.2}s ease-in-out infinite` }} />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
              {/* Input */}
              <div style={{ padding:'12px 14px', borderTop:`1px solid ${UI.border}`, flexShrink:0 }}>
                <input ref={chatFileRef} type="file" accept="image/webp,image/png,image/jpeg,image/jpg,image/gif,image/svg+xml" style={{ display:'none' }}
                  onChange={e => {
                    const f = e.target.files?.[0]; if (!f) return; e.target.value = ''
                    uploadImage(f, setChatUploading,
                      (url, name) => { setChatImage({ url, name }); setChatUploadErr('') },
                      setChatUploadErr,
                    )
                  }}
                />
                <div style={{ display:'flex', gap:'8px', alignItems:'flex-end' }}>
                  <textarea
                    value={chatPrompt}
                    onChange={e => setChatPrompt(e.target.value)}
                    onKeyDown={onChatKeyDown}
                    disabled={chatApplying}
                    placeholder='Ej: "Añade sección de precios" · "Cambia el tono a más premium"'
                    rows={3}
                    style={{ flex:1, padding:'10px 12px', borderRadius:'10px', background:UI.surface, border:`1px solid ${UI.border}`, color:UI.text, fontSize:'13px', lineHeight:'1.5', fontFamily:UI.font, resize:'none', outline:'none', boxSizing:'border-box', opacity:chatApplying?0.6:1 }}
                    onFocus={e => { (e.target as HTMLTextAreaElement).style.borderColor=UI.accent }}
                    onBlur={e => { (e.target as HTMLTextAreaElement).style.borderColor=UI.border }}
                  />
                  <button
                    onClick={handleGlobalEdit}
                    disabled={chatApplying||!chatPrompt.trim()}
                    style={{ padding:'10px 14px', borderRadius:'10px', border:'none', background:chatPrompt.trim()&&!chatApplying?`linear-gradient(135deg,${UI.accent},${UI.accentAlt})`:UI.accentLight, color:chatPrompt.trim()&&!chatApplying?UI.white:UI.dimGray, fontSize:'18px', cursor:chatPrompt.trim()&&!chatApplying?'pointer':'not-allowed', flexShrink:0, transition:'all .15s', lineHeight:'1', height:'44px', display:'flex', alignItems:'center', justifyContent:'center' } as React.CSSProperties}
                  >
                    {chatApplying?<span style={{ display:'inline-block', animation:'spin .7s linear infinite', fontSize:'16px' }}>⟳</span>:'↑'}
                  </button>
                </div>
                {/* Chat attachments */}
                <div style={{ display:'flex', flexDirection:'column', gap:'5px', marginTop:'8px' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'6px', flexWrap:'wrap' }}>
                    <button onClick={() => chatFileRef.current?.click()} disabled={chatApplying || chatUploading}
                      style={{ display:'flex', alignItems:'center', gap:'4px', padding:'4px 9px', borderRadius:'6px', border:`1px solid ${UI.border}`, background:UI.bgAlt, color:chatImage?UI.accent:UI.gray, fontSize:'11px', fontWeight:600, cursor:'pointer', flexShrink:0 }}>
                      {chatUploading ? <><span style={{ display:'inline-block', animation:'spin .7s linear infinite' }}>⟳</span> Subiendo...</> : '📎 Imagen'}
                    </button>
                    {chatImage && (
                      <>
                        <img src={chatImage.url} alt="" style={{ width:'22px', height:'22px', objectFit:'cover', borderRadius:'3px', flexShrink:0 }} />
                        <span style={{ fontSize:'11px', color:UI.gray, flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', minWidth:0 }}>{chatImage.name}</span>
                        <button onClick={() => setChatImage(null)} style={{ background:'none', border:'none', cursor:'pointer', color:UI.dimGray, fontSize:'14px', lineHeight:1, padding:'0 2px', flexShrink:0 }}>×</button>
                      </>
                    )}
                    {chatUploadErr && <p style={{ fontSize:'11px', color:'#EF4444', margin:0, flex:'1 0 100%' }}>⚠ {chatUploadErr}</p>}
                    <button onClick={() => setChatShowEmbed(v => !v)}
                      style={{ display:'flex', alignItems:'center', gap:'4px', padding:'4px 9px', borderRadius:'6px', border:`1px solid ${UI.border}`, background:chatShowEmbed?`${UI.accent}15`:UI.bgAlt, color:chatShowEmbed?UI.accent:UI.gray, fontSize:'11px', fontWeight:600, cursor:'pointer', flexShrink:0 }}>
                      {chatShowEmbed ? '▲ Cerrar embed' : '▶ Embed video'}
                    </button>
                  </div>
                  {chatShowEmbed && (
                    <textarea value={chatEmbed} onChange={e => setChatEmbed(e.target.value)} disabled={chatApplying}
                      placeholder={'Pega URL de YouTube/Vimeo o código <iframe>...'}
                      rows={2}
                      style={{ width:'100%', padding:'8px 10px', borderRadius:'7px', background:UI.surface, border:`1px solid ${UI.border}`, color:UI.text, fontSize:'11px', lineHeight:'1.5', fontFamily:UI.mono, resize:'vertical', outline:'none', boxSizing:'border-box' }}
                      onFocus={e => { (e.target as HTMLTextAreaElement).style.borderColor=UI.accent }}
                      onBlur={e => { (e.target as HTMLTextAreaElement).style.borderColor=UI.border }}
                    />
                  )}
                </div>
                <p style={{ fontSize:'10px', color:UI.dimGray, marginTop:'6px' }}>⌘↵ · Ctrl↵ para enviar</p>
              </div>
            </div>
          )}

          {/* ── SCORE TAB ───────────────────────────────────────────────── */}
          {panelMode === 'score' && (
            <div style={{ flex:1, display:'flex', flexDirection:'column', padding:'20px', gap:'16px', overflowY:'auto' }}>

              {/* Analyze button */}
              <button onClick={handleScore} disabled={scoring||!html}
                style={{ width:'100%', padding:'12px', borderRadius:'10px', border:'none',
                  background: scoring ? UI.accentLight : `linear-gradient(135deg,${UI.accent},${UI.accentAlt})`,
                  color: scoring ? UI.dimGray : UI.white,
                  fontSize:'13px', fontWeight:800, cursor: scoring ? 'not-allowed' : 'pointer',
                  display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', transition:'all .2s',
                }}>
                {scoring
                  ? <><span style={{ display:'inline-block', animation:'spin .7s linear infinite' }}>⟳</span> Analizando...</>
                  : scoreData ? '🔄 Re-analizar' : '📊 Analizar conversión'}
              </button>

              {scoreError && (
                <div style={{ padding:'10px 14px', borderRadius:'8px', background:'#EF444412', border:'1px solid #EF444430', fontSize:'12px', color:'#EF4444' }}>⚠ {scoreError}</div>
              )}

              {/* Results */}
              {scoreData && !scoring && (() => {
                const s = scoreData.score
                const col = s >= 75 ? '#22C55E' : s >= 50 ? '#F59E0B' : '#EF4444'
                const colLight = s >= 75 ? '#22C55E15' : s >= 50 ? '#F59E0B15' : '#EF444415'
                const colBorder = s >= 75 ? '#22C55E30' : s >= 50 ? '#F59E0B30' : '#EF444430'
                return (
                  <>
                    {/* Main score */}
                    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'20px', borderRadius:'14px', background:colLight, border:`1px solid ${colBorder}` }}>
                      <div style={{ fontSize:'64px', fontWeight:900, color:col, lineHeight:1, fontFamily:UI.mono }}>{s}</div>
                      <div style={{ fontSize:'11px', fontWeight:800, color:col, letterSpacing:'.1em', textTransform:'uppercase', marginTop:'4px' }}>Conversion Score</div>
                      <div style={{ fontSize:'12px', color:UI.gray, marginTop:'6px' }}>
                        {s >= 75 ? 'Landing optimizada' : s >= 50 ? 'Margen de mejora' : 'Necesita trabajo'}
                      </div>
                    </div>

                    {/* Criteria bars */}
                    <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                      <p style={{ fontSize:'11px', fontWeight:800, color:UI.dimGray, letterSpacing:'.08em', textTransform:'uppercase' }}>Criterios</p>
                      {scoreData.criteria.map((c, i) => {
                        const bc = c.score >= 75 ? '#22C55E' : c.score >= 50 ? '#F59E0B' : '#EF4444'
                        return (
                          <div key={i}>
                            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'4px' }}>
                              <span style={{ fontSize:'12px', fontWeight:600, color:UI.text }}>{c.name}</span>
                              <span style={{ fontSize:'12px', fontWeight:800, color:bc, fontFamily:UI.mono }}>{c.score}</span>
                            </div>
                            <div style={{ height:'6px', borderRadius:'3px', background:`${UI.border}`, overflow:'hidden', marginBottom:'4px' }}>
                              <div style={{ height:'100%', width:`${c.score}%`, borderRadius:'3px', background:`linear-gradient(90deg,${bc}99,${bc})`, transition:'width .6s ease' }} />
                            </div>
                            <p style={{ fontSize:'11px', color:UI.gray, lineHeight:'1.4' }}>{c.feedback}</p>
                          </div>
                        )
                      })}
                    </div>

                    {/* Recommendations */}
                    <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
                      <p style={{ fontSize:'11px', fontWeight:800, color:UI.dimGray, letterSpacing:'.08em', textTransform:'uppercase' }}>Top recomendaciones</p>
                      {scoreData.top_recommendations.map((rec, i) => (
                        <div key={i} style={{ padding:'12px', borderRadius:'10px', background:UI.bgAlt, border:`1px solid ${UI.border}` }}>
                          <p style={{ fontSize:'12px', color:UI.text, lineHeight:'1.5', marginBottom:'8px' }}>
                            <span style={{ fontWeight:800, color:UI.accent }}>#{i+1}</span> {rec}
                          </p>
                          <button onClick={() => applyRecommendation(rec)}
                            style={{ width:'100%', padding:'7px 12px', borderRadius:'7px', border:`1px solid ${UI.accent}40`,
                              background:`${UI.accent}10`, color:UI.accent, fontSize:'11px', fontWeight:800, cursor:'pointer', transition:'all .15s',
                            }}
                            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background=`${UI.accent}20` }}
                            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background=`${UI.accent}10` }}
                          >
                            ✨ Aplicar con Forgi Global
                          </button>
                        </div>
                      ))}
                    </div>
                  </>
                )
              })()}

              {/* Empty state */}
              {!scoreData && !scoring && !scoreError && (
                <div style={{ padding:'16px', borderRadius:'12px', background:`${UI.accent}0A`, border:`1px solid ${UI.accent}20` }}>
                  <p style={{ fontSize:'13px', fontWeight:700, color:UI.accent, marginBottom:'8px' }}>¿Qué analiza?</p>
                  {[['🎯','Headline y propuesta de valor'],['📣','Efectividad de los CTAs'],['⭐','Social proof y testimonios'],['🏗️','Estructura y jerarquía visual'],['🛡️','Manejo de objeciones'],['🔍','SEO básico']].map(([icon, text]) => (
                    <div key={text} style={{ display:'flex', gap:'8px', marginBottom:'6px' }}>
                      <span style={{ fontSize:'13px', flexShrink:0 }}>{icon}</span>
                      <span style={{ fontSize:'12px', color:UI.gray }}>{text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── KNOWLEDGE TAB ────────────────────────────────────────────── */}
          {panelMode === 'knowledge' && (
            <div style={{ flex:1, display:'flex', flexDirection:'column', padding:'16px', gap:'14px', overflowY:'auto' }}>
              <div style={{ padding:'10px 14px', borderRadius:'10px', background:`${UI.accent}0A`, border:`1px solid ${UI.accent}20` }}>
                <p style={{ fontSize:'12px', fontWeight:700, color:UI.accent, marginBottom:'4px' }}>🧠 Base de conocimiento</p>
                <p style={{ fontSize:'11px', color:UI.gray, lineHeight:1.5 }}>
                  Añade información extra sobre el negocio. Forgi Chatbot la usará para responder mejor a los visitantes.
                </p>
              </div>

              {/* Add text form */}
              <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
                <input
                  value={kbTitle}
                  onChange={e => setKbTitle(e.target.value)}
                  placeholder="Título (ej: Precios, FAQ, Horarios)"
                  style={{ padding:'8px 10px', borderRadius:'8px', border:`1px solid ${UI.border}`, background:UI.bgAlt, color:UI.text, fontSize:'12px', outline:'none', fontFamily:UI.font }}
                />
                <textarea
                  value={kbContent}
                  onChange={e => setKbContent(e.target.value)}
                  placeholder="Escribe la información que quieres que el chatbot sepa..."
                  rows={4}
                  style={{ padding:'8px 10px', borderRadius:'8px', border:`1px solid ${UI.border}`, background:UI.bgAlt, color:UI.text, fontSize:'12px', outline:'none', fontFamily:UI.font, resize:'vertical', lineHeight:1.5 }}
                />
                <div style={{ display:'flex', gap:'6px' }}>
                  <button
                    onClick={handleAddKnowledge}
                    disabled={kbSaving || !kbContent.trim()}
                    style={{
                      flex:1, padding:'8px', borderRadius:'8px', border:'none',
                      background:`linear-gradient(135deg,${UI.accent},${UI.accentAlt})`,
                      color:'#fff', fontSize:'12px', fontWeight:700, cursor: kbSaving ? 'wait' : 'pointer',
                      opacity: kbSaving || !kbContent.trim() ? 0.5 : 1, transition:'opacity .15s',
                    }}
                  >
                    {kbSaving ? '⟳ Guardando...' : '+ Añadir texto'}
                  </button>
                  <input
                    ref={kbFileRef}
                    type="file"
                    accept=".txt,.pdf,.doc,.docx"
                    style={{ display:'none' }}
                    onChange={e => { const f = e.target.files?.[0]; if (f) handleUploadKnowledgeFile(f); e.target.value = '' }}
                  />
                  <button
                    onClick={() => kbFileRef.current?.click()}
                    disabled={kbFileUploading}
                    style={{
                      padding:'8px 12px', borderRadius:'8px', border:`1px solid ${UI.border}`,
                      background:UI.surface, color:UI.accent, fontSize:'12px', fontWeight:700,
                      cursor: kbFileUploading ? 'wait' : 'pointer',
                      opacity: kbFileUploading ? 0.5 : 1,
                    }}
                  >
                    {kbFileUploading ? '⟳' : '📎 Archivo'}
                  </button>
                </div>
              </div>

              {kbError && (
                <div style={{ padding:'8px 10px', borderRadius:'8px', background:'#EF444412', border:'1px solid #EF444430', fontSize:'11px', color:'#EF4444' }}>
                  ⚠ {kbError}
                </div>
              )}

              {/* Items list */}
              {kbLoading ? (
                <div style={{ textAlign:'center', padding:'20px', color:UI.gray, fontSize:'13px' }}>
                  <span style={{ display:'inline-block', animation:'spin .7s linear infinite' }}>⟳</span> Cargando...
                </div>
              ) : kbItems.length === 0 ? (
                <p style={{ fontSize:'12px', color:UI.dimGray, textAlign:'center', padding:'16px 0' }}>
                  Sin información añadida todavía
                </p>
              ) : (
                <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
                  {kbItems.map(item => (
                    <div key={item.id} style={{
                      padding:'10px 12px', borderRadius:'10px',
                      background:UI.bgAlt, border:`1px solid ${UI.border}`,
                    }}>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'4px' }}>
                        <span style={{ fontSize:'12px', fontWeight:700, color:UI.text }}>
                          {item.content_type === 'file' ? '📎' : '📝'} {item.title}
                        </span>
                        <button
                          onClick={() => handleDeleteKnowledge(item.id)}
                          style={{ background:'none', border:'none', cursor:'pointer', color:'#EF4444', fontSize:'13px', padding:'0 2px' }}
                        >✕</button>
                      </div>
                      {item.content_text && (
                        <p style={{ fontSize:'11px', color:UI.gray, lineHeight:1.4, maxHeight:'60px', overflow:'hidden', textOverflow:'ellipsis' }}>
                          {item.content_text.slice(0, 200)}{item.content_text.length > 200 ? '...' : ''}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── BLOCKS TAB ──────────────────────────────────────────────── */}
          {panelMode === 'blocks' && <div style={{ padding:'20px' }}>

            {/* NO SELECTION */}
            {!selected && (
              <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
                <div style={{ padding:'16px', borderRadius:'12px', background:`${UI.accent}0A`, border:`1px solid ${UI.accent}20` }}>
                  <p style={{ fontSize:'13px', fontWeight:700, color:UI.accent, marginBottom:'10px' }}>Edición por bloques</p>
                  {([['👆','Pasa el ratón sobre una sección de la landing'],['✨','Clic en el botón verde que aparece'],['💬','Escribe qué quieres cambiar'],['⚡','Forgi aplica el cambio en segundos']] as [string,string][]).map(([icon,text]) => (
                    <div key={icon} style={{ display:'flex', gap:'10px', marginBottom:'8px' }}>
                      <span style={{ fontSize:'14px', flexShrink:0 }}>{icon}</span>
                      <span style={{ fontSize:'12px', color:UI.gray, lineHeight:'1.5' }}>{text}</span>
                    </div>
                  ))}
                </div>
                {sections.length > 0 && (
                  <div>
                    <p style={{ fontSize:'11px', fontWeight:800, color:UI.dimGray, letterSpacing:'.08em', textTransform:'uppercase', marginBottom:'10px' }}>Secciones ({sections.length})</p>
                    <div style={{ display:'flex', flexDirection:'column', gap:'4px' }}>
                      {sections.map(s => (
                        <button key={s.id} onClick={() => { setSelected(s); setPrompt(''); setApplyError(''); setApplySuccess(false) }}
                          style={{ display:'flex', alignItems:'center', gap:'10px', padding:'8px 12px', borderRadius:'8px', background:UI.bgAlt, border:`1px solid ${UI.border}`, fontSize:'13px', color:UI.gray, cursor:'pointer', textAlign:'left', transition:'all .15s' }}
                          onMouseEnter={e => { const b=e.currentTarget as HTMLButtonElement; b.style.borderColor=UI.accent+'80'; b.style.color=UI.text }}
                          onMouseLeave={e => { const b=e.currentTarget as HTMLButtonElement; b.style.borderColor=UI.border; b.style.color=UI.gray }}
                        >
                          <span>{SECTION_ICONS[s.id]||'📄'}</span><span>{s.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {sections.length === 0 && (
                  <div style={{ padding:'14px', borderRadius:'10px', background:'#F59E0B0A', border:'1px solid #F59E0B25', fontSize:'12px', color:'#F59E0B' }}>
                    ⚠ No se detectaron secciones editables. Regenera esta landing para activar el editor.
                  </div>
                )}
              </div>
            )}

            {/* SECTION SELECTED */}
            {selected && (
              <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                    <span style={{ fontSize:'20px' }}>{SECTION_ICONS[selected.id]||'📄'}</span>
                    <div>
                      <div style={{ fontSize:'14px', fontWeight:800, color:UI.text }}>{selected.label}</div>
                      <div style={{ fontSize:'11px', color:UI.dimGray, fontFamily:UI.mono }}>#{selected.id}</div>
                    </div>
                  </div>
                  <button onClick={() => { setSelected(null); setApplyError(''); setApplySuccess(false) }}
                    style={{ padding:'4px 10px', borderRadius:'6px', background:'transparent', border:`1px solid ${UI.border}`, color:UI.gray, fontSize:'12px', cursor:'pointer' }}>✕</button>
                </div>
                <div style={{ height:'1px', background:UI.border }} />
                <div>
                  <label style={{ display:'block', fontSize:'12px', fontWeight:700, color:UI.gray, marginBottom:'8px' }}>¿Qué quieres cambiar?</label>
                  <textarea value={prompt} onChange={e => setPrompt(e.target.value)} onKeyDown={onBlockKeyDown} disabled={applying}
                    placeholder='Ej: "Cambia el headline" · "Añade badge de oferta" · "Haz el CTA más llamativo"'
                    rows={5}
                    style={{ width:'100%', padding:'12px', borderRadius:'10px', background:UI.surface, border:`1px solid ${UI.border}`, color:UI.text, fontSize:'13px', lineHeight:'1.6', fontFamily:UI.font, resize:'vertical', outline:'none', boxSizing:'border-box', opacity:applying?0.6:1 }}
                    onFocus={e => { (e.target as HTMLTextAreaElement).style.borderColor=UI.accent }}
                    onBlur={e => { (e.target as HTMLTextAreaElement).style.borderColor=UI.border }}
                  />
                  <p style={{ fontSize:'11px', color:UI.dimGray, marginTop:'5px' }}>⌘↵ · Ctrl↵ para aplicar</p>
                </div>

                {/* ── Attachments ── */}
                <input ref={blockFileRef} type="file" accept="image/webp,image/png,image/jpeg,image/jpg,image/gif,image/svg+xml" style={{ display:'none' }}
                  onChange={e => {
                    const f = e.target.files?.[0]; if (!f) return; e.target.value = ''
                    uploadImage(f, setBlockUploading,
                      (url, name) => { setBlockImage({ url, name }); setBlockUploadErr('') },
                      setBlockUploadErr,
                    )
                  }}
                />
                <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
                  {/* Image row */}
                  <div style={{ display:'flex', alignItems:'center', gap:'6px', flexWrap:'wrap' }}>
                    <button onClick={() => blockFileRef.current?.click()} disabled={applying || blockUploading}
                      style={{ display:'flex', alignItems:'center', gap:'5px', padding:'5px 10px', borderRadius:'7px', border:`1px solid ${UI.border}`, background:UI.bgAlt, color:blockImage?UI.accent:UI.gray, fontSize:'12px', fontWeight:600, cursor:'pointer', flexShrink:0 }}>
                      {blockUploading ? <><span style={{ display:'inline-block', animation:'spin .7s linear infinite' }}>⟳</span> Subiendo...</> : '📎 Imagen'}
                    </button>
                    {blockImage && (
                      <>
                        <img src={blockImage.url} alt="" style={{ width:'28px', height:'28px', objectFit:'cover', borderRadius:'4px', flexShrink:0 }} />
                        <span style={{ fontSize:'11px', color:UI.gray, flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', minWidth:0 }}>{blockImage.name}</span>
                        <button onClick={() => setBlockImage(null)} style={{ background:'none', border:'none', cursor:'pointer', color:UI.dimGray, fontSize:'14px', lineHeight:1, padding:'0 2px', flexShrink:0 }}>×</button>
                      </>
                    )}
                  </div>
                  {blockUploadErr && <p style={{ fontSize:'11px', color:'#EF4444', margin:0 }}>⚠ {blockUploadErr}</p>}
                  {/* Video embed toggle */}
                  <button onClick={() => setBlockShowEmbed(v => !v)}
                    style={{ display:'flex', alignItems:'center', gap:'5px', padding:'5px 10px', borderRadius:'7px', border:`1px solid ${UI.border}`, background:blockShowEmbed?`${UI.accent}15`:UI.bgAlt, color:blockShowEmbed?UI.accent:UI.gray, fontSize:'12px', fontWeight:600, cursor:'pointer', width:'fit-content' }}>
                    {blockShowEmbed ? '▲ Cerrar embed' : '▶ Incrustar video'}
                  </button>
                  {blockShowEmbed && (
                    <textarea value={blockEmbed} onChange={e => setBlockEmbed(e.target.value)} disabled={applying}
                      placeholder={'Pega URL de YouTube/Vimeo o código <iframe>...\nEj: <iframe src="https://www.youtube.com/embed/..." ...>'}
                      rows={3}
                      style={{ width:'100%', padding:'9px 11px', borderRadius:'8px', background:UI.surface, border:`1px solid ${UI.border}`, color:UI.text, fontSize:'12px', lineHeight:'1.5', fontFamily:UI.mono, resize:'vertical', outline:'none', boxSizing:'border-box' }}
                      onFocus={e => { (e.target as HTMLTextAreaElement).style.borderColor=UI.accent }}
                      onBlur={e => { (e.target as HTMLTextAreaElement).style.borderColor=UI.border }}
                    />
                  )}
                </div>

                {applyError && <div style={{ padding:'10px 14px', borderRadius:'8px', background:'#EF444412', border:'1px solid #EF444430', fontSize:'12px', color:'#EF4444' }}>⚠ {applyError}</div>}
                <button onClick={handleApply} disabled={applying||!prompt.trim()}
                  style={{ width:'100%', padding:'13px', borderRadius:'10px', border:'none', background:applySuccess?'linear-gradient(135deg,#22C55E,#16A34A)':applying?UI.accentLight:prompt.trim()?`linear-gradient(135deg,${UI.accent},${UI.accentAlt})`:UI.accentLight, color:(applying||!prompt.trim())?UI.dimGray:UI.white, fontSize:'14px', fontWeight:800, cursor:(applying||!prompt.trim())?'not-allowed':'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', transition:'all .2s' } as React.CSSProperties}>
                  {applySuccess?'✓ Cambio aplicado':applying?<><span style={{ display:'inline-block', animation:'spin .7s linear infinite' }}>⟳</span> Aplicando...</>:'✨ Aplicar cambio'}
                </button>
                {sections.length > 1 && (
                  <div>
                    <p style={{ fontSize:'11px', fontWeight:800, color:UI.dimGray, letterSpacing:'.08em', textTransform:'uppercase', marginBottom:'8px' }}>Cambiar sección</p>
                    <div style={{ display:'flex', flexDirection:'column', gap:'3px' }}>
                      {sections.filter(s => s.id!==selected.id).map(s => (
                        <button key={s.id} onClick={() => { setSelected(s); setPrompt(''); setApplyError(''); setApplySuccess(false) }}
                          style={{ display:'flex', alignItems:'center', gap:'8px', padding:'7px 10px', borderRadius:'7px', background:'transparent', border:`1px solid ${UI.border}`, color:UI.gray, fontSize:'12px', cursor:'pointer', textAlign:'left', transition:'all .15s' }}
                          onMouseEnter={e => { const b=e.currentTarget as HTMLButtonElement; b.style.borderColor=UI.accent+'80'; b.style.color=UI.text }}
                          onMouseLeave={e => { const b=e.currentTarget as HTMLButtonElement; b.style.borderColor=UI.border; b.style.color=UI.gray }}
                        >
                          <span>{SECTION_ICONS[s.id]||'📄'}</span><span>{s.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>}{/* end blocks tab */}
          </div>{/* end panel body */}
        </div>
      </div>

      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        @keyframes spin { to { transform:rotate(360deg); } }
        @keyframes chatIn { from { opacity:0; transform:translateY(12px) scale(.97); } to { opacity:1; transform:translateY(0) scale(1); } }
        @keyframes dot { 0%,80%,100% { transform:scale(.6); opacity:.4; } 40% { transform:scale(1); opacity:1; } }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-track { background:transparent; }
        ::-webkit-scrollbar-thumb { background:#E0AAFF; border-radius:4px; }
      `}</style>
    </div>
  )
}
