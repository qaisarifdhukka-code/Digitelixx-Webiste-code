export default function CaseStudyHighlight() {
  return (
    <section style={{ padding: "120px 0", backgroundColor: "var(--bg-alt)" }}>
      <div className="container">
        <div 
          className="belief-grid"
          style={{ 
            display: "grid", 
            gap: "60px", 
            alignItems: "flex-start" 
          }}
        >
          {/* Left Column */}
          <div>
            <div style={{ marginBottom: "32px" }}>
              <span style={{ 
                color: "var(--orange)", 
                fontWeight: "700", 
                textTransform: "uppercase", 
                letterSpacing: "2px", 
                fontSize: "0.85rem",
                display: "inline-block",
                borderBottom: "2px solid var(--orange)",
                paddingBottom: "8px"
              }}>
                Our Story
              </span>
            </div>
            <h2 style={{ 
              fontSize: "clamp(2.5rem, 5vw, 4rem)", 
              lineHeight: "1.1", 
              color: "var(--teal-dark)", 
              fontWeight: "800",
              margin: 0,
              letterSpacing: "-0.02em"
            }}>
              Most agencies give you a website. We give you a <span style={{ color: "var(--orange)" }}>weapon.</span>
            </h2>
          </div>

          {/* Right Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "16px" }}>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: "1.8", margin: 0 }}>
              We started Digitelixx because we were tired of watching brilliant founders pour money into agencies that delivered beautiful decks and broken promises.
            </p>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: "1.8", margin: 0 }}>
              Every brand we partner with gets the same obsessive treatment — strategy first, execution second, results always. We don't pitch vanity metrics. We build systems that compound.
            </p>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: "1.8", margin: 0 }}>
              If you're ready to stop guessing and start growing, you're in the right place.
            </p>
            <div style={{ marginTop: "16px" }}>
              <a href="/about" className="btn-action" style={{ display: "inline-flex", background: "var(--teal-dark)", color: "var(--white)", padding: "14px 32px", fontSize: "1rem", borderRadius: "50px", fontWeight: "600", textDecoration: "none", alignItems: "center", width: "fit-content", transition: "all 0.3s ease" }}>
                See more
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "8px" }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
      
      {/* Add mobile responsiveness directly via internal style block */}
      <style dangerouslySetInnerHTML={{__html: `
        .belief-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
          .belief-grid {
            grid-template-columns: 1fr;
            gap: 40px !important;
          }
        }
      `}} />
    </section>
  );
}
