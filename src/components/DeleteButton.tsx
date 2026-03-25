'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    if (!confirm('¿Eliminar esta landing? Esta acción no se puede deshacer.')) return
    setLoading(true)
    await fetch(`/api/landing/${id}`, { method: 'DELETE' })
    router.refresh()
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      style={{
        padding: '8px 14px', borderRadius: '8px', border: '1px solid #EF444440',
        background: 'transparent', color: '#EF4444', fontSize: '13px', fontWeight: 700,
        cursor: loading ? 'default' : 'pointer', opacity: loading ? 0.5 : 1,
      }}
    >
      {loading ? '...' : '🗑'}
    </button>
  )
}
