"use client";

export default function MinimalCTA({ bg = "var(--bg)" }) {
  // bg is passed from parent for alternating sections, but for a full-width dark CTA, 
  // the dark background takes precedence and acts as the "section" itself.
  return (
    <section className="minimal-cta-section" style={{ 
      backgroundColor: "var(--teal-dark)", 
      padding: "60px 0", // Shorter height
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(255, 255, 255, 0.1)"
    }}>
      
      {/* Decorative Floating Elements (Abstract Isometric Shapes) */}
      <svg width="120" height="120" viewBox="0 0 100 100" style={{ position: "absolute", top: "-20px", left: "-20px", opacity: "0.1", transform: "rotate(15deg)" }}>
        <rect width="80" height="80" fill="var(--white)" rx="10" />
      </svg>
      <svg width="80" height="80" viewBox="0 0 100 100" style={{ position: "absolute", bottom: "10%", left: "15%", opacity: "0.05", transform: "rotate(45deg)" }}>
        <rect width="60" height="60" fill="var(--white)" rx="8" />
      </svg>
      <svg width="150" height="150" viewBox="0 0 100 100" style={{ position: "absolute", top: "20%", right: "-30px", opacity: "0.08", transform: "rotate(-10deg)" }}>
        <rect width="80" height="80" fill="var(--white)" rx="12" />
      </svg>
      <svg width="60" height="60" viewBox="0 0 100 100" style={{ position: "absolute", bottom: "20%", right: "15%", opacity: "0.1", transform: "rotate(30deg)" }}>
        <rect width="60" height="60" fill="var(--white)" rx="8" />
      </svg>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ 
            fontSize: "3rem", 
            color: "var(--white)", 
            marginBottom: "16px",
            letterSpacing: "-0.02em"
          }}>
            Ready to build something amazing?
          </h2>
          <p style={{ 
            fontSize: "1.15rem", 
            color: "rgba(255, 255, 255, 0.7)", 
            marginBottom: "32px",
            lineHeight: "1.6"
          }}>
            Partner with our expert full-stack team to scale your business with intelligent software.
          </p>
          
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/917304759661?text=Hi%20Digitelixx,%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--orange)",
              color: "var(--white)",
              padding: "14px 32px",
              borderRadius: "100px",
              fontSize: "1.05rem",
              fontWeight: "600",
              textDecoration: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              minWidth: "180px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(240, 90, 34, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              Let's Talk
            </a>
            
            <a href="/about" style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              color: "var(--white)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              padding: "12px 32px", // adjusted for 2px border
              borderRadius: "100px",
              fontSize: "1.05rem",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.2s ease",
              minWidth: "180px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--white)";
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
