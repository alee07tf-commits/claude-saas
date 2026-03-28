'use client'

import { useState, useEffect } from 'react'

const T = {
  bg: '#FAFAFA', card: '#FFFFFF', bgAlt: '#F3E8FF',
  border: '#E0AAFF', accent: '#9D4EDD', accentAlt: '#7B2CBF',
  text: '#1A1A2E', gray: '#6B7280', white: '#FFFFFF',
  font: "'DM Sans', -apple-system, sans-serif",
  mono: "'Space Mono', monospace",
}

type DnsResult = {
  domain: string
  dns: { type: string; host: string; value: string; note: string }
  message: string
}

type VerifyResult = { status: string; message: string }

export default function DomainPanel({ landingId, subdomain }: { landingId: string; subdomain: string }) {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<'choose' | 'subdomain' | 'apex'>('choose')
  const [domainInput, setDomainInput] = useState('')
  const [connecting, setConnecting] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<DnsResult | null>(null)
  const [verifying, setVerifying] = useState(false)
  const [verifyStatus, setVerifyStatus] = useState<VerifyResult | null>(null)
  const [userPlan, setUserPlan] = useState('none')
  const canDomain = userPlan === 'agency' || userPlan === 'agency_pro'

  useEffect(() => {
    fetch('/api/user-plan').then(r => r.json()).then(d => { if (d.plan) setUserPlan(d.plan) }).catch(() => {})
  }, [])

  function handleClose() {
    setOpen(false)
    if (!result) { setMode('choose'); setDomainInput(''); setError('') }
  }

  async function handleConnect() {
    const raw = domainInput.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/[/?#].*$/, '')
    if (!raw || connecting) return
    setConnecting(true)
    setError('')
    setResult(null)
    setVerifyStatus(null)
    try {
      const res = await fetch('/api/connect-domain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ landingId, customDomain: raw }),
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
      const data = await res.json() as { status?: string; message?: string }
      const st = data.status || 'pending'
      setVerifyStatus({
        status: st,
        message: data.message || 'Verificando...',
      })
    } catch {
      setVerifyStatus({ status: 'error', message: 'Error al verificar. Inténtalo de nuevo.' })
    } finally {
      setVerifying(false)
    }
  }

  // Button (closed state)
  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: '8px 18px', borderRadius: '8px',
          background: 'transparent', border: `1px solid ${T.border}`,
          color: T.accent, fontSize: '13px', fontWeight: 700, cursor: 'pointer',
        }}
      >
        🔗 Dominio
      </button>
    )
  }

  const placeholder = mode === 'apex' ? 'tuempresa.com' : 'landing.tuempresa.com'

  return (
    <>
      {/* Button (active state) */}
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
      <div onClick={handleClose} style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)',
      }} />

      {/* Modal */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        zIndex: 101, width: '440px', maxWidth: 'calc(100vw - 32px)', maxHeight: '90vh', overflowY: 'auto',
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
          <button onClick={handleClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.gray, fontSize: '18px', padding: '4px' }}>✕</button>
        </div>

        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Current LandForge URL */}
          <div>
            <div style={{ fontSize: '11px', color: T.gray, marginBottom: '4px', fontWeight: 600 }}>URL ACTUAL (LandForge)</div>
            <a href={subdomain} target="_blank" rel="noopener noreferrer" style={{
              fontSize: '12px', color: T.accent, textDecoration: 'none', wordBreak: 'break-all', display: 'block',
              padding: '8px 12px', borderRadius: '8px', background: T.bgAlt, border: `1px solid ${T.border}`,
            }}>
              {subdomain.replace(/^https?:\/\//, '')}
            </a>
          </div>

          {/* ── UPSELL (no plan) ── */}
          {!canDomain && !result && (
            <div style={{
              padding: '20px', borderRadius: '12px',
              background: `linear-gradient(135deg, ${T.accent}08, ${T.accentAlt}08)`,
              border: `1px solid ${T.border}`, textAlign: 'center',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>🔒</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: T.text, marginBottom: '6px' }}>
                Dominio propio no disponible en tu plan
              </div>
              <div style={{ fontSize: '13px', color: T.gray, marginBottom: '14px', lineHeight: 1.5 }}>
                Conecta tu propio dominio o subdominio a tus landings con el plan Agency o superior.
              </div>
              <a href="/#pricing" style={{
                display: 'inline-block', padding: '10px 24px', borderRadius: '10px',
                background: `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`,
                color: '#fff', fontSize: '14px', fontWeight: 700, textDecoration: 'none',
              }}>
                Ver plan Agency →
              </a>
            </div>
          )}

          {/* ── STEP 1: Choose mode ── */}
          {canDomain && !result && mode === 'choose' && (
            <>
              <div style={{ fontSize: '13px', fontWeight: 700, color: T.text }}>¿Cómo quieres conectar tu dominio?</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* Subdomain option */}
                <button onClick={() => setMode('subdomain')} style={{
                  padding: '16px', borderRadius: '12px', border: `1.5px solid ${T.border}`,
                  background: T.card, cursor: 'pointer', textAlign: 'left',
                  transition: 'border-color .15s, box-shadow .15s',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '20px' }}>🌐</span>
                    <span style={{ fontWeight: 700, fontSize: '14px', color: T.text }}>Como subdominio</span>
                  </div>
                  <div style={{ fontSize: '12px', color: T.gray, lineHeight: 1.5, marginLeft: '30px' }}>
                    Ej: <code style={{ fontFamily: T.mono, fontSize: '11px', background: T.bgAlt, padding: '1px 5px', borderRadius: '4px' }}>landing.tuempresa.com</code><br />
                    Necesitas crear un registro <strong>CNAME</strong> en tu proveedor de DNS.
                  </div>
                </button>

                {/* Apex domain option */}
                <button onClick={() => setMode('apex')} style={{
                  padding: '16px', borderRadius: '12px', border: `1.5px solid ${T.border}`,
                  background: T.card, cursor: 'pointer', textAlign: 'left',
                  transition: 'border-color .15s, box-shadow .15s',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '20px' }}>🏠</span>
                    <span style={{ fontWeight: 700, fontSize: '14px', color: T.text }}>Como dominio principal</span>
                  </div>
                  <div style={{ fontSize: '12px', color: T.gray, lineHeight: 1.5, marginLeft: '30px' }}>
                    Ej: <code style={{ fontFamily: T.mono, fontSize: '11px', background: T.bgAlt, padding: '1px 5px', borderRadius: '4px' }}>tuempresa.com</code><br />
                    Necesitas crear un registro <strong>A</strong> en tu proveedor de DNS.
                  </div>
                </button>
              </div>
            </>
          )}

          {/* ── STEP 2: Domain input ── */}
          {canDomain && !result && (mode === 'subdomain' || mode === 'apex') && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button onClick={() => { setMode('choose'); setError(''); setDomainInput('') }} style={{
                  background: 'none', border: 'none', cursor: 'pointer', color: T.accent, fontSize: '13px', fontWeight: 600, padding: 0,
                }}>← Volver</button>
                <span style={{
                  fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px',
                  background: mode === 'subdomain' ? '#DBEAFE' : '#FEF3C7',
                  color: mode === 'subdomain' ? '#1D4ED8' : '#92400E',
                }}>
                  {mode === 'subdomain' ? '🌐 Subdominio (CNAME)' : '🏠 Dominio principal (A)'}
                </span>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: T.gray, marginBottom: '6px', fontWeight: 600 }}>
                  {mode === 'subdomain' ? 'TU SUBDOMINIO' : 'TU DOMINIO PRINCIPAL'}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    value={domainInput}
                    onChange={e => setDomainInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleConnect()}
                    placeholder={placeholder}
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
              {error && <p style={{ fontSize: '12px', color: '#EF4444', margin: 0 }}>⚠ {error}</p>}

              {/* Instructions */}
              <div style={{ fontSize: '12px', color: T.gray, lineHeight: 1.6, background: T.bgAlt, padding: '14px', borderRadius: '10px' }}>
                {mode === 'subdomain' ? (
                  <>
                    <strong>Instrucciones para subdominio:</strong><br />
                    1. Introduce tu subdominio (ej: <code style={{ fontFamily: T.mono, fontSize: '11px' }}>landing.tuempresa.com</code>)<br />
                    2. Ve al panel DNS de tu proveedor de dominio<br />
                    3. Crea un registro <strong>CNAME</strong> apuntando a <code style={{ fontFamily: T.mono, fontSize: '11px' }}>cname.vercel-dns.com</code><br />
                    4. Espera la propagación DNS (normalmente 5min - 48h)
                  </>
                ) : (
                  <>
                    <strong>Instrucciones para dominio principal:</strong><br />
                    1. Introduce tu dominio (ej: <code style={{ fontFamily: T.mono, fontSize: '11px' }}>tuempresa.com</code>)<br />
                    2. Ve al panel DNS de tu proveedor de dominio<br />
                    3. Crea un registro <strong>A</strong> apuntando a <code style={{ fontFamily: T.mono, fontSize: '11px' }}>76.76.21.21</code><br />
                    4. Espera la propagación DNS (normalmente 5min - 48h)
                  </>
                )}
              </div>
            </>
          )}

          {/* ── STEP 3: DNS result + verify ── */}
          {result && (
            <>
              <div style={{ padding: '10px 12px', borderRadius: '8px', background: '#DCFCE7', border: '1px solid #BBF7D0', color: '#166534', fontSize: '13px', fontWeight: 600 }}>
                {result.message}
              </div>

              <div>
                <div style={{ fontSize: '11px', color: T.gray, marginBottom: '8px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Configuración DNS — {result.dns.type === 'CNAME' ? 'Subdominio' : 'Dominio principal'}
                </div>
                <div style={{
                  background: '#0F172A', borderRadius: '12px', padding: '16px',
                  fontFamily: T.mono, fontSize: '13px', border: '1px solid #334155',
                  display: 'flex', flexDirection: 'column', gap: '12px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#94A3B8' }}>Tipo</span>
                    <span style={{ color: '#F8FAFC', fontWeight: 700, background: '#334155', padding: '2px 10px', borderRadius: '4px' }}>{result.dns.type}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#94A3B8' }}>Host</span>
                    <span style={{ color: '#F8FAFC', fontWeight: 700 }}>{result.dns.host}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#94A3B8' }}>Valor</span>
                    <span style={{ color: '#00E5A0', fontWeight: 700, fontSize: '12px', wordBreak: 'break-all' }}>{result.dns.value}</span>
                  </div>
                </div>
                {result.dns.note && (
                  <p style={{ fontSize: '11px', color: T.gray, marginTop: '8px', lineHeight: 1.4 }}>💡 {result.dns.note}</p>
                )}
              </div>

              {/* Steps reminder */}
              <div style={{ fontSize: '12px', color: T.gray, lineHeight: 1.5, background: T.bgAlt, padding: '12px', borderRadius: '8px' }}>
                <strong>Pasos siguientes:</strong><br />
                1. Ve al panel de tu proveedor de dominio (GoDaddy, Namecheap, Cloudflare, etc.)<br />
                2. Busca la sección DNS o Registros DNS<br />
                3. Añade el registro {result.dns.type} con los valores de arriba<br />
                4. Pulsa &quot;Verificar DNS&quot; para comprobar la conexión
              </div>

              {/* Verify button */}
              <button
                onClick={handleVerify}
                disabled={verifying}
                style={{
                  padding: '12px 20px', borderRadius: '10px', border: 'none',
                  background: `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`,
                  color: '#fff', fontSize: '14px', fontWeight: 700, width: '100%',
                  cursor: verifying ? 'wait' : 'pointer',
                  opacity: verifying ? 0.7 : 1,
                }}
              >
                {verifying ? '⟳ Verificando...' : '🔍 Verificar DNS'}
              </button>

              {verifyStatus && (
                <div style={{
                  padding: '12px 14px', borderRadius: '10px', fontSize: '13px', fontWeight: 600,
                  background: verifyStatus.status === 'verified' ? '#DCFCE7' : verifyStatus.status === 'error' ? '#FEE2E2' : '#FEF3C7',
                  border: `1px solid ${verifyStatus.status === 'verified' ? '#BBF7D0' : verifyStatus.status === 'error' ? '#FECACA' : '#FDE68A'}`,
                  color: verifyStatus.status === 'verified' ? '#166534' : verifyStatus.status === 'error' ? '#991B1B' : '#92400E',
                  lineHeight: 1.5,
                }}>
                  {verifyStatus.status === 'verified' && '✅ '}
                  {verifyStatus.status === 'pending' && '⏳ '}
                  {verifyStatus.status === 'misconfigured' && '⚠️ '}
                  {verifyStatus.status === 'error' && '❌ '}
                  {verifyStatus.message}
                  {verifyStatus.status !== 'verified' && verifyStatus.status !== 'error' && (
                    <div style={{ fontSize: '11px', marginTop: '4px', opacity: 0.8 }}>
                      La propagación DNS puede tardar entre 5 minutos y 48 horas. Vuelve a verificar más tarde.
                    </div>
                  )}
                </div>
              )}

              {/* Connect different domain */}
              <button
                onClick={() => { setResult(null); setMode('choose'); setDomainInput(''); setVerifyStatus(null) }}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: T.gray, fontSize: '12px', textDecoration: 'underline', padding: 0,
                }}
              >
                Conectar un dominio diferente
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
