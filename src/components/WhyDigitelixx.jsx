"use client";

export default function WhyDigitelixx({ bg = "var(--bg-alt)" }) {
  return (
    <section className="why-section" style={{ 
      backgroundColor: bg, 
      padding: "60px 0", 
      position: "relative", 
      zIndex: 0 
    }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: "left", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--teal-dark)" }}>Why Digitelixx?</h2>
        </div>

        <div className="why-grid" style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
          gap: "40px" 
        }}>
          {/* Card 1 */}
          <div className="why-card">
            <div className="why-icon-box" style={{ 
              width: "48px", height: "48px", borderRadius: "12px", 
              backgroundColor: "var(--orange-light)", display: "flex", 
              alignItems: "center", justifyContent: "center", marginBottom: "20px" 
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--teal-dark)", marginBottom: "12px" }}>
              No Bloated Builds
            </h4>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
              We write clean, scalable code without unnecessary dependencies that slow down your applications.
            </p>
          </div>

          {/* Card 2 */}
          <div className="why-card">
            <div className="why-icon-box" style={{ 
              width: "48px", height: "48px", borderRadius: "12px", 
              backgroundColor: "var(--orange-light)", display: "flex", 
              alignItems: "center", justifyContent: "center", marginBottom: "20px" 
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
            </div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--teal-dark)", marginBottom: "12px" }}>
              Transparent Pricing
            </h4>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
              Clear, itemized proposals. You know exactly what you're paying for before we write a single line of code.
            </p>
          </div>

          {/* Card 3 */}
          <div className="why-card">
            <div className="why-icon-box" style={{ 
              width: "48px", height: "48px", borderRadius: "12px", 
              backgroundColor: "var(--orange-light)", display: "flex", 
              alignItems: "center", justifyContent: "center", marginBottom: "20px" 
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--teal-dark)", marginBottom: "12px" }}>
              Rapid Deployment
            </h4>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
              We believe in shipping fast and iterating often. Get your MVP to market in weeks, not months.
            </p>
          </div>

          {/* Card 4 */}
          <div className="why-card">
            <div className="why-icon-box" style={{ 
              width: "48px", height: "48px", borderRadius: "12px", 
              backgroundColor: "var(--orange-light)", display: "flex", 
              alignItems: "center", justifyContent: "center", marginBottom: "20px" 
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--teal-dark)", marginBottom: "12px" }}>
              Data-Driven Decisions
            </h4>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
              Every strategy is backed by hard analytics and core metrics, minimizing your risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
