export const metadata = {
  title: "Careers | Digitelixx",
  description: "Join our team of digital weapons. We are hiring engineers, designers, and growth marketers.",
};

export default function CareersPage() {
  return (
    <main style={{ backgroundColor: "var(--white)", minHeight: "100vh", paddingTop: "100px", paddingBottom: "100px" }}>
      <div className="container">
        
        {/* Intro */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "80px", alignItems: "flex-start", marginBottom: "80px" }}>
          
          <div style={{ flex: "1 1 400px" }}>
            <span style={{ color: "var(--orange)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.9rem", display: "block", marginBottom: "24px" }}>
              Join the Team
            </span>
            <div style={{ height: "2px", width: "48px", backgroundColor: "var(--orange)", marginBottom: "40px" }}></div>
            <h1 style={{ fontSize: "clamp(3.5rem, 6vw, 5.5rem)", color: "var(--teal-dark)", lineHeight: "1.1", fontWeight: "800", margin: 0, letterSpacing: "-0.04em" }}>
              Build the <br/><span style={{ color: "var(--orange)" }}>future.</span>
            </h1>
          </div>

          <div style={{ flex: "1 1 500px", paddingTop: "12px", display: "flex", flexDirection: "column", gap: "32px" }}>
            <p style={{ fontSize: "1.35rem", color: "var(--text-muted)", lineHeight: "1.8", margin: 0 }}>
              We are always looking for exceptional talent to join our remote-first team. We don't care about where you went to school; we care about what you can build, design, or sell.
            </p>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: "1.8", margin: 0 }}>
              If you are obsessed with quality and thrive in high-autonomy environments, you belong here.
            </p>
          </div>

        </div>

        {/* Open Roles */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "80px" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--teal-dark)", marginBottom: "48px", fontWeight: "800", letterSpacing: "-0.02em" }}>
            Open Positions
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            
            <div className="career-job-row" style={{ borderBottom: "1px solid var(--border)", paddingBottom: "32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px" }}>
              <div>
                <h3 style={{ fontSize: "1.5rem", color: "var(--teal-dark)", marginBottom: "8px", fontWeight: "700" }}>Senior Full-Stack Engineer</h3>
                <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", margin: 0 }}>Remote • Engineering</p>
              </div>
              <a href="mailto:careers@digitelixx.com?subject=Application:%20Senior%20Full-Stack%20Engineer" className="btn-action" style={{ textDecoration: "none", display: "inline-block" }}>
                Apply Now
              </a>
            </div>

            <div className="career-job-row" style={{ borderBottom: "1px solid var(--border)", paddingBottom: "32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px" }}>
              <div>
                <h3 style={{ fontSize: "1.5rem", color: "var(--teal-dark)", marginBottom: "8px", fontWeight: "700" }}>Growth Strategist</h3>
                <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", margin: 0 }}>Remote • Marketing</p>
              </div>
              <a href="mailto:careers@digitelixx.com?subject=Application:%20Growth%20Strategist" className="btn-action" style={{ textDecoration: "none", display: "inline-block" }}>
                Apply Now
              </a>
            </div>

            <div className="career-job-row" style={{ borderBottom: "1px solid var(--border)", paddingBottom: "32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px" }}>
              <div>
                <h3 style={{ fontSize: "1.5rem", color: "var(--teal-dark)", marginBottom: "8px", fontWeight: "700" }}>UX/UI Designer</h3>
                <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", margin: 0 }}>Remote • Design</p>
              </div>
              <a href="mailto:careers@digitelixx.com?subject=Application:%20UX/UI%20Designer" className="btn-action" style={{ textDecoration: "none", display: "inline-block" }}>
                Apply Now
              </a>
            </div>

            <div className="career-job-row" style={{ borderBottom: "1px solid var(--border)", paddingBottom: "32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px" }}>
              <div>
                <h3 style={{ fontSize: "1.5rem", color: "var(--teal-dark)", marginBottom: "8px", fontWeight: "700" }}>Open Application</h3>
                <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", margin: 0 }}>Remote • Any Department</p>
              </div>
              <a href="mailto:careers@digitelixx.com?subject=Application:%20Open%20Role" className="btn-action" style={{ textDecoration: "none", display: "inline-block" }}>
                Apply Now
              </a>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
