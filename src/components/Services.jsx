export default function Services() {
  return (
    <section className="services-section" style={{ background: "var(--bg-alt)" }}>
      <div className="container">
        <h2 style={{ fontSize: "3rem", marginBottom: "16px" }}>Two Pillars of Growth</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1.2rem", maxWidth: "600px" }}>
          We focus on what drives revenue: building software that scales and marketing that converts.
        </p>
        
        <div className="services-grid">
          <div className="service-pillar">
            <div className="service-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', backgroundColor: 'rgba(240, 90, 34, 0.1)', borderRadius: '12px', zIndex: 1, position: 'relative' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
            </div>
            
            <svg className="watermark" width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" style={{ position: 'absolute', right: '-40px', top: '-40px', zIndex: 0 }}>
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
              <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
            </svg>
            
            <div className="service-tag" style={{ position: 'relative', zIndex: 1 }}>01 — STRATEGY</div>
            <h3 style={{ position: 'relative', zIndex: 1 }}>Digital Marketing</h3>
            <p style={{ position: 'relative', zIndex: 1 }}>Data-driven campaigns, SEO, paid media, and brand strategy designed to capture attention and increase conversions.</p>
            <a href="#" className="service-link" style={{ position: 'relative', zIndex: 1 }}>
              VIEW CAPABILITIES
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
          
          <div className="service-pillar">
            <div className="service-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', zIndex: 1, position: 'relative' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>

            <svg className="watermark" width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', right: '-40px', top: '0', zIndex: 0 }}>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            
            <div className="service-tag" style={{ color: '#3b82f6', position: 'relative', zIndex: 1 }}>02 — ENGINEERING</div>
            <h3 style={{ position: 'relative', zIndex: 1 }}>Software Development</h3>
            <p style={{ position: 'relative', zIndex: 1 }}>Custom web apps, enterprise software, and robust architectural solutions using modern React and Node.js tech stacks.</p>
            <a href="#" className="service-link" style={{ position: 'relative', zIndex: 1 }}>
              VIEW CAPABILITIES
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
