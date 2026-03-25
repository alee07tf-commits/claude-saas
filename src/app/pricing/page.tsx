'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '€49',
    interval: '/mes',
    description: 'Perfecto para empezar a testear ideas.',
    features: [
      '5 Landings activas',
      '10 Generaciones AI al mes',
      '30 Ediciones Forgi al mes',
      '500 Mensajes en el Chatbot'
    ],
    buttonText: 'Empezar con Starter',
    primary: false
  },
  {
    id: 'agency',
    name: 'Agency',
    price: '€97',
    interval: '/mes',
    description: 'Para agencias que manejan varios clientes.',
    features: [
      '20 Landings activas',
      '50 Generaciones AI al mes',
      '200 Ediciones Forgi al mes',
      '3.000 Mensajes en el Chatbot'
    ],
    buttonText: 'Empezar con Agency',
    primary: true
  },
  {
    id: 'agency_pro',
    name: 'Agency Pro',
    price: '€197',
    interval: '/mes',
    description: 'El plan definitivo sin límites.',
    features: [
      'Landings Ilimitadas',
      'Generaciones AI Ilimitadas',
      'Ediciones Forgi Ilimitadas',
      'Chatbot Ilimitado'
    ],
    buttonText: 'Ser Pro',
    primary: false
  }
];

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const router = useRouter();

  const handleSubscribe = async (planId: string) => {
    setLoading(planId);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId })
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Error al iniciar checkout');
      }
    } catch (error) {
      console.error(error);
      alert('Error de conexión');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Precios para crear landing pages con IA
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600">
            Elige el plan para tu agencia o freelance. Landing pages con IA, Forgi Editor y chatbot de ventas 24/7 incluidos. Sin permanencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative flex flex-col p-8 rounded-3xl shadow-sm border ${
                plan.primary 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-xl scale-105 z-10' 
                  : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${plan.primary ? 'text-blue-100' : 'text-slate-500'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className={plan.primary ? 'text-blue-200' : 'text-slate-500'}>
                    {plan.interval}
                  </span>
                </div>
                <p className={`mt-4 text-sm ${plan.primary ? 'text-blue-100' : 'text-slate-600'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.primary ? 'text-blue-200' : 'text-blue-600'}`} />
                    <span className={plan.primary ? 'text-blue-50' : 'text-slate-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                disabled={loading === plan.id}
                onClick={() => handleSubscribe(plan.id)}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all flex justify-center items-center ${
                  plan.primary
                    ? 'bg-white text-blue-600 hover:bg-slate-50 shadow-md'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                } ${loading === plan.id ? 'opacity-70 cursor-wait' : ''}`}
              >
                {loading === plan.id ? 'Procesando...' : plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
