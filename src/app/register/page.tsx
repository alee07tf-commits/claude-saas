import { signup } from '@/app/login/actions'
import Link from 'next/link'

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

export default function RegisterPage({ searchParams }: { searchParams: { error?: string; next?: string; confirm?: string } }) {
    const next = searchParams?.next || '/dashboard'

    if (searchParams?.confirm) {
        return (
            <div style={{
                minHeight: "100vh", background: BRAND.bg, color: BRAND.text,
                fontFamily: "'Satoshi', 'DM Sans', sans-serif",
                display: "flex", alignItems: "center", justifyContent: "center", padding: "24px",
            }}>
                <div style={{
                    background: BRAND.card, border: `1px solid ${BRAND.border}`,
                    padding: "40px", borderRadius: "16px", width: "100%", maxWidth: "400px",
                    boxShadow: "0 8px 32px rgba(157,78,221,0.10)", textAlign: "center",
                }}>
                    <div style={{ fontSize: "48px", marginBottom: "16px" }}>📬</div>
                    <h1 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>Revisa tu email</h1>
                    <p style={{ color: BRAND.gray, fontSize: "14px", marginBottom: "24px" }}>
                        Te hemos enviado un enlace de confirmación. Haz clic en él para activar tu cuenta y acceder a LandForge.
                    </p>
                    <Link href="/login" style={{
                        display: "inline-block", padding: "12px 28px", borderRadius: "10px",
                        background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
                        color: "#FFFFFF", textDecoration: "none", fontWeight: 700, fontSize: "14px",
                    }}>← Ir al login</Link>
                </div>
            </div>
        )
    }

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
                    <h1 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>Crea tu cuenta</h1>
                    <p style={{ color: BRAND.gray, fontSize: "14px" }}>Regístrate gratis para exportar tu landing</p>
                </div>

                {searchParams?.error && (
                    <div style={{
                        background: "rgba(239, 68, 68, 0.1)", color: "#EF4444",
                        padding: "12px", borderRadius: "8px", fontSize: "14px",
                        marginBottom: "24px", border: "1px solid rgba(239, 68, 68, 0.2)"
                    }}>
                        Hubo un error al crear la cuenta. Inténtalo de nuevo.
                    </div>
                )}

                <form action={signup} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
                        <label htmlFor="password" style={{ display: "block", fontSize: "13px", color: BRAND.gray, paddingLeft: "4px", marginBottom: "6px" }}>Contraseña segura</label>
                        <input
                            id="password" name="password" type="password" required
                            style={{
                                width: "100%", padding: "12px 16px", borderRadius: "10px",
                                background: BRAND.bg, border: `1px solid ${BRAND.border}`,
                                color: BRAND.text, fontSize: "15px", outline: "none",
                                transition: "border-color 0.2s"
                            }}
                            placeholder="Mínimo 6 caracteres"
                            minLength={6}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            marginTop: "8px", width: "100%", padding: "14px", borderRadius: "10px",
                            background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentAlt})`,
                            color: "#FFFFFF", fontWeight: 700, fontSize: "15px", border: "none",
                            cursor: "pointer", transition: "opacity 0.2s"
                        }}
                    >
                        Registrarse
                    </button>
                </form>

                <p style={{ textAlign: "center", marginTop: "32px", fontSize: "14px", color: BRAND.gray }}>
                    ¿Ya tienes cuenta? <Link href="/login" style={{ color: BRAND.accent, textDecoration: "none", fontWeight: 600 }}>Entrar</Link>
                </p>
            </div>
        </div>
    )
}
