"use client";

export default function DevPlatforms({ bg = "var(--bg)" }) {
  const devTools = [
    { name: "React", domain: "react.dev" },
    { name: "Next.js", domain: "nextjs.org" },
    { name: "Node.js", domain: "nodejs.org" },
    { name: "Python", domain: "python.org" },
    { name: "Flutter", domain: "flutter.dev" },
    { name: "Laravel", domain: "laravel.com" },
    { name: "MongoDB", domain: "mongodb.com" },
    { name: "MySQL", domain: "mysql.com" },
    { name: "Firebase", domain: "firebase.google.com" },
    { name: "PostgreSQL", domain: "postgresql.org" },
    { name: "AWS", domain: "aws.amazon.com" },
    { name: "Google Cloud", domain: "cloud.google.com" },
    { name: "GitHub", domain: "github.com" },
    { name: "Docker", domain: "docker.com" },
    { name: "Figma", domain: "figma.com" }
  ];

  // Split into two rows
  const row1Tools = devTools.slice(0, 8);
  const row2Tools = devTools.slice(8);

  const row1Marquee = [...row1Tools, ...row1Tools, ...row1Tools, ...row1Tools];
  const row2Marquee = [...row2Tools, ...row2Tools, ...row2Tools, ...row2Tools, ...row2Tools];

  return (
    <section className="platforms-section" style={{ background: bg, borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div className="platforms-header" style={{ textAlign: "center" }}>
          <span className="platforms-tag">TECH STACK</span>
          <h2 style={{ color: "var(--teal)" }}>Powered by the best.</h2>
          <p style={{ color: "var(--text-muted)" }}>We use modern, scalable technologies to build your digital products.</p>
        </div>
      </div>

      <div className="platforms-marquee-wrapper">
        <div className="platforms-marquee-track">
          {row1Marquee.map((tool, idx) => (
            <div className="platform-item" key={idx} style={{ border: "1px solid var(--border)" }}>
              <div className="platform-icon">
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=64`} 
                  alt={tool.name} 
                  style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                />
              </div>
              <span className="platform-name" style={{ color: "var(--text-main)" }}>{tool.name}</span>
            </div>
          ))}
        </div>

        <div className="platforms-marquee-track reverse">
          {row2Marquee.map((tool, idx) => (
            <div className="platform-item" key={idx} style={{ border: "1px solid var(--border)" }}>
              <div className="platform-icon">
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=64`} 
                  alt={tool.name} 
                  style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                />
              </div>
              <span className="platform-name" style={{ color: "var(--text-main)" }}>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <p className="platforms-footer-text" style={{ color: "var(--text-muted)" }}>Official partners and certified developers.</p>
      </div>
    </section>
  );
}
