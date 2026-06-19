export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero container">
        <div className="hero-left">
          <span className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--orange)', borderRadius: '50%' }}></span>
            Tailored strategies for your brand!
          </span>
          <h1>Grow your brand<br/>Only with the best</h1>
          <p>We turn your vision into impactful digital campaigns and robust software solutions. No long contracts. No bloated builds. Real results.</p>
          <a href="https://wa.me/917304759661?text=Hi%20Digitelixx,%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "16px 36px", fontSize: "1.1rem", borderRadius: "100px", fontWeight: "700" }}>
            Book a Free Call &rarr;
          </a>
        </div>
        <div className="hero-right">
          <div className="hero-card">
            <div className="hero-card-tag">Fast & Reliable</div>
            <h3>Don't see growth in 90 days? We work for free.</h3>
            <div className="chart">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
