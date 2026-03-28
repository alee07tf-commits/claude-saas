import { createClient } from '@/lib/supabase/server'
import { checkUserLimit } from '@/lib/limits'
import DeleteButton from '@/components/DeleteButton'
import BillingButton from '@/components/BillingButton'

const T = {
  bg: '#FAFAFA', card: '#FFFFFF', border: '#E0AAFF',
  accent: '#9D4EDD', accentAlt: '#7B2CBF',
  text: '#1A1A2E', gray: '#6B7280',
  font: "'DM Sans', -apple-system, sans-serif",
  mono: "'Space Mono', monospace",
}

type LandingRow = {
  id: string
  business_name: string | null
  created_at: string
  status: string
  subdomain: string | null
  metadata: { keyword?: string; location?: string } | null
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-ES', {
    day: 'numeric', month: 'short', year: 'numeric',
  })
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string; label: string }> = {
    draft:     { bg: '#F3F4F6',         color: T.gray,  label: 'Borrador'   },
    published: { bg: T.accent + '22',  color: T.accent, label: 'Publicada'  },
    archived:  { bg: '#EF444420',      color: '#EF4444', label: 'Archivada' },
  }
  const s = map[status] || map.draft
  return (
    <span style={{
      padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700,
      background: s.bg, color: s.color,
    }}>{s.label}</span>
  )
}

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  let hasSubscription = false
  if (user) {
    const { data: sub } = await supabase
      .from('subscriptions')
      .select('stripe_customer_id, status')
      .eq('user_id', user.id)
      .maybeSingle()
    if (sub?.stripe_customer_id) hasSubscription = true
  }

  const { data: landings, error } = await supabase
    .from('landing_pages')
    .select('id, business_name, created_at, status, subdomain, metadata')
    .eq('user_id', user?.id)
    .order('created_at', { ascending: false })
    .limit(200)

  const rows = (landings ?? []) as LandingRow[]

  // Usage limits for the indicator
  let usageInfo: { plan: string; used: number; limit: number } | null = null
  if (user) {
    try {
      const lanLimit = await checkUserLimit(user.id, 'landings', user.email ?? undefined)
      const planLabels: Record<string, string> = { none: 'Gratis', starter: 'Starter', agency: 'Agency', agency_pro: 'Agency Pro' }
      usageInfo = { plan: planLabels[lanLimit.plan] || lanLimit.plan, used: lanLimit.usage, limit: lanLimit.limit }
    } catch { /* ignore */ }
  }

  return (
    <div style={{
      minHeight: '100vh', background: T.bg, color: T.text,
      fontFamily: T.font,
    }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* ── HEADER ─────────────────────────────────────────────── */}
      <header style={{
        borderBottom: `1px solid ${T.border}`,
        padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '60px',
        position: 'sticky', top: 0, zIndex: 10,
        background: `${T.bg}F2`, backdropFilter: 'blur(16px)', boxShadow: '0 1px 0 0 #E0AAFF',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '8px',
            background: `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: '14px', color: '#FFFFFF', fontFamily: T.mono,
          }}>L</div>
          <span style={{ fontWeight: 700, fontSize: '16px', color: T.text, fontFamily: T.mono }}>LandForge</span>
          {user?.email && <span style={{ fontSize: '12px', color: T.gray, marginLeft: '8px', paddingLeft: '8px', borderLeft: `1px solid ${T.border}` }}>{user.email}</span>}
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {hasSubscription ? (
            <BillingButton />
          ) : (
            <a
              href="/#pricing"
              style={{
                padding: '9px 16px', borderRadius: '10px', border: `1px solid ${T.border}`,
                background: T.card, color: T.accentAlt, fontSize: '13px', fontWeight: 700,
                textDecoration: 'none'
              }}
            >✨ Mejorar Plan</a>
          )}
          <a
            href="/survey"
            style={{
              padding: '9px 22px', borderRadius: '10px', border: 'none', textDecoration: 'none',
              background: `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`,
              color: '#FFFFFF', fontSize: '14px', fontWeight: 800,
              display: 'inline-flex', alignItems: 'center', gap: '7px',
            }}
          >+ Nueva landing</a>
          <form action="/api/auth/signout" method="POST">
            <button type="submit" style={{
              padding: '9px 16px', borderRadius: '10px', border: `1px solid ${T.border}`,
              background: T.card, color: T.gray, fontSize: '13px', fontWeight: 600,
              cursor: 'pointer',
            }}>Cerrar sesión</button>
          </form>
        </div>
      </header>

      {/* ── MAIN ───────────────────────────────────────────────── */}
      <main style={{ maxWidth: '960px', margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* Title + Usage */}
        <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: '26px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '6px' }}>
              Mis landings
            </h1>
            <p style={{ color: T.gray, fontSize: '15px' }}>
              {rows.length === 0
                ? 'Aún no has generado ninguna landing.'
                : `${rows.length} landing${rows.length !== 1 ? 's' : ''} generada${rows.length !== 1 ? 's' : ''}`}
            </p>
          </div>
          {usageInfo && usageInfo.limit < 999999 && (
            <div style={{
              padding: '10px 16px', borderRadius: '12px',
              background: T.card, border: `1px solid ${T.border}`,
              fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '160px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: T.text }}>Plan {usageInfo.plan}</span>
                <span style={{ color: T.accent, fontWeight: 800 }}>{usageInfo.used}/{usageInfo.limit}</span>
              </div>
              <div style={{ height: '5px', borderRadius: '3px', background: `${T.border}`, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', borderRadius: '3px',
                  width: `${Math.min(100, (usageInfo.used / usageInfo.limit) * 100)}%`,
                  background: usageInfo.used >= usageInfo.limit
                    ? 'linear-gradient(90deg, #EF4444, #DC2626)'
                    : `linear-gradient(90deg, ${T.accent}, ${T.accentAlt})`,
                  transition: 'width .4s ease',
                }} />
              </div>
              <span style={{ color: T.gray, fontSize: '11px' }}>
                {usageInfo.used >= usageInfo.limit ? 'Límite alcanzado' : `${usageInfo.limit - usageInfo.used} landing${usageInfo.limit - usageInfo.used !== 1 ? 's' : ''} disponible${usageInfo.limit - usageInfo.used !== 1 ? 's' : ''}`}
              </span>
            </div>
          )}
        </div>

        {/* Error state */}
        {error && (
          <div style={{
            padding: '20px 24px', borderRadius: '12px',
            background: '#EF444412', border: '1px solid #EF444430',
            color: '#EF4444', fontSize: '14px', marginBottom: '24px',
          }}>
            ⚠ No se pudo conectar con la base de datos.
            {error.message.includes('does not exist') && (
              <span> Asegúrate de haber ejecutado <code style={{ fontFamily: T.mono, background: '#EF444420', padding: '1px 6px', borderRadius: '4px' }}>supabase/schema.sql</code> en tu proyecto de Supabase.</span>
            )}
          </div>
        )}

        {/* Empty state */}
        {!error && rows.length === 0 && (
          <div style={{
            textAlign: 'center', padding: '80px 24px',
            border: `1px dashed ${T.border}`, borderRadius: '16px',
            background: `linear-gradient(180deg, ${T.accent}08, transparent)`,
          }}>
            <div style={{ fontSize: '56px', marginBottom: '16px' }}>✨</div>
            <p style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.3px' }}>
              Tu primera landing es gratis
            </p>
            <p style={{ color: T.gray, fontSize: '15px', marginBottom: '12px', maxWidth: '380px', margin: '0 auto 12px', lineHeight: 1.6 }}>
              Responde unas preguntas sobre tu negocio y la IA creará una landing profesional en minutos.
            </p>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '28px', flexWrap: 'wrap' }}>
              {['Editable 100%', 'Chatbot IA incluido', 'Publicación instantánea'].map(t => (
                <span key={t} style={{
                  padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600,
                  background: T.accent + '15', color: T.accent, border: `1px solid ${T.accent}25`,
                }}>{t}</span>
              ))}
            </div>
            <a
              href="/survey"
              style={{
                display: 'inline-block', padding: '14px 40px', borderRadius: '12px',
                background: `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`,
                color: '#FFFFFF', fontSize: '16px', fontWeight: 800, textDecoration: 'none',
                boxShadow: `0 4px 16px ${T.accent}40`,
              }}
            >
              Crear mi landing gratis →
            </a>
          </div>
        )}

        {/* Landings grid */}
        {rows.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {rows.map((row) => {
              const keyword  = row.metadata?.keyword  || ''
              const location = row.metadata?.location || ''
              const subtitle = [keyword, location].filter(Boolean).join(' · ')

              return (
                <div
                  key={row.id}
                  className="landing-card"
                >
                  {/* Icon */}
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '10px', flexShrink: 0,
                    background: T.accent + '15', border: `1px solid ${T.accent}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px',
                  }}>🌐</div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: '15px', fontWeight: 700, color: T.text,
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      }}>
                        {row.business_name || 'Sin nombre'}
                      </span>
                      <StatusBadge status={row.status} />
                    </div>
                    <div style={{ fontSize: '12px', color: T.gray, marginTop: '3px' }}>
                      {subtitle && <span style={{ marginRight: '12px' }}>{subtitle}</span>}
                      <span>{formatDate(row.created_at)}</span>
                    </div>
                    {row.status === 'published' && row.subdomain && (
                      <a
                        href={row.subdomain}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '11px', color: T.accent, textDecoration: 'none', marginTop: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                      >
                        🌐 {row.subdomain.replace(/^https?:\/\//, '')}
                      </a>
                    )}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                    <a
                      href={`/preview/${row.id}`}
                      style={{
                        padding: '8px 18px', borderRadius: '8px', textDecoration: 'none',
                        background: `linear-gradient(135deg, ${T.accent}, ${T.accentAlt})`,
                        color: '#FFFFFF', fontSize: '13px', fontWeight: 700,
                      }}
                    >
                      Ver
                    </a>
                    <a
                      href={row.subdomain ? `/preview/${row.id}?domain=1` : `/preview/${row.id}`}
                      style={{
                        padding: '8px 18px', borderRadius: '8px', textDecoration: 'none',
                        background: 'transparent', border: `1px solid ${T.border}`,
                        color: T.accent, fontSize: '13px', fontWeight: 700,
                      }}
                    >
                      🔗 {row.subdomain ? 'Dominio' : 'Publicar'}
                    </a>
                    <a
                      href={`/editor/${row.id}`}
                      style={{
                        padding: '8px 18px', borderRadius: '8px', textDecoration: 'none',
                        background: 'transparent', border: `1px solid ${T.border}`,
                        color: T.gray, fontSize: '13px', fontWeight: 700,
                      }}
                    >
                      ✨ Editar
                    </a>
                    <DeleteButton id={row.id} />
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .landing-card {
          background: ${T.card};
          border: 1px solid ${T.border};
          border-radius: 14px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .landing-card:hover {
          border-color: ${T.accent};
          box-shadow: 0 4px 16px rgba(157,78,221,0.12);
        }
      `}</style>
    </div>
  )
}
