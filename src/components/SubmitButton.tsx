'use client'

import { useFormStatus } from 'react-dom'

interface SubmitButtonProps {
    children: React.ReactNode
    style?: React.CSSProperties
    loadingText?: string
}

export function SubmitButton({ children, style, loadingText = "Cargando..." }: SubmitButtonProps) {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            style={{
                ...style,
                opacity: pending ? 0.7 : 1,
                cursor: pending ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
            }}
        >
            {pending && (
                <span className="spinner" style={{
                    width: "16px",
                    height: "16px",
                    border: "2px solid rgba(255,255,255,0.3)",
                    borderTopColor: "#FFF",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite"
                }} />
            )}
            {pending ? loadingText : children}
            
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}} />
        </button>
    )
}
