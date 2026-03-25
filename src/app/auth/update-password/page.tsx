'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

const BRAND = {
  accent: '#9D4EDD', accentAlt: '#7B2CBF',
  bg: '#FAFAFA', card: '#FFFFFF', border: '#E0AAFF',
  gray: '#6B7280', text: '#1A1A2E',
}

export default function UpdatePasswordPage() {
  const router              = useRouter()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm]   = useState('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')
  const [done, setDone]         = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (password !== confirm) { setError('Las contraseñas no coinciden'); return }
    if (password.length < 6)  { setError('Mínimo 6 caracteres'); return }
    setError(''); setLoading(true)
    const supabase = createClient()
    const { error } = await supabase.auth.updateUser({ password })
    setLoading(false)
    if (error) { setError(error.message); return }
    setDone(true)
    setTimeout(() => router.push('/dashboard'), 2000)
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
          <h1 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Nueva contraseña</h1>
          <p style={{ color: BRAND.gray, fontSize: '14px' }}>Elige una contraseña segura</p>
        </div>

        {done ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
            <p style={{ fontWeight: 700, fontSize: '16px' }}>Contraseña actualizada</p>
            <p style={{ color: BRAND.gray, fontSize: '14px', marginTop: '8px' }}>Redirigiendo al dashboard...</p>
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
                  Nueva contraseña
                </label>
                <input
                  type="password" required minLength={6} value={password}
                  onChange={e => setPassword(e.target.value)} placeholder="Mínimo 6 caracteres"
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: '10px',
                    background: BRAND.bg, border: `1px solid ${BRAND.border}`,
                    color: BRAND.text, fontSize: '15px', outline: 'none', boxSizing: 'border-box',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: BRAND.gray, marginBottom: '6px' }}>
                  Confirmar contraseña
                </label>
                <input
                  type="password" required value={confirm}
                  onChange={e => setConfirm(e.target.value)} placeholder="Repite la contraseña"
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
                {loading ? 'Guardando...' : 'Guardar nueva contraseña'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
