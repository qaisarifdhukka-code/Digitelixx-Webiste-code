"use client";

export default function MarketingBelief({ bg = "var(--white)" }) {
  return (
    <section className="marketing-belief" style={{ 
      backgroundColor: bg, 
      padding: "120px 0"
    }}>
      <div className="container">
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "80px",
          alignItems: "flex-start"
        }}>
          
          {/* Left Column: Heading */}
          <div style={{ maxWidth: "500px" }}>
            <span style={{ 
              color: "var(--orange)", 
              fontWeight: "700", 
              textTransform: "uppercase", 
              letterSpacing: "2px", 
              fontSize: "0.85rem",
              display: "block",
              marginBottom: "12px"
            }}>
              Our Belief
            </span>
            <div style={{ 
              height: "2px", 
              width: "48px", 
              backgroundColor: "var(--orange)", 
              marginBottom: "40px" 
            }}></div>
            
            <h2 style={{ 
              fontSize: "clamp(2.5rem, 4vw, 3.2rem)", 
              color: "var(--teal-dark)", 
              lineHeight: "1.2",
              fontWeight: "800",
              letterSpacing: "-0.03em"
            }}>
              Most agencies give you a website. We give you a <span style={{ color: "var(--orange)" }}>weapon.</span>
            </h2>
          </div>

          {/* Right Column: Text Content */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "24px",
            paddingTop: "10px" // align text slightly with the large heading
          }}>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: "1.8", margin: 0 }}>
              We started Digitelixx because we were tired of watching brilliant founders pour money into agencies that delivered beautiful decks and broken promises.
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: "1.8", margin: 0 }}>
              Every brand we partner with gets the same obsessive treatment — strategy first, execution second, results always. We don't pitch vanity metrics. We build systems that compound.
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: "1.8", margin: 0 }}>
              If you're ready to stop guessing and start growing, you're in the right place.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
