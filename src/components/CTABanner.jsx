export default function CTABanner() {
  return (
    <div style={{ background: "var(--white)" }}>
      <div className="cta-banner container">
        <h2>Ready to work with us ?</h2>
        <a href="#" className="btn-white">
          Book a Free Call
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
}
