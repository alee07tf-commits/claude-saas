'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const EXCLUDED_PATHS = ['/survey', '/dashboard', '/editor', '/preview', '/login', '/register', '/forgot-password', '/auth']

const GRAY   = '#6B7280'
const BORDER = '#E0AAFF'
const ACCENT = '#9D4EDD'

const LINKS = [
  { href: '/aviso-legal', label: 'Aviso Legal' },
  { href: '/politica-privacidad', label: 'Privacidad' },
  { href: '/politica-cookies', label: 'Cookies' },
  { href: '/terminos', label: 'Términos' },
]

function LegalFooterInner() {
  return (
    <footer style={{
      borderTop: `1px solid ${BORDER}`,
      padding: '16px 24px',
      textAlign: 'center',
      background: '#FAFAFA',
    }}>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {LINKS.map(l => (
          <Link
            key={l.href}
            href={l.href}
            style={{ fontSize: '12px', color: GRAY, textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
            onMouseLeave={e => (e.currentTarget.style.color = GRAY)}
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <p style={{ fontSize: '11px', color: GRAY, marginTop: '8px', opacity: 0.7 }}>
        © 2026 LandForge · Todos los derechos reservados
      </p>
    </footer>
  )
}

export default function LegalFooter() {
  const pathname = usePathname()
  if (EXCLUDED_PATHS.some(p => pathname.startsWith(p))) return null
  return <LegalFooterInner />
}
