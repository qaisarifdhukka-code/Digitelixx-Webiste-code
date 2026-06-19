import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Digitelixx",
  description: "Get in touch with Digitelixx.",
};

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: "var(--bg-alt)", minHeight: "100vh", paddingTop: "100px", paddingBottom: "100px" }}>
      <div className="container">
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 450px), 1fr))", gap: "80px", alignItems: "start" }}>
          
          {/* Left Column: Text & Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
            
            <div>
              <span style={{ color: "var(--orange)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.9rem", display: "block", marginBottom: "24px" }}>
                Start a Project
              </span>
              <div style={{ height: "2px", width: "48px", backgroundColor: "var(--orange)", marginBottom: "40px" }}></div>
              
              <h1 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "var(--teal-dark)", lineHeight: "1.2", fontWeight: "800", margin: 0, letterSpacing: "-0.02em" }}>
                Let's build something <br/><span style={{ color: "var(--orange)" }}>extraordinary.</span>
              </h1>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", borderTop: "1px solid var(--border)", paddingTop: "40px" }}>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "700", color: "var(--teal-dark)", minWidth: "80px", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "1px" }}>Email</span>
                <a href="mailto:info@digitelixx.com" style={{ fontSize: "1.15rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}>
                  info@digitelixx.com
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "700", color: "var(--teal-dark)", minWidth: "80px", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "1px" }}>Call</span>
                <a href="tel:+917304759661" style={{ fontSize: "1.15rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}>
                  +91 73047 59661
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <span style={{ fontWeight: "700", color: "var(--teal-dark)", minWidth: "80px", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "1px", marginTop: "4px" }}>Office</span>
                <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: "1.6", margin: 0 }}>
                  1601, Magic Square, Near Dhukka Chambers<br/>
                  Off. Poddar Road, Malad(E)<br/>
                  Mumbai-400097, Maharashtra, India
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: The Form */}
          <div style={{ marginTop: "12px" }}>
            <ContactForm />
          </div>

        </div>
      </div>
    </main>
  );
}
