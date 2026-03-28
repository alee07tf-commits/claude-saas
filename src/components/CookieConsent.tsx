'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const EXCLUDED_PATHS = ['/survey', '/dashboard', '/editor', '/preview', '/login', '/register', '/forgot-password', '/auth']
const STORAGE_KEY = 'landforge_cookie_consent'

const ACCENT     = '#9D4EDD'
const ACCENT_ALT = '#7B2CBF'
const BG         = '#FFFFFF'
const TEXT       = '#1A1A2E'
const GRAY       = '#6B7280'
const BORDER     = '#E0AAFF'

type ConsentLevel = 'all' | 'essential' | 'custom'
interface ConsentData {
  level: ConsentLevel
  analytics: boolean
  marketing: boolean
  timestamp: string
}

function getConsent(): ConsentData | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

function saveConsent(data: ConsentData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

/* ── Inner Component ── */
function CookieConsentInner() {
  const [visible, setVisible] = useState(false)
  const [showConfig, setShowConfig] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const consent = getConsent()
    if (!consent) setVisible(true)
  }, [])

  const accept = (level: ConsentLevel) => {
    const data: ConsentData = {
      level,
      analytics: level === 'all' || (level === 'custom' && analytics),
      marketing: level === 'all' || (level === 'custom' && marketing),
      timestamp: new Date().toISOString(),
    }
    saveConsent(data)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9998,
      background: 'rgba(26,26,46,0.5)', backdropFilter: 'blur(4px)',
    }}>
      <div style={{
        maxWidth: '720px', margin: '0 auto', padding: '20px 24px',
        background: BG, borderTop: `2px solid ${BORDER}`,
        borderRadius: '16px 16px 0 0', boxShadow: '0 -4px 24px rgba(0,0,0,0.12)',
      }}>
        {!showConfig ? (
          <>
            <p style={{ fontSize: '14px', color: TEXT, lineHeight: 1.6, margin: '0 0 4px' }}>
              <strong>Usamos cookies</strong> para garantizar el funcionamiento del sitio y mejorar tu experiencia.
              Puedes aceptar todas, solo las esenciales o configurar tus preferencias.
            </p>
            <p style={{ fontSize: '12px', color: GRAY, margin: '0 0 16px' }}>
              Más información en nuestra{' '}
              <Link href="/politica-cookies" style={{ color: ACCENT, textDecoration: 'underline' }}>
                Política de Cookies
              </Link>.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button onClick={() => accept('all')} style={{
                padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_ALT})`,
                color: '#fff', fontWeight: 600, fontSize: '13px',
              }}>
                Aceptar todas
              </button>
              <button onClick={() => accept('essential')} style={{
                padding: '10px 20px', borderRadius: '8px', cursor: 'pointer',
                background: 'transparent', border: `1px solid ${BORDER}`,
                color: TEXT, fontWeight: 600, fontSize: '13px',
              }}>
                Solo esenciales
              </button>
              <button onClick={() => setShowConfig(true)} style={{
                padding: '10px 20px', borderRadius: '8px', cursor: 'pointer',
                background: 'transparent', border: 'none',
                color: GRAY, fontWeight: 500, fontSize: '13px', textDecoration: 'underline',
              }}>
                Configurar
              </button>
            </div>
          </>
        ) : (
          <>
            <p style={{ fontSize: '14px', color: TEXT, fontWeight: 700, margin: '0 0 14px' }}>
              Configurar cookies
            </p>

            {/* Essential — always on */}
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '13px', color: TEXT }}>
              <input type="checkbox" checked disabled style={{ accentColor: ACCENT }} />
              <span><strong>Esenciales</strong> — necesarias para el funcionamiento del sitio (autenticación, pagos)</span>
            </label>

            {/* Analytics */}
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '13px', color: TEXT, cursor: 'pointer' }}>
              <input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} style={{ accentColor: ACCENT }} />
              <span><strong>Analíticas</strong> — nos ayudan a entender cómo usas el sitio</span>
            </label>

            {/* Marketing */}
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', fontSize: '13px', color: TEXT, cursor: 'pointer' }}>
              <input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} style={{ accentColor: ACCENT }} />
              <span><strong>Marketing</strong> — permiten mostrarte contenido personalizado</span>
            </label>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button onClick={() => accept('custom')} style={{
                padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_ALT})`,
                color: '#fff', fontWeight: 600, fontSize: '13px',
              }}>
                Guardar preferencias
              </button>
              <button onClick={() => setShowConfig(false)} style={{
                padding: '10px 20px', borderRadius: '8px', cursor: 'pointer',
                background: 'transparent', border: `1px solid ${BORDER}`,
                color: TEXT, fontWeight: 500, fontSize: '13px',
              }}>
                Volver
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

/* ── Public Export (conditional rendering) ── */
export default function CookieConsent() {
  const pathname = usePathname()
  if (EXCLUDED_PATHS.some(p => pathname.startsWith(p))) return null
  return <CookieConsentInner />
}
