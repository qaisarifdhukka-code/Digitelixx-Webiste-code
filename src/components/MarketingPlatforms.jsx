"use client";

export default function MarketingPlatforms({ bg = "var(--bg-alt)" }) {
  const tools = [
    { name: "Google Analytics", domain: "analytics.google.com" },
    { name: "Google Ads", domain: "ads.google.com" },
    { name: "Meta Ads", domain: "facebook.com" },
    { name: "TikTok Ads", domain: "tiktok.com" },
    { name: "HubSpot", domain: "hubspot.com" },
    { name: "SEMrush", domain: "semrush.com" },
    { name: "Ahrefs", domain: "ahrefs.com" },
    { name: "Mailchimp", domain: "mailchimp.com" },
    { name: "Klaviyo", domain: "klaviyo.com" },
    { name: "Shopify", domain: "shopify.com" },
    { name: "WordPress", domain: "wordpress.org" },
    { name: "Hotjar", domain: "hotjar.com" },
    { name: "Optimizely", domain: "optimizely.com" }
  ];

  // Split into two rows
  const row1Tools = tools.slice(0, 7);
  const row2Tools = tools.slice(7);

  const row1Marquee = [...row1Tools, ...row1Tools, ...row1Tools, ...row1Tools];
  const row2Marquee = [...row2Tools, ...row2Tools, ...row2Tools, ...row2Tools, ...row2Tools];

  return (
    <section className="platforms-section" style={{ background: bg, borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div className="platforms-header" style={{ textAlign: "center" }}>
          <span className="platforms-tag">PLATFORMS & PARTNERS</span>
          <h2 style={{ color: "var(--teal)" }}>The Ultimate Marketing Stack.</h2>
          <p style={{ color: "var(--text-muted)" }}>We leverage industry-leading platforms to track, optimize, and scale your growth.</p>
        </div>
      </div>

      <div className="platforms-marquee-wrapper" style={{ background: "transparent", padding: "40px 0 0 0" }}>
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
        <p className="platforms-footer-text" style={{ color: "var(--text-muted)" }}>Certified experts across all major ad networks.</p>
      </div>
    </section>
  );
}
