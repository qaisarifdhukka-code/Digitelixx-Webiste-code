export const metadata = {
  title: "About Us | Digitelixx",
  description: "Learn about Digitelixx, our story, and our culture.",
};

import ClientSlider from "@/components/ClientSlider";

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "var(--white)", minHeight: "100vh", paddingTop: "100px", paddingBottom: "100px" }}>
      <div className="container">
        
        {/* Section 1: Introduction */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "80px", alignItems: "flex-start" }}>
          
          <div style={{ flex: "1 1 400px" }}>
            <span style={{ color: "var(--orange)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.9rem", display: "block", marginBottom: "24px" }}>
              Our Story
            </span>
            <div style={{ height: "2px", width: "48px", backgroundColor: "var(--orange)", marginBottom: "40px" }}></div>
            <h1 style={{ fontSize: "clamp(3.5rem, 6vw, 5.5rem)", color: "var(--teal-dark)", lineHeight: "1.1", fontWeight: "800", margin: 0, letterSpacing: "-0.04em" }}>
              We build <br/>digital <br/><span style={{ color: "var(--orange)" }}>weapons.</span>
            </h1>
          </div>

          <div style={{ flex: "1 1 500px", paddingTop: "12px", display: "flex", flexDirection: "column", gap: "32px" }}>
            <p style={{ fontSize: "1.35rem", color: "var(--text-muted)", lineHeight: "1.8", margin: 0 }}>
              Digitelixx was founded on a very simple premise: most digital agencies over-promise and under-deliver. We wanted to build something different—a lean, performance-obsessed partner that actually cares about your bottom line.
            </p>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: "1.8", margin: 0 }}>
              We are a team of engineers, designers, and growth marketers who believe in strategy-first execution. We don't believe in vanity metrics or bloated retainers. Every line of code we write and every campaign we launch is rigorously designed to generate revenue.
            </p>
          </div>

        </div>

        {/* Section 2: Core Values (New Content) */}
        <div style={{ marginTop: "120px", padding: "80px 0", borderTop: "1px solid rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "var(--orange)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.9rem" }}>What Drives Us</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--teal-dark)", fontWeight: "800", marginTop: "16px", letterSpacing: "-0.02em" }}>Our Core Principles</h2>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
            <div>
              <div style={{ width: "50px", height: "50px", backgroundColor: "var(--orange)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", color: "white" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <h3 style={{ fontSize: "1.5rem", color: "var(--teal-dark)", marginBottom: "16px" }}>Radical Transparency</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>No black-box strategies. You see exactly where every dollar goes and what it brings back. We build trust through absolute clarity.</p>
            </div>
            
            <div>
              <div style={{ width: "50px", height: "50px", backgroundColor: "var(--teal-dark)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", color: "white" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 style={{ fontSize: "1.5rem", color: "var(--teal-dark)", marginBottom: "16px" }}>Revenue First</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>Traffic and likes don't pay the bills. Every digital ecosystem we build is engineered with one primary goal: converting attention into actual revenue.</p>
            </div>

            <div>
              <div style={{ width: "50px", height: "50px", backgroundColor: "var(--orange)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", color: "white" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3 style={{ fontSize: "1.5rem", color: "var(--teal-dark)", marginBottom: "16px" }}>Speed & Execution</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>In the digital world, speed is a massive competitive advantage. We move fast, iterate quickly, and deploy solutions that keep you ahead of the curve.</p>
            </div>
          </div>
        </div>

        {/* Section 3: Clients Full Width Slider */}
        <ClientSlider />

      </div>
    </main>
  );
}
