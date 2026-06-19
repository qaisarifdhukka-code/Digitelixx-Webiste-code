"use client";

export default function MarketingFunnel({ bg = "var(--white)" }) {
  const steps = [
    {
      step: "01",
      title: "Attract",
      desc: "Drive highly targeted traffic to your site through technical SEO, paid search, and viral social campaigns.",
      color: "var(--teal)"
    },
    {
      step: "02",
      title: "Engage",
      desc: "Capture attention with compelling copy, interactive content, and personalized user experiences that keep visitors on page.",
      color: "var(--orange)"
    },
    {
      step: "03",
      title: "Convert",
      desc: "Turn passive scrollers into paying customers through rigorous A/B testing, optimized funnels, and frictionless checkout flows.",
      color: "var(--teal-dark)"
    },
    {
      step: "04",
      title: "Retain",
      desc: "Maximize Customer Lifetime Value (LTV) with automated email sequences, SMS marketing, and dynamic retargeting ads.",
      color: "var(--orange)"
    }
  ];

  return (
    <section className="marketing-funnel" style={{ 
      backgroundColor: bg, 
      minHeight: "90vh",
      display: "flex",
      alignItems: "center",
      padding: "60px 0"
    }}>
      <div className="container" style={{ width: "100%" }}>
        
        <div style={{ textAlign: "center", marginBottom: "64px", maxWidth: "700px", margin: "0 auto 64px auto" }}>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3rem)", color: "var(--teal-dark)", marginBottom: "16px", letterSpacing: "-0.02em" }}>
            The Growth Funnel
          </h2>
          <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
            A systematic, data-backed approach to scaling your brand. We map out the entire customer journey to ensure no lead slips through the cracks.
          </p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
          gap: "32px",
          position: "relative"
        }}>
          {steps.map((step, idx) => (
            <div key={idx} style={{
              background: "var(--bg-alt)",
              padding: "40px 32px",
              borderRadius: "24px",
              position: "relative",
              border: "1px solid var(--border)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <div style={{ 
                fontSize: "3.5rem", 
                fontWeight: "800", 
                color: step.color, 
                opacity: 0.2, 
                position: "absolute", 
                top: "24px", 
                right: "32px",
                lineHeight: "1"
              }}>
                {step.step}
              </div>
              
              <h3 style={{ fontSize: "1.5rem", color: "var(--teal-dark)", marginBottom: "16px", fontWeight: "800", position: "relative", zIndex: 1, marginTop: "40px" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: "1.7", margin: 0, position: "relative", zIndex: 1 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
