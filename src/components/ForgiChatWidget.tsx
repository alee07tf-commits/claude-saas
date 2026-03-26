'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

// Pages where the chatbot should NOT appear (app-internal pages)
const EXCLUDED_PATHS = ['/survey', '/dashboard', '/editor', '/preview', '/login', '/register', '/forgot-password', '/auth']

const ACCENT     = '#9D4EDD'
const ACCENT_ALT = '#7B2CBF'
const BORDER     = '#E0AAFF'
const BG_ALT     = '#F3E8FF'
const TEXT       = '#1A1A2E'
const GRAY       = '#6B7280'

/* ── Forgi Avatar ── */
function ForgiAvatar({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
      <defs>
        <radialGradient id="fgBg2" cx="35%" cy="28%" r="78%">
          <stop offset="0%" stopColor="#C77DFF" />
          <stop offset="58%" stopColor="#9D4EDD" />
          <stop offset="100%" stopColor="#3D0070" />
        </radialGradient>
        <radialGradient id="fgEye2" cx="30%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#F3E8FF" />
          <stop offset="100%" stopColor="#E0AAFF" />
        </radialGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill="url(#fgBg2)" />
      <ellipse cx="13.5" cy="11" rx="10" ry="5.5" fill="white" opacity="0.16" transform="rotate(-18 13.5 11)" />
      <line x1="20" y1="13.5" x2="20" y2="7" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
      <circle cx="20" cy="5.8" r="2.5" fill="white" opacity="0.7" />
      <circle cx="20" cy="5.8" r="1.2" fill="#C77DFF" />
      <rect x="3.5" y="18" width="4" height="6.5" rx="2" fill="white" opacity="0.28" />
      <rect x="32.5" y="18" width="4" height="6.5" rx="2" fill="white" opacity="0.28" />
      <circle cx="15" cy="21.5" r="4.8" fill="url(#fgEye2)" />
      <circle cx="25" cy="21.5" r="4.8" fill="url(#fgEye2)" />
      <circle cx="15" cy="21.5" r="2.7" fill="#5A009D" />
      <circle cx="25" cy="21.5" r="2.7" fill="#5A009D" />
      <circle cx="16.1" cy="20.2" r="1.1" fill="white" />
      <circle cx="26.1" cy="20.2" r="1.1" fill="white" />
      <path d="M13.5 28 Q20 33.5 26.5 28" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.85" />
    </svg>
  )
}

/* ── Forgi message renderer — handles **bold**, line breaks, - lists ── */
function ForgiText({ text }: { text: string }) {
  const lines = text.split('\n').filter(l => l.trim() !== '')
  return (
    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {lines.map((line, i) => {
        const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={j}>{part.slice(2, -2)}</strong>
            : part
        )
        const isBullet = line.trimStart().startsWith('- ') || line.trimStart().startsWith('• ')
        return (
          <span key={i} style={{ display: 'flex', gap: isBullet ? '6px' : '0', alignItems: 'flex-start' }}>
            {isBullet && <span style={{ flexShrink: 0, marginTop: '2px', opacity: 0.6 }}>·</span>}
            <span>{isBullet ? parts.map((p, j) => typeof p === 'string' ? p.replace(/^[-•]\s*/, '') : p) : parts}</span>
          </span>
        )
      })}
    </span>
  )
}

/* ── Main widget ── */
type ForgiMsg = { role: 'user' | 'forgi'; text: string; loading?: boolean }

export default function ForgiChatWidget() {
  const pathname = usePathname()

  // Don't render on app-internal pages
  if (EXCLUDED_PATHS.some(p => pathname.startsWith(p))) return null

  return <ForgiChatWidgetInner />
}

