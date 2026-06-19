export default function ClientSlider({ bgColor = "transparent", paddingTop = "120px", paddingBottom = "120px" }) {
  return (
    <div className="client-slider-wrapper" style={{ 
      backgroundColor: bgColor, 
      paddingTop: paddingTop,
      paddingBottom: paddingBottom,
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      width: "100vw", 
      position: "relative", 
      left: "50%", 
      right: "50%", 
      marginLeft: "-50vw", 
      marginRight: "-50vw", 
      overflow: "hidden" 
    }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <span style={{ color: "var(--orange)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.9rem" }}>Our Clients</span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--teal-dark)", fontWeight: "800", marginTop: "16px", letterSpacing: "-0.02em" }}>Trusted by ambitious brands</h2>
      </div>
      
      <div className="client-marquee-container">
        <div className="client-marquee-content">
          {/* Double array for seamless infinite scrolling */}
          {[...Array.from({ length: 11 }), ...Array.from({ length: 11 })].map((_, i) => (
            <div key={i} className="client-logo-wrapper">
              <img 
                src={`/logo/${(i % 11) + 1}.png`} 
                alt={`Client Logo ${(i % 11) + 1}`} 
                className="client-logo-img"
              />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .client-marquee-container {
          display: flex;
          width: 100%;
          overflow: hidden;
          padding: 40px 0;
          background: transparent;
        }
        .client-marquee-content {
          display: flex;
          align-items: center;
          animation: scroll-clients 30s linear infinite;
          width: max-content;
        }
        .client-marquee-content:hover {
          animation-play-state: paused;
        }
        .client-logo-wrapper {
          flex-shrink: 0;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .client-logo-img {
          max-height: 55px;
          max-width: 150px;
          object-fit: contain;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .client-logo-img:hover {
          transform: scale(1.05);
        }

        @keyframes scroll-clients {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
