"use client";

import Link from "next/link";

export default function MarketingHero() {
  return (
    <section className="arched-hero" style={{ paddingBottom: "100px" }}>
      <div className="container arched-hero-content">
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          
          <div style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "8px", 
            padding: "8px 16px", 
            borderRadius: "100px", 
            backgroundColor: "var(--orange-light)", 
            color: "var(--orange)", 
            fontWeight: "700", 
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "24px"
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            Performance Marketing
          </div>

          <h1 className="arched-hero-title">
            Data-Driven Marketing for <br/>
            <span className="highlight-text">Measurable Growth</span>
          </h1>

          <p className="arched-hero-desc" style={{ maxWidth: "650px", margin: "0 auto 40px auto" }}>
            Stop guessing. We build targeted, high-converting campaigns backed by deep analytics to scale your brand and maximize your ROI.
          </p>

          <div className="hero-ctas" style={{ display: "flex", gap: "16px", justifyContent: "center", marginBottom: "48px" }}>
            <Link href="/contact" className="btn-primary" style={{ padding: "14px 28px", borderRadius: "100px", fontWeight: "600", backgroundColor: "var(--orange)", color: "var(--white)", textDecoration: "none" }}>
              Get Your Free Audit
            </Link>
            <Link href="/about" className="btn-secondary" style={{ padding: "14px 28px", borderRadius: "100px", fontWeight: "600", border: "2px solid var(--teal)", color: "var(--teal)", textDecoration: "none" }}>
              About Us
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