function ForgiChatWidgetInner() {
  const [open, setOpen]       = useState(false)
  const [input, setInput]     = useState('')
  const [msgs, setMsgs]       = useState<ForgiMsg[]>([])
  const [working, setWorking] = useState(false)
  const [badge, setBadge]     = useState(false)
  const [teaser, setTeaser]   = useState(false)

  const historyRef = useRef<{ role: 'user' | 'assistant'; content: string }[]>([])
  const endRef     = useRef<HTMLDivElement>(null)

  // Show teaser after 3 s on first load
  useEffect(() => {
    const t = setTimeout(() => {
      setMsgs([{ role: 'forgi', text: '¡Hola! Soy Forgi 👋 El asistente IA de LandForge. Puedo contarte cómo funciona, qué planes tenemos, o resolver cualquier duda. ¡Y de paso, estás viendo cómo funciono en las landings de tus clientes! 😉' }])
      setBadge(true)
      setTeaser(true)
    }, 3000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    setTimeout(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), 50)
  }, [msgs])

  async function handleSend() {
    const text = input.trim()
    if (!text || working) return
    setInput('')
    setWorking(true)
    setMsgs(prev => [...prev, { role: 'user', text }, { role: 'forgi', text: 'Forgi está pensando...', loading: true }])
    try {
      const res = await fetch('/api/forgi-landforge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, conversation_history: historyRef.current }),
      })
      const data = await res.json() as { reply?: string; error?: string }
      if (!res.ok || data.error) throw new Error(data.error || `Error ${res.status}`)
      historyRef.current = [...historyRef.current, { role: 'user', content: text }, { role: 'assistant', content: data.reply! }]
      setMsgs(prev => [...prev.slice(0, -1), { role: 'forgi', text: data.reply! }])
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Error desconocido'
      setMsgs(prev => [...prev.slice(0, -1), { role: 'forgi', text: `❌ ${msg}` }])
    } finally {
      setWorking(false)
    }
  }

  function openChat() { setOpen(true); setBadge(false); setTeaser(false) }
  function closeChat() { setOpen(false) }

  return (
    <>
      {/* Teaser bubble */}
      {teaser && !open && (
        <div style={{
          position: 'fixed', bottom: '102px', right: '24px', zIndex: 9998,
          background: '#fff', borderRadius: '14px 14px 4px 14px',
          boxShadow: '0 8px 32px rgba(157,78,221,0.22)',
          border: `1px solid ${BORDER}`,
          padding: '12px 14px 12px 12px',
          maxWidth: '230px',
          display: 'flex', alignItems: 'flex-start', gap: '8px',
          animation: 'forgiPopIn .35s cubic-bezier(0.34,1.56,0.64,1)',
          fontFamily: "'DM Sans', -apple-system, sans-serif",
        }}>
          <ForgiAvatar size={26} />
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '12px', color: TEXT, lineHeight: 1.45, margin: 0 }}>
              👋 ¡Hola! Soy <strong>Forgi</strong>, tu asistente IA.<br />¿Te ayudo a conocer LandForge?
            </p>
            <button
              onClick={openChat}
              style={{
                marginTop: '8px', padding: '5px 12px', borderRadius: '20px', border: 'none',
                background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_ALT})`,
                color: '#fff', fontSize: '11px', fontWeight: 700, cursor: 'pointer',
              }}
            >Empezar chat →</button>
          </div>
          <button
            onClick={() => setTeaser(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: GRAY, fontSize: '14px', lineHeight: 1, padding: '0 0 0 2px', flexShrink: 0 }}
          >✕</button>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => open ? closeChat() : openChat()}
        title="Habla con Forgi"
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
          width: '64px', height: '64px', borderRadius: '50%', border: 'none',
          background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_ALT})`,
          cursor: 'pointer',
          boxShadow: `0 6px 28px ${ACCENT}55`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: open ? 'none' : 'forgiFloat 3s ease-in-out infinite',
          transition: 'transform .2s, box-shadow .2s',
          padding: 0, overflow: 'hidden',
        } as React.CSSProperties}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 10px 36px ${ACCENT}77` }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 6px 28px ${ACCENT}55` }}
      >
        {open ? <span style={{ fontSize: '20px', lineHeight: 1, color: '#fff' }}>✕</span> : <ForgiAvatar size={44} />}
      </button>

      {/* Pulse ring */}
      {!open && (
        <span style={{
          position: 'fixed', bottom: '18px', right: '18px', zIndex: 9998,
          width: '76px', height: '76px', borderRadius: '50%',
          border: `2px solid ${ACCENT}55`,
          animation: 'forgiRingPulse 2.5s ease-out infinite',
          pointerEvents: 'none',
        }} />
      )}

      {/* Badge */}
      {badge && !open && (
        <span style={{
          position: 'fixed', bottom: '72px', right: '18px', zIndex: 10000,
          width: '17px', height: '17px', borderRadius: '50%',
          background: '#EF4444', border: '2px solid #fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '9px', fontWeight: 800, color: '#fff', lineHeight: 1,
          pointerEvents: 'none',
        }}>1</span>
      )}

      {/* Chat panel */}
      {open && (
        <div style={{
          position: 'fixed', bottom: '96px', right: '24px', zIndex: 9999,
          width: '360px', maxWidth: 'calc(100vw - 32px)',
          background: '#fff', borderRadius: '16px',
          border: `1px solid ${BORDER}`,
          boxShadow: `0 16px 56px rgba(157,78,221,0.18)`,
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          animation: 'forgiSlideUp .2s ease',
          fontFamily: "'DM Sans', -apple-system, sans-serif",
        }}>
          {/* Header */}
          <div style={{
            padding: '14px 16px',
            background: `linear-gradient(135deg, ${ACCENT}14, ${ACCENT_ALT}0A)`,
            borderBottom: `1px solid ${BORDER}`,
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <ForgiAvatar size={34} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: '14px', color: TEXT }}>Forgi ✨</div>
              <div style={{ fontSize: '11px', color: GRAY }}>Asistente IA · LandForge</div>
            </div>
            <button
              onClick={closeChat}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: GRAY, fontSize: '16px', lineHeight: 1, padding: '4px' }}
            >✕</button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: 'auto', padding: '16px',
            display: 'flex', flexDirection: 'column', gap: '10px',
            maxHeight: '340px',
          }}>
            {msgs.length === 0 && (
              <p style={{ fontSize: '13px', color: GRAY, textAlign: 'center', padding: '20px 0' }}>
                Hazme una pregunta sobre LandForge...
              </p>
            )}
            {msgs.map((msg, i) => (
              <div key={i} style={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '84%' }}>
                <div style={{
                  padding: '9px 13px', borderRadius: '12px',
                  fontSize: '13px', lineHeight: 1.5, opacity: msg.loading ? 0.6 : 1,
                  ...(msg.role === 'user' ? {
                    background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_ALT})`,
                    color: '#fff', fontWeight: 500, borderBottomRightRadius: '4px',
                  } : {
                    background: BG_ALT, color: msg.loading ? GRAY : TEXT,
                    border: `1px solid ${BORDER}`,
                    borderBottomLeftRadius: '4px',
                    fontStyle: msg.loading ? 'italic' : 'normal',
                  }),
                }}>
                  {msg.loading
                    ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ display: 'inline-block', animation: 'spin 0.8s linear infinite' }}>⟳</span>
                        {msg.text}
                      </span>
                    : msg.role === 'forgi'
                      ? <ForgiText text={msg.text} />
                      : msg.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div style={{ display: 'flex', gap: '8px', padding: '10px 12px', borderTop: `1px solid ${BORDER}` }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()}
              placeholder="Pregunta lo que quieras..."
              disabled={working}
              autoFocus
              style={{
                flex: 1, background: BG_ALT, border: `1px solid ${BORDER}`,
                borderRadius: '8px', padding: '9px 12px',
                color: TEXT, fontSize: '13px', outline: 'none',
                fontFamily: "'DM Sans', -apple-system, sans-serif",
                opacity: working ? 0.6 : 1,
              }}
            />
            <button
              onClick={handleSend}
              disabled={working}
              style={{
                width: '36px', height: '36px', borderRadius: '8px', border: 'none',
                background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_ALT})`,
                color: '#fff', fontSize: '15px',
                cursor: working ? 'wait' : 'pointer',
                flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: working ? 0.4 : 1, transition: 'opacity .15s',
              }}
            >➤</button>
          </div>
        </div>
      )}
    </>
  )
}
