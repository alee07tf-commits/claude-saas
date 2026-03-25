'use client';

import { useState } from 'react';

export default function BillingButton() {
  const [loading, setLoading] = useState(false);

  const handlePortal = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/stripe/portal', { method: 'POST' });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Error accesing portal');
      }
    } catch (error) {
      console.error(error);
      alert('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePortal}
      disabled={loading}
      style={{
        padding: '9px 16px', borderRadius: '10px', border: '1px solid #E0AAFF',
        background: '#FFFFFF', color: '#6B7280', fontSize: '13px', fontWeight: 600,
        cursor: loading ? 'wait' : 'pointer', opacity: loading ? 0.7 : 1
      }}
    >
      {loading ? 'Cargando...' : '💳 Facturación'}
    </button>
  );
}
