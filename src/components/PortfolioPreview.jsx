export default function PortfolioPreview() {
  return (
    <div style={{ background: "var(--white)", padding: "20px 0" }}>
      <section className="portfolio-section container">
        <h2>Featured Work</h2>
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <div className="portfolio-img" style={{ background: "url('/Images/Best Digital Marketing Company in Mumbai.png') center/cover" }}></div>
            <div className="portfolio-info">
              <h4>E-Commerce Scale Up</h4>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>Digital Marketing & Shopify Dev</p>
            </div>
          </div>
          <div className="portfolio-card">
            <div className="portfolio-img" style={{ background: "url('/Images/digitelixx.com_ (2).png') center/cover" }}></div>
            <div className="portfolio-info">
              <h4>B2B SaaS Dashboard</h4>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>React & Node.js Architecture</p>
            </div>
          </div>
          <div className="portfolio-card">
            <div className="portfolio-img" style={{ background: "url('/Images/Innovative Digital Marketing Agency in Mumbai.png') center/cover" }}></div>
            <div className="portfolio-info">
              <h4>Fintech App Launch</h4>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>Mobile App & Go-to-Market</p>
            </div>
          </div>
          <div className="portfolio-card">
            <div className="portfolio-img" style={{ background: "url('/Images/digitelixx_probe_a_1779349940121.png') center/cover" }}></div>
            <div className="portfolio-info">
              <h4>Healthcare Portal</h4>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>Secure Next.js Application</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
