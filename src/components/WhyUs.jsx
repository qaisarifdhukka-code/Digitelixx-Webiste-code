export default function WhyUs() {
  return (
    <section className="why-us-section" style={{ background: "var(--white)" }}>
      <div className="container">
        <h2>Why Digitelixx?</h2>
        <div className="why-us-grid">
          <div className="why-card">
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', backgroundColor: 'rgba(240, 90, 34, 0.1)', borderRadius: '12px', marginBottom: '20px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
            </div>
            <h4>No Bloated Builds</h4>
            <p>We write clean, scalable code without unnecessary dependencies that slow down your applications.</p>
          </div>
          <div className="why-card">
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', backgroundColor: 'rgba(240, 90, 34, 0.1)', borderRadius: '12px', marginBottom: '20px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
            </div>
            <h4>Transparent Pricing</h4>
            <p>Clear, itemized proposals. You know exactly what you're paying for before we write a single line of code.</p>
          </div>
          <div className="why-card">
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', backgroundColor: 'rgba(240, 90, 34, 0.1)', borderRadius: '12px', marginBottom: '20px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h4>Rapid Deployment</h4>
            <p>We believe in shipping fast and iterating often. Get your MVP to market in weeks, not months.</p>
          </div>
          <div className="why-card">
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', backgroundColor: 'rgba(240, 90, 34, 0.1)', borderRadius: '12px', marginBottom: '20px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 9l-5-5-4 4-4-4"/></svg>
            </div>
            <h4>Data-Driven Decisions</h4>
            <p>Every marketing strategy is backed by hard analytics and core metrics, minimizing your risk.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
