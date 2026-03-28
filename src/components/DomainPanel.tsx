'use client'

import { useState, useEffect } from 'react'

const T = {
  bg: '#FAFAFA', card: '#FFFFFF', bgAlt: '#F3E8FF',
  border: '#E0AAFF', accent: '#9D4EDD', accentAlt: '#7B2CBF',
  text: '#1A1A2E', gray: '#6B7280', white: '#FFFFFF',
  font: "'DM Sans', -apple-system, sans-serif",
  mono: "'Space Mono', monospace",
}

export default function DomainPanel({ landingId, subdomain }: { landingId: string; subdomain: string }) {
  const [open, setOpen] = useState(false)
  const [domainInput, setDomainInput] = useState('')
  const [connecting, setConnecting] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<{
    domain: string
    dns: { type: string; host: string; value: string; note: string }
    message: string
  } | null>(null)
  const [verifying, setVerifying] = useState(false)
  const [verifyStatus, setVerifyStatus] = useState<{ status: string; message: string } | null>(null)
  const [userPlan, setUserPlan] = useState('none')
  const canDomain = userPlan === 'agency' || userPlan === 'agency_pro'

  useEffect(() => {
    fetch('/api/user-plan').then(r => r.json()).then(d => { if (d.plan) setUserPlan(d.plan) }).catch(() => {})
  }, [])

  async function handleConnect() {
    const domain = domainInput.trim()
    if (!domain || connecting) return
    setConnecting(true)
    setError('')
    setResult(null)
    try {
      const res = await fetch('/api/connect-domain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ landingId, customDomain: domain }),
      })
      const data = await res.json()
      if (!res.ok || data.error) throw new Error(data.error || `Error ${res.status}`)
      setResult({ domain: data.domain, dns: data.dns, message: data.message })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al conectar dominio')
    } finally {
      setConnecting(false)
    }
  }

  async function handleVerify() {
    if (!result?.domain || verifying) return
    setVerifying(true)
    setVerifyStatus(null)
    try {
      const res = await fetch('/api/verify-domain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: result.domain }),
      })
      const data = await res.json()
      setVerifyStatus({ status: data.configured ? 'ok' : 'pending', message: data.message || (data.configured ? 'Dominio activo' : 'DNS aún no propagado') })
    } catch {
      setVerifyStatus({ status: 'error', message: 'Error al verificar' })
    } finally {
      setVerifying(false)
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: '8px 18px', borderRadius: '8px', textDecoration: 'none',
          background: 'transparent', border: `1px solid ${T.border}`,
          color: T.accent, fontSize: '13px', fontWeight: 700, cursor: 'pointer',
        }}
      >
        🔗 Dominio
      </button>
    )
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: '8px 18px', borderRadius: '8px',
          background: T.accent, border: 'none',
          color: T.white, fontSize: '13px', fontWeight: 700, cursor: 'pointer',
        }}
      >
        🔗 Dominio
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed', inset: 0, zIndex: 100,
          background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)',
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        zIndex: 101, width: '420px', maxWidth: 'calc(100vw - 32px)',
        background: T.card, borderRadius: '16px',
        border: `1px solid ${T.border}`,
        boxShadow: '0 24px 64px rgba(157,78,221,.2)',
        fontFamily: T.font, overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 20px',
          background: `linear-gradient(135deg, ${T.accent}15, ${T.accentAlt}15)`,
          borderBottom: `1px solid ${T.border}`,
          display: 'flex', alignItems: 'center', gap: '10px',
        }}>
          <span style={{ fontSize: '22px' }}>🔗</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: '15px', color: T.text }}>Conectar dominio</div>
            <div style={{ fontSize: '11px', color: T.gray }}>Apunta tu dominio propio a esta landing</div>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.gray, fontSize: '18px', padding: '4px' }}
          >✕</button>
        </div>

        {/* Body */}
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Current URL */}
          <div>
            <div style={{ fontSize: '11px', color: T.gray, marginBottom: '4px', fontWeight: 600 }}>URL ACTUAL (LandForge)</div>
            <a
              href={subdomain}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '12px', color: T.accent, textDecoration: 'none',
                wordBreak: 'break-all', display: 'block',
                padding: '8px 12px', borderRadius: '8px',
                background: T.bgAlt, border: `1px solid ${T.border}`,
              }}
            >
              {subdomain.replace(/^https?:\/\//, '')}
            </a>
          </div>

          {/* Upsell for non-Agency users */}
          {!canDomain && !result && (
            <div style={{
              padding: '20px', borderRadius: '12px',
              background: `linear-gradient(135deg, ${T.accent}08, ${T.accentAlt}08)`,
              border: `1px solid ${T.border}`,
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>🔒</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: T.text, marginBottom: '6px' }}>
                Dominio propio no disponible en tu plan
              </div>
              <div style={{ fontSize: '13px', color: T.gray, marginBottom: '14px', lineHeight: 1.5 }}>
                Conecta tu propio dominio a tus landings con el plan Agency o superior.
              </div>
              <a
                href="/#pricing"
                style={{
                  display: 'inline-block', padding: '10px 24px', borderRadius: '10px',
                  background: `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`,
                  color: '#fff', fontSize: '14px', fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                Ver plan Agency →
              </a>
            </div>
          )}

          {/* Domain input (Agency+) */}
          {canDomain && !result && (
            <>
              <div>
                <div style={{ fontSize: '11px', color: T.gray, marginBottom: '6px', fontWeight: 600 }}>TU DOMINIO PROPIO</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    value={domainInput}
                    onChange={e => setDomainInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleConnect()}
                    placeholder="landing.tuempresa.com"
                    disabled={connecting}
                    style={{
                      flex: 1, background: T.bgAlt, border: `1px solid ${T.border}`,
                      borderRadius: '8px', padding: '10px 12px',
                      color: T.text, fontSize: '13px', outline: 'none',
                      fontFamily: T.font, opacity: connecting ? 0.6 : 1,
                    }}
                  />
                  <button
                    onClick={handleConnect}
                    disabled={connecting || !domainInput.trim()}
                    style={{
                      padding: '10px 18px', borderRadius: '8px', border: 'none',
                      background: `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`,
                      color: '#fff', fontSize: '13px', fontWeight: 700,
                      cursor: connecting ? 'wait' : 'pointer',
                      opacity: connecting || !domainInput.trim() ? 0.5 : 1,
                    }}
                  >
                    {connecting ? '⟳' : 'Conectar'}
                  </button>
                </div>
              </div>
              {error && (
                <p style={{ fontSize: '12px', color: '#EF4444', margin: 0 }}>⚠ {error}</p>
              )}
              <div style={{ fontSize: '12px', color: T.gray, lineHeight: 1.5, background: T.bgAlt, padding: '12px', borderRadius: '8px' }}>
                <strong>¿Cómo funciona?</strong><br />
                1. Introduce tu dominio o subdominio (ej: <code style={{ fontFamily: T.mono, fontSize: '11px' }}>landing.tuempresa.com</code>)<br />
                2. Te daremos los registros DNS que debes configurar<br />
                3. Configura los DNS en tu proveedor de dominio<br />
                4. Tu landing estará activa en tu dominio en 24-48h
              </div>
            </>
          )}

          {/* DNS instructions (after success) */}
          {result && (
            <>
              <div style={{ padding: '10px 12px', borderRadius: '8px', background: '#DCFCE7', border: '1px solid #BBF7D0', color: '#166534', fontSize: '13px', fontWeight: 600 }}>
                {result.message}
              </div>

              <div>
                <div style={{ fontSize: '11px', color: T.gray, marginBottom: '8px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Configuración DNS Requerida
                </div>
                <div style={{
                  background: '#0F172A', borderRadius: '12px', padding: '16px',
                  fontFamily: T.mono, fontSize: '13px', border: '1px solid #334155',
                  display: 'flex', flexDirection: 'column', gap: '10px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94A3B8' }}>Tipo</span>
                    <span style={{ color: '#F8FAFC', fontWeight: 700, background: '#334155', padding: '2px 8px', borderRadius: '4px' }}>{result.dns.type}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94A3B8' }}>Host</span>
                    <span style={{ color: '#F8FAFC', fontWeight: 700 }}>{result.dns.host}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94A3B8' }}>Valor</span>
                    <span style={{ color: '#00E5A0', fontWeight: 700, fontSize: '11px', wordBreak: 'break-all' }}>{result.dns.value}</span>
                  </div>
                </div>
                {result.dns.note && (
                  <p style={{ fontSize: '11px', color: T.gray, marginTop: '8px', lineHeight: 1.4 }}>💡 {result.dns.note}</p>
                )}
              </div>

              <button
                onClick={handleVerify}
                disabled={verifying}
                style={{
                  padding: '10px 20px', borderRadius: '8px', border: `1px solid ${T.border}`,
                  background: T.card, color: T.accent, fontSize: '13px', fontWeight: 700,
                  cursor: verifying ? 'wait' : 'pointer', width: '100%',
                }}
              >
                {verifying ? '⟳ Verificando...' : '🔍 Verificar DNS'}
              </button>
              {verifyStatus && (
                <div style={{
                  padding: '10px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: 600,
                  background: verifyStatus.status === 'ok' ? '#DCFCE7' : '#FEF3C7',
                  border: `1px solid ${verifyStatus.status === 'ok' ? '#BBF7D0' : '#FDE68A'}`,
                  color: verifyStatus.status === 'ok' ? '#166534' : '#92400E',
                }}>
                  {verifyStatus.status === 'ok' ? '✅' : '⏳'} {verifyStatus.message}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}
