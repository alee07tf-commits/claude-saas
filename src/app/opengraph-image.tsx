import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LandForge — Generador de Landing Pages con IA para Agencias";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1A1A2E 0%, #2D1B69 50%, #1A1A2E 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 24,
          }}
        >
          L
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          LandForge
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#E0AAFF",
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: 700,
          }}
        >
          Generador de Landing Pages con IA para Agencias
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 16,
            color: "#9D4EDD",
            background: "rgba(157, 78, 221, 0.15)",
            padding: "8px 24px",
            borderRadius: 100,
            border: "1px solid rgba(157, 78, 221, 0.3)",
          }}
        >
          landforge.digital
        </div>
      </div>
    ),
    { ...size }
  );
}
