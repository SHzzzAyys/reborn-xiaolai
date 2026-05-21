import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

// Next 的文件约定 OG 图。静态导出下在 build 阶段生成 PNG，落到 out/opengraph-image.*
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — ${SITE.bio}`;

// 供 twitter-image 复用同一张图
export function renderOG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #fcfcfa 0%, #f1ece3 100%)",
          color: "#16140f",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 28,
              color: "#a8662b",
              letterSpacing: 2,
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#a8662b",
                display: "flex",
              }}
            />
            {SITE.handle}
          </div>
          <div style={{ fontSize: 88, fontWeight: 500, letterSpacing: -1, lineHeight: 1.05 }}>
            {SITE.name}
          </div>
          <div style={{ fontSize: 36, color: "#6b675e" }}>{SITE.bio}</div>
        </div>

        <div
          style={{
            fontSize: 44,
            lineHeight: 1.25,
            fontStyle: "italic",
            maxWidth: 900,
            color: "#16140f",
          }}
        >
          {SITE.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}

export default function OGImage() {
  return renderOG();
}
