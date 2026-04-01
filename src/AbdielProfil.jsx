import { useEffect, useRef } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:       #060910;
    --surface:  #0d1117;
    --border:   rgba(99,210,255,0.12);
    --cyan:     #63d2ff;
    --cyan-dim: rgba(99,210,255,0.15);
    --violet:   #a78bfa;
    --text:     #e2eaf4;
    --muted:    #637592;
    --card:     rgba(13,17,23,0.85);
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'JetBrains Mono', monospace;
    min-height: 100vh;
    overflow-x: hidden;
  }

  .abdiel-root {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
  }

  /* ── ANIMATED BG ─────────────────────────── */
  .abdiel-bg-canvas {
    position: fixed; inset: 0;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
  }
  .abdiel-bg-canvas::before {
    content: '';
    position: absolute;
    width: 600px; height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99,210,255,0.07) 0%, transparent 70%);
    top: -200px; left: -150px;
    animation: abdiel-drift1 14s ease-in-out infinite alternate;
  }
  .abdiel-bg-canvas::after {
    content: '';
    position: absolute;
    width: 500px; height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%);
    bottom: -100px; right: -100px;
    animation: abdiel-drift2 16s ease-in-out infinite alternate;
  }
  @keyframes abdiel-drift1 { to { transform: translate(80px, 120px); } }
  @keyframes abdiel-drift2 { to { transform: translate(-80px, -60px); } }

  .abdiel-grid-lines {
    position: fixed; inset: 0;
    z-index: 0;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(99,210,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99,210,255,0.025) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  /* ── CARD ──────────────────────────────── */
  .abdiel-card {
    position: relative; z-index: 1;
    width: 100%;
    max-width: 820px;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 20px;
    backdrop-filter: blur(24px);
    overflow: hidden;
    box-shadow: 0 0 80px rgba(99,210,255,0.06), 0 32px 64px rgba(0,0,0,0.5);
    animation: abdiel-cardIn 0.8s cubic-bezier(0.16,1,0.3,1) both;
  }
  @keyframes abdiel-cardIn {
    from { opacity: 0; transform: translateY(40px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* ── HERO BANNER ─────────────────────── */
  .abdiel-hero-banner {
    height: 160px;
    background: linear-gradient(135deg, #0d1f35 0%, #0a0e1a 40%, #150d2e 100%);
    position: relative;
    overflow: hidden;
  }
  .abdiel-hero-banner::before {
    content: '';
    position: absolute; inset: 0;
    background:
      repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(99,210,255,0.05) 59px, rgba(99,210,255,0.05) 60px),
      repeating-linear-gradient(0deg,  transparent, transparent 59px, rgba(99,210,255,0.05) 59px, rgba(99,210,255,0.05) 60px);
  }
  .abdiel-hero-banner::after {
    content: '';
    position: absolute;
    width: 320px; height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99,210,255,0.18) 0%, transparent 65%);
    top: -120px; left: 50%;
    transform: translateX(-50%);
  }

  .abdiel-corner-tag {
    position: absolute;
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 4px;
    background: rgba(6,9,16,0.7);
    font-family: 'JetBrains Mono', monospace;
  }
  .abdiel-corner-tag.tl { top: 16px; left: 16px; }
  .abdiel-corner-tag.tr { top: 16px; right: 16px; }

  /* ── AVATAR ─────────────────────────── */
  .abdiel-avatar-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -64px;
    position: relative;
    z-index: 2;
  }
  .abdiel-avatar-wrap {
    position: relative;
    width: 128px; height: 128px;
  }
  .abdiel-avatar-wrap::before {
    content: '';
    position: absolute; inset: -4px;
    border-radius: 50%;
    background: conic-gradient(var(--cyan), var(--violet), var(--cyan));
    animation: abdiel-spin 4s linear infinite;
    z-index: 0;
  }
  .abdiel-avatar-wrap::after {
    content: '';
    position: absolute; inset: -10px;
    border-radius: 50%;
    border: 1px solid rgba(99,210,255,0.15);
    z-index: 0;
  }
  @keyframes abdiel-spin { to { transform: rotate(360deg); } }

  .abdiel-avatar-inner {
    position: relative; z-index: 1;
    width: 100%; height: 100%;
    border-radius: 50%;
    background: linear-gradient(135deg, #1a2744, #0d1117);
    border: 3px solid var(--bg);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .abdiel-avatar-inner img {
    width: 100%; height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .abdiel-avatar-inner svg {
    width: 68px; height: 68px;
    opacity: 0.6;
  }

  /* ── NAME & ROLE ─────────────────────── */
  .abdiel-profile-name {
    font-family: 'Syne', sans-serif;
    font-size: clamp(26px, 4vw, 38px);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-top: 20px;
    text-align: center;
    background: linear-gradient(135deg, #e2eaf4 30%, var(--cyan));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: abdiel-fadeUp 0.6s 0.3s both;
  }
  .abdiel-profile-role {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 8px;
    animation: abdiel-fadeUp 0.6s 0.4s both;
  }
  .abdiel-role-badge {
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    padding: 5px 12px;
    border-radius: 20px;
    background: var(--cyan-dim);
    color: var(--cyan);
    border: 1px solid rgba(99,210,255,0.25);
    font-family: 'JetBrains Mono', monospace;
  }
  .abdiel-role-badge.v {
    background: rgba(167,139,250,0.12);
    color: var(--violet);
    border-color: rgba(167,139,250,0.25);
  }
  @keyframes abdiel-fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── DIVIDER ─────────────────────────── */
  .abdiel-divider {
    margin: 32px 40px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  /* ── INFO GRID ─────────────────────── */
  .abdiel-info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding: 0 40px;
    animation: abdiel-fadeUp 0.6s 0.5s both;
  }
  .abdiel-info-item {
    background: rgba(99,210,255,0.03);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 14px 18px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    transition: border-color 0.25s, background 0.25s;
  }
  .abdiel-info-item:hover {
    border-color: rgba(99,210,255,0.3);
    background: rgba(99,210,255,0.06);
  }
  .abdiel-info-item.wide {
    grid-column: 1 / -1;
  }
  .abdiel-info-icon {
    font-size: 16px;
    margin-top: 2px;
    flex-shrink: 0;
  }
  .abdiel-info-label {
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 4px;
  }
  .abdiel-info-value {
    font-size: 13px;
    color: var(--text);
    font-weight: 400;
  }

  /* ── BIO ─────────────────────────────── */
  .abdiel-bio-section {
    padding: 0 40px;
    margin-top: 24px;
    animation: abdiel-fadeUp 0.6s 0.6s both;
  }
  .abdiel-bio-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }
  .abdiel-bio-header-line {
    flex: 1;
    height: 1px;
    background: var(--border);
  }
  .abdiel-bio-header-label {
    font-size: 9px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--muted);
    flex-shrink: 0;
  }
  .abdiel-bio-text {
    font-family: 'Instrument Serif', serif;
    font-size: 15px;
    line-height: 1.85;
    color: rgba(226,234,244,0.8);
    font-style: italic;
  }
  .abdiel-bio-text strong {
    font-style: normal;
    color: var(--cyan);
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 600;
  }

  /* ── SKILLS ──────────────────────────── */
  .abdiel-skills-section {
    padding: 0 40px;
    margin-top: 28px;
    animation: abdiel-fadeUp 0.6s 0.7s both;
  }
  .abdiel-skills-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
  }
  .abdiel-skill-chip {
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 6px;
    border: 1px solid var(--border);
    color: var(--muted);
    transition: color 0.2s, border-color 0.2s, background 0.2s;
    cursor: default;
    font-family: 'JetBrains Mono', monospace;
    background: transparent;
  }
  .abdiel-skill-chip:hover {
    color: var(--cyan);
    border-color: rgba(99,210,255,0.4);
    background: var(--cyan-dim);
  }

  /* ── FOOTER BAR ─────────────────────── */
  .abdiel-card-footer {
    margin-top: 36px;
    padding: 20px 40px;
    background: rgba(6,9,16,0.5);
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }
  .abdiel-footer-status {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .abdiel-status-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #4ade80;
    box-shadow: 0 0 8px #4ade80;
    animation: abdiel-pulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }
  @keyframes abdiel-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
  .abdiel-footer-year {
    font-size: 10px;
    letter-spacing: 0.2em;
    color: var(--muted);
  }

  /* Back button */
  .abdiel-back-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 18px;
    border-radius: 8px;
    background: var(--cyan-dim);
    color: var(--cyan);
    border: 1px solid rgba(99,210,255,0.25);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-decoration: none;
    font-family: 'JetBrains Mono', monospace;
    transition: background 0.2s, border-color 0.2s;
  }
  .abdiel-back-btn:hover {
    background: rgba(99,210,255,0.25);
    border-color: rgba(99,210,255,0.5);
  }

  /* Responsive */
  @media (max-width: 560px) {
    .abdiel-info-grid { grid-template-columns: 1fr; padding: 0 20px; }
    .abdiel-info-item.wide { grid-column: 1; }
    .abdiel-bio-section, .abdiel-skills-section { padding: 0 20px; }
    .abdiel-divider { margin: 24px 20px; }
    .abdiel-card-footer { padding: 16px 20px; }
  }
`;

const infoItems = [
  { icon: "👤", label: "Nama",    value: "Abdiel Rayman Carlitos" },
  { icon: "🎂", label: "Umur",    value: "18 Tahun" },
  { icon: "🎓", label: "Kampus",  value: "Universitas Brawijaya" },
  { icon: "💻", label: "Jurusan", value: "Teknik Informasi" },
  { icon: "🎮", label: "Hobi",    value: "Gaming · Reading · Writing" },
  { icon: "📍", label: "Kota",    value: "Kota Malang, Jawa Timur" },
];

const skills = [
  "HTML / CSS", "JavaScript", "React", "Frontend Dev",
  "UI / UX", "Artificial Intelligence", "Astronomi", "Game Modding",
];

function AbdielProfil() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mx", x + "%");
      card.style.setProperty("--my", y + "%");
    };
    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{styles}</style>

      <div className="abdiel-bg-canvas" />
      <div className="abdiel-grid-lines" />

      <div className="abdiel-root">
        <div className="abdiel-card" ref={cardRef}>

          {/* Hero Banner */}
          <div className="abdiel-hero-banner">
            <span className="abdiel-corner-tag tl">UB · 2025</span>
            <span className="abdiel-corner-tag tr">Teknik Informatika</span>
          </div>

          {/* Avatar */}
          <div className="abdiel-avatar-area">
            <div className="abdiel-avatar-wrap">
              <div className="abdiel-avatar-inner">
                {/* Swap the SVG below for <img src="/fotoabi.jpeg" alt="foto" /> when the photo is available */}
                <img src="/fotoabi.jpeg" alt="foto" />
                  <circle cx="40" cy="28" r="16" fill="rgba(99,210,255,0.25)" />
                  <ellipse cx="40" cy="70" rx="26" ry="18" fill="rgba(99,210,255,0.15)" />
              </div>
            </div>

            <h1 className="abdiel-profile-name">Abdiel Rayman Carlitos</h1>
            <div className="abdiel-profile-role">
              <span className="abdiel-role-badge">Mahasiswa IT</span>
              <span className="abdiel-role-badge v">Frontend Developer</span>
            </div>
          </div>

          <div className="abdiel-divider" />

          {/* Info Grid */}
          <div className="abdiel-info-grid">
            {infoItems.map(({ icon, label, value }) => (
              <div className="abdiel-info-item" key={label}>
                <span className="abdiel-info-icon">{icon}</span>
                <div>
                  <div className="abdiel-info-label">{label}</div>
                  <div className="abdiel-info-value">{value}</div>
                </div>
              </div>
            ))}
            {/* Wide address item */}
            <div className="abdiel-info-item wide">
              <span className="abdiel-info-icon">🗺️</span>
              <div>
                <div className="abdiel-info-label">Domisili</div>
                <div className="abdiel-info-value">
                  Jl. Kosmea No.25 Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="abdiel-bio-section">
            <div className="abdiel-bio-header">
              <div className="abdiel-bio-header-line" />
              <span className="abdiel-bio-header-label">Tentang Saya</span>
              <div className="abdiel-bio-header-line" />
            </div>
            <p className="abdiel-bio-text">
              Saya <strong>Abdiel Rayman Carlitos</strong>, seorang mahasiswa di Universitas Brawijaya
              yang memiliki minat besar di bidang teknologi, khususnya dalam pengembangan frontend.
              Saya tertarik untuk menciptakan tampilan website yang modern, responsif, dan nyaman
              digunakan oleh pengguna. Selain dunia coding, saya juga memiliki hobi bermain game,
              mendengarkan musik, serta melakukan modding game untuk mengeksplorasi kreativitas lebih
              jauh. Ketertarikan saya juga meluas ke bidang astronomi, teknologi masa depan, dan
              kecerdasan buatan (AI). Saya percaya bahwa dengan terus mengembangkan kemampuan dan
              mengikuti perkembangan teknologi, saya dapat menjadi seorang developer yang kompeten
              dan inovatif di masa depan.
            </p>
          </div>

          {/* Skills */}
          <div className="abdiel-skills-section">
            <div className="abdiel-bio-header">
              <div className="abdiel-bio-header-line" />
              <span className="abdiel-bio-header-label">Tech Stack &amp; Minat</span>
              <div className="abdiel-bio-header-line" />
            </div>
            <div className="abdiel-skills-row">
              {skills.map((s) => (
                <span className="abdiel-skill-chip" key={s}>{s}</span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="abdiel-card-footer">
            <div className="abdiel-footer-status">
              <div className="abdiel-status-dot" />
              Available for collaboration
            </div>
            <span className="abdiel-footer-year">© 2025 · Abdiel Rayman Carlitos</span>
            <a href="/" className="abdiel-back-btn">⬅ Kembali</a>
          </div>

        </div>
      </div>
    </>
  );
}

export default AbdielProfil;
