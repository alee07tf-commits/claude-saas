import { login } from './actions'
import Link from 'next/link'
import { SubmitButton } from '@/components/SubmitButton'

const BRAND = {
    name: "LandForge",
    accent: "#9D4EDD",
    accentAlt: "#7B2CBF",
    bg: "#FAFAFA",
    card: "#FFFFFF",
    border: "#E0AAFF",
    gray: "#6B7280",
    text: "#1A1A2E",
};

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string; next?: string }> }) {
    const params = await searchParams
    const next = params?.next || '/survey'
    return (
        <div style={{
            minHeight: "100vh", background: BRAND.bg, color: BRAND.text,
            fontFamily: "'Satoshi', 'DM Sans', sans-serif",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "24px"
        }}>
            <div style={{
                background: BRAND.card, border: `1px solid ${BRAND.border}`,
                padding: "40px", borderRadius: "16px", width: "100%", maxWidth: "400px",
                boxShadow: "0 8px 32px rgba(157, 78, 221, 0.10)"
            }}>
                <div style={{ textAlign: "center", marginBottom: "32px" }}>
                    <div style={{
                        width: "48px", height: "48px", borderRadius: "12px",
                        background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontWeight: 800, fontSize: "24px", color: "#FFFFFF",
                        fontFamily: "'Space Mono', monospace", margin: "0 auto 16px"
                    }}>L</div>
                    <h1 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>Bienvenido de nuevo</h1>
                    <p style={{ color: BRAND.gray, fontSize: "14px" }}>Inicia sesión para continuar</p>
                </div>

                {params?.error && (
                    <div style={{
                        background: "rgba(239, 68, 68, 0.1)", color: "#EF4444",
                        padding: "12px", borderRadius: "8px", fontSize: "14px",
                        marginBottom: "24px", border: "1px solid rgba(239, 68, 68, 0.2)"
                    }}>
                        Email o contraseña incorrectos.
                    </div>
                )}

                <form action={login} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <input type="hidden" name="next" value={next} />
                    <div>
                        <label htmlFor="email" style={{ display: "block", fontSize: "13px", color: BRAND.gray, paddingLeft: "4px", marginBottom: "6px" }}>Email</label>
                        <input
                            id="email" name="email" type="email" required
                            style={{
                                width: "100%", padding: "12px 16px", borderRadius: "10px",
                                background: BRAND.bg, border: `1px solid ${BRAND.border}`,
                                color: BRAND.text, fontSize: "15px", outline: "none",
                                transition: "border-color 0.2s"
                            }}
                            placeholder="tu@agencia.com"
                        />
                    </div>
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                            <label htmlFor="password" style={{ fontSize: "13px", color: BRAND.gray, paddingLeft: "4px" }}>Contraseña</label>
                            <Link href="/forgot-password" style={{ fontSize: "12px", color: BRAND.accent, textDecoration: "none" }}>¿Olvidaste tu contraseña?</Link>
                        </div>
                        <input
                            id="password" name="password" type="password" required
                            style={{
                                width: "100%", padding: "12px 16px", borderRadius: "10px",
                                background: BRAND.bg, border: `1px solid ${BRAND.border}`,
                                color: BRAND.text, fontSize: "15px", outline: "none",
                                transition: "border-color 0.2s"
                            }}
                            placeholder="••••••••"
                        />
                    </div>
                    
                    <SubmitButton
                        loadingText="Entrando..."
                        style={{
                            marginTop: "8px", width: "100%", padding: "14px", borderRadius: "10px",
                            background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
                            color: "#FFFFFF", fontWeight: 700, fontSize: "15px", border: "none",
                        }}
                    >
                        Iniciar Sesión
                    </SubmitButton>
                </form>

                <p style={{ textAlign: "center", marginTop: "32px", fontSize: "14px", color: BRAND.gray }}>
                    ¿No tienes cuenta? <Link href="/register" style={{ color: BRAND.accent, textDecoration: "none", fontWeight: 600, }}>Crea una gratis</Link>
                </p>
            </div>
        </div>
    )
}
