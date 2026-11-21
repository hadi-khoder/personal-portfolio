import { ImageResponse } from "next/og";

export const alt = "Hadi Khoder — Software Engineer, Full-Stack Developer and Development Team Leader in Lebanon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px", background: "#101216", color: "#e7e9ed", borderBottom: "8px solid #8db9ff" }}>
      <div style={{ display: "flex", fontSize: 24, color: "#8db9ff", marginBottom: 32 }}>HK. / LEBANON</div>
      <div style={{ display: "flex", fontSize: 94, fontWeight: 700 }}>Hadi Khoder<span style={{ color: "#8db9ff" }}>.</span></div>
      <div style={{ display: "flex", fontSize: 32, color: "#b7c9e2", marginTop: 24 }}>Software Engineer · Full-Stack Developer</div>
      <div style={{ display: "flex", fontSize: 28, color: "#b7a9ef", marginTop: 12 }}>Development Team Leader</div>
      <div style={{ display: "flex", fontSize: 24, color: "#b8c0cb", marginTop: 48 }}>Thoughtful software. Built to move people forward.</div>
    </div>, size,
  );
}
