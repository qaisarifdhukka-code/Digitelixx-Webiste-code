"use client";

export default function Platforms() {
  const row1Tools = [
    { name: "Google Ads", domain: "ads.google.com" },
    { name: "Meta Ads", domain: "meta.com" },
    { name: "LinkedIn Ads", domain: "linkedin.com" },
    { name: "YouTube Ads", domain: "youtube.com" },
    { name: "TikTok Ads", domain: "tiktok.com" },
    { name: "X Ads", domain: "x.com" },
    { name: "Instagram", domain: "instagram.com" },
    { name: "Facebook", domain: "facebook.com" }
  ];

  const row2Tools = [
    { name: "React", domain: "react.dev" },
    { name: "Next.js", domain: "nextjs.org" },
    { name: "Node.js", domain: "nodejs.org" },
    { name: "Python", domain: "python.org" },
    { name: "PostgreSQL", domain: "postgresql.org" },
    { name: "Firebase", domain: "firebase.google.com" },
    { name: "AWS", domain: "aws.amazon.com" },
    { name: "Google Cloud", domain: "cloud.google.com" }
  ];

  // We duplicate the arrays a few times to ensure the marquee fills even ultra-wide screens
  const row1Marquee = [...row1Tools, ...row1Tools, ...row1Tools, ...row1Tools];
  const row2Marquee = [...row2Tools, ...row2Tools, ...row2Tools, ...row2Tools];

  return (
    <section className="platforms-section">
      <div className="container">
        <div className="platforms-header">
          <span className="platforms-tag">PLATFORMS & TECHNOLOGIES</span>
          <h2>Every tool we need. One agency.</h2>
          <p>From building products to growing brands — we use the best tools in the industry.</p>
        </div>
      </div>

      <div className="platforms-marquee-wrapper">
        {/* Row 1: Moving Left */}
        <div className="platforms-marquee-track">
          {row1Marquee.map((tool, idx) => (
            <div className="platform-item" key={idx}>
              <div className="platform-icon">
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=64`} 
                  alt={tool.name} 
                  style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                />
              </div>
              <span className="platform-name">{tool.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2: Moving Right */}
        <div className="platforms-marquee-track reverse">
          {row2Marquee.map((tool, idx) => (
            <div className="platform-item" key={idx}>
              <div className="platform-icon">
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=64`} 
                  alt={tool.name} 
                  style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                />
              </div>
              <span className="platform-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <p className="platforms-footer-text">Certified by the platforms we work with every day.</p>
      </div>
    </section>
  );
}
