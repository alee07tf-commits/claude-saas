'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

const BRAND = {
  accent: '#9D4EDD', accentAlt: '#7B2CBF',
  bg: '#FAFAFA', card: '#FFFFFF', border: '#E0AAFF',
  gray: '#6B7280', text: '#1A1A2E',
}

export default function ForgotPasswordPage() {
  const [email, setEmail]     = useState('')
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(''); setLoading(true)
    const supabase = createClient()
    const origin   = window.location.origin
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/auth/callback?type=recovery`,
    })
    setLoading(false)
    if (error) { setError(error.message); return }
    setSent(true)
  }

  return (
    <div style={{
      minHeight: '100vh', background: BRAND.bg, color: BRAND.text,
      fontFamily: "'DM Sans', sans-serif",
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px',
    }}>
      <div style={{
        background: BRAND.card, border: `1px solid ${BRAND.border}`,
        padding: '40px', borderRadius: '16px', width: '100%', maxWidth: '400px',
        boxShadow: '0 8px 32px rgba(157,78,221,0.10)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '12px',
            background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: '24px', color: '#fff',
            fontFamily: "'Space Mono', monospace", margin: '0 auto 16px',
          }}>L</div>
          <h1 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Recuperar contraseña</h1>
          <p style={{ color: BRAND.gray, fontSize: '14px' }}>Te enviamos un enlace a tu email</p>
        </div>

        {sent ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📬</div>
            <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>Revisa tu email</p>
            <p style={{ color: BRAND.gray, fontSize: '14px', marginBottom: '24px' }}>
              Hemos enviado un enlace de recuperación a <strong>{email}</strong>
            </p>
            <Link href="/login" style={{
              display: 'inline-block', padding: '12px 28px', borderRadius: '10px',
              background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
              color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '14px',
            }}>← Volver al login</Link>
          </div>
        ) : (
          <>
            {error && (
              <div style={{
                background: 'rgba(239,68,68,0.1)', color: '#EF4444',
                padding: '12px', borderRadius: '8px', fontSize: '14px',
                marginBottom: '20px', border: '1px solid rgba(239,68,68,0.2)',
              }}>{error}</div>
            )}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: BRAND.gray, marginBottom: '6px' }}>
                  Email de tu cuenta
                </label>
                <input
                  type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="tu@agencia.com"
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: '10px',
                    background: BRAND.bg, border: `1px solid ${BRAND.border}`,
                    color: BRAND.text, fontSize: '15px', outline: 'none', boxSizing: 'border-box',
                  }}
                />
              </div>
              <button type="submit" disabled={loading} style={{
                width: '100%', padding: '14px', borderRadius: '10px', border: 'none',
                background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
                color: '#fff', fontWeight: 700, fontSize: '15px', cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
              }}>
                {loading ? 'Enviando...' : 'Enviar enlace de recuperación'}
              </button>
            </form>
            <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: BRAND.gray }}>
              <Link href="/login" style={{ color: BRAND.accent, textDecoration: 'none', fontWeight: 600 }}>
                ← Volver al login
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
