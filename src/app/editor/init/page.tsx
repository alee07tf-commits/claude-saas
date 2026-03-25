'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const STEPS = [
  'Conectando con Claude...',
  'Analizando el producto LandForge...',
  'Generando hero y secciones clave...',
  'Construyendo pricing, FAQ y footer...',
  'Guardando en base de datos...',
  'Abriendo editor Forgi...',
]

export default function InitPage() {
  const router = useRouter()
  const [step, setStep]       = useState(0)
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null

    fetch('/api/init-landforge-site')
      .then(r => r.json())
      .then((data: { id?: string; error?: string; generating?: boolean }) => {
        if (data.error) { setError(data.error); setLoading(false); return }
        if (!data.id)   { setError('No se recibió ID del sitio'); setLoading(false); return }

        // If returned instantly → HTML was valid, redirect immediately
        router.push(`/editor/${data.id}`)
      })
      .catch(err => {
        setError(err instanceof Error ? err.message : 'Error inesperado')
        setLoading(false)
      })

    // Start step animation only after a short delay (only shown if generating)
    const startDelay = setTimeout(() => {
      interval = setInterval(() => {
        setStep(s => Math.min(s + 1, STEPS.length - 2))
      }, 8000)
    }, 500)

    return () => {
      clearTimeout(startDelay)
      if (interval) clearInterval(interval)
    }
  }, [router])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FAFAFA',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'DM Sans', -apple-system, sans-serif",
      color: '#1A1A2E',
      padding: '24px',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=DM+Sans:wght@400;700;800&display=swap" rel="stylesheet" />

      {/* Logo */}
      <div style={{
        width: '52px', height: '52px', borderRadius: '14px',
        background: 'linear-gradient(135deg, #9D4EDD, #7B2CBF)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 800, fontSize: '24px', color: '#fff',
        fontFamily: "'Space Mono', monospace",
        marginBottom: '32px',
        boxShadow: '0 8px 32px rgba(157,78,221,0.3)',
      }}>L</div>

      {error ? (
        <div style={{ textAlign: 'center', maxWidth: '400px' }}>
          <p style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: '#EF4444' }}>
            Error al generar el sitio
          </p>
          <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '24px' }}>{error}</p>
          <a href="/dashboard" style={{
            padding: '10px 24px', borderRadius: '10px', textDecoration: 'none',
            background: 'linear-gradient(135deg, #9D4EDD, #7B2CBF)',
            color: '#fff', fontWeight: 700, fontSize: '14px',
          }}>← Volver al dashboard</a>
        </div>
      ) : (
        <div style={{ textAlign: 'center', maxWidth: '420px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.5px' }}>
            Generando sitio LandForge
          </h1>
          <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '40px' }}>
            Claude está construyendo tu página de marketing completa con todas las secciones editables.
          </p>

          {/* Progress steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px', textAlign: 'left' }}>
            {STEPS.slice(0, -1).map((s, i) => {
              const done    = i < step
              const current = i === step
              return (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  opacity: done ? 1 : current ? 1 : 0.35,
                  transition: 'opacity 0.4s',
                }}>
                  <div style={{
                    width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0,
                    background: done
                      ? 'linear-gradient(135deg, #22C55E, #16A34A)'
                      : current
                        ? 'linear-gradient(135deg, #9D4EDD, #7B2CBF)'
                        : '#E0AAFF',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '11px', color: '#fff', fontWeight: 800,
                    transition: 'background 0.4s',
                  }}>
                    {done ? '✓' : current
                      ? <span style={{ display: 'inline-block', animation: 'spin 0.8s linear infinite' }}>⟳</span>
                      : <span style={{ fontSize: '8px' }}>●</span>}
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: current ? 700 : 500, color: current ? '#1A1A2E' : '#6B7280' }}>
                    {s}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Pulse bar */}
          <div style={{ height: '4px', borderRadius: '4px', background: '#E0AAFF', overflow: 'hidden' }}>
            <div style={{
              height: '100%', borderRadius: '4px',
              background: 'linear-gradient(135deg, #9D4EDD, #7B2CBF)',
              animation: 'pulse-bar 2s ease-in-out infinite',
            }} />
          </div>

          <p style={{ marginTop: '16px', fontSize: '12px', color: '#9CA3AF' }}>
            Esto puede tardar hasta 30 segundos
          </p>
        </div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse-bar {
          0%   { width: 15%; margin-left: 0; }
          50%  { width: 40%; margin-left: 30%; }
          100% { width: 15%; margin-left: 85%; }
        }
      `}</style>
    </div>
  )
}
