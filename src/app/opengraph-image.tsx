import { ImageResponse } from "next/og";

export const alt =
  "Burn After Chat — Vent anger, frustration and stress in a private fake chat. Write the message you should not send to your ex, boss, partner or family. Local-only, no account, no AI, deleted forever.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "radial-gradient(circle at 50% 0%, #431407 0%, #18181b 55%, #09090b 100%)",
          color: "#f4f4f5",
          fontFamily: "system-ui, sans-serif",
          padding: "80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
            fontSize: "32px",
            color: "#fb923c",
            letterSpacing: "0.02em",
          }}
        >
          <span style={{ fontSize: "56px" }}>🔥</span>
          <span style={{ fontWeight: 700 }}>Burn After Chat</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "76px",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          <span>Write the message</span>
          <span
            style={{
              background: "linear-gradient(90deg, #fb923c, #f87171)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            you should not send.
          </span>
        </div>

        <div
          style={{
            marginTop: "44px",
            fontSize: "30px",
            color: "#a1a1aa",
            maxWidth: "920px",
            lineHeight: 1.35,
          }}
        >
          A private fake chat to vent anger, frustration & stress — about your
          ex, boss, family, anyone. Local-only. No account. No AI.
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "56px",
            fontSize: "22px",
            color: "#d4d4d8",
          }}
        >
          {["No account", "No server", "No AI", "Delete = gone"].map((tag) => (
            <span
              key={tag}
              style={{
                padding: "10px 22px",
                borderRadius: "9999px",
                border: "1px solid #3f3f46",
                background: "rgba(24,24,27,0.6)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
