import Link from "next/link";
import DevPlatforms from "@/components/DevPlatforms";
import ClientSlider from "@/components/ClientSlider";
import FAQ from "@/components/FAQ";
import ServiceTabs from "@/components/ServiceTabs";
import WhyDigitelixx from "@/components/WhyDigitelixx";
import MinimalCTA from "@/components/MinimalCTA";

// The SVG Icons using the user's requested style (orange lines inside light orange square)
const CodeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="var(--orange-light)" />
    <path d="M18 16L10 24L18 32M30 16L38 24L30 32" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MobileIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="var(--orange-light)" />
    <rect x="16" y="10" width="16" height="28" rx="3" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 32H24.01" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SoftwareIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="var(--orange-light)" />
    <rect x="12" y="14" width="24" height="20" rx="2" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20H36M20 34V38M28 34V38M16 38H32" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AutomationIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="var(--orange-light)" />
    <path d="M24 10L14 26H24L24 38L34 22H24L24 10Z" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EcommerceIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="var(--orange-light)" />
    <path d="M12 16H36L33 30H15L12 16Z" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 34C19 35.1046 18.1046 36 17 36C15.8954 36 15 35.1046 15 34C15 32.8954 15.8954 32 17 32C18.1046 32 19 32.8954 19 34Z" fill="var(--orange)"/>
    <path d="M33 34C33 35.1046 32.1046 36 31 36C29.8954 36 29 35.1046 29 34C29 32.8954 29.8954 32 31 32C32.1046 32 33 32.8954 33 34Z" fill="var(--orange)"/>
    <path d="M12 16L10 10H6" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function FullStackDevelopment() {
  return (
    <div className="service-page">
      {/* 1. Arched Hero with Floating Service Boxes */}
      <section className="arched-hero">
        <div className="arched-hero-bg"></div>
        <div className="container arched-hero-content">
          <h1 className="arched-hero-title">
            Solutions for Building <br/>
            <span className="highlight-text">a Smart World</span>
          </h1>
          <p className="arched-hero-desc">
            Powering businesses with intelligent software, automation, and scalable digital solutions.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginBottom: "48px" }}>
            <Link href="/contact" className="btn-primary" style={{ padding: "14px 28px", borderRadius: "100px", fontWeight: "600", backgroundColor: "var(--orange)", color: "var(--white)", textDecoration: "none" }}>
              Let's Build It
            </Link>
            <Link href="/about" className="btn-secondary" style={{ padding: "14px 28px", borderRadius: "100px", fontWeight: "600", border: "2px solid var(--teal)", color: "var(--teal)", textDecoration: "none" }}>
              About Us
            </Link>
          </div>

          <div className="arched-hero-boxes">
            <div className="service-box active">
              <CodeIcon />
              <span className="box-title">Website<br/>UI/UX</span>
            </div>
            <div className="service-box">
              <MobileIcon />
              <span className="box-title">Mobile App<br/>Development</span>
            </div>
            <div className="service-box">
              <SoftwareIcon />
              <span className="box-title">Web App<br/>Development</span>
            </div>
            <div className="service-box">
              <AutomationIcon />
              <span className="box-title">Business<br/>Automation</span>
            </div>
            <div className="service-box">
              <EcommerceIcon />
              <span className="box-title">E-Commerce<br/>Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Tabs (Moved to 2nd) */}
      <ServiceTabs bg="var(--bg-alt)" />

      {/* 3. Clients Slider (Moved to 3rd) */}
      <ClientSlider bgColor="var(--white)" paddingTop="120px" paddingBottom="120px" />

      {/* 4. Why Digitelixx (Moved to 4th) */}
      <WhyDigitelixx bg="var(--bg-alt)" />

      {/* 5. Tech Stack */}
      <DevPlatforms bg="var(--white)" />

      {/* 6. Process (Icon Grid Layout) */}
      <section className="dev-process-section" style={{ backgroundColor: "var(--bg-alt)" }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: "left" }}>
            <h2>How We Build</h2>
            <p style={{ maxWidth: "600px", margin: "0" }}>A transparent, milestone-driven process ensuring we deliver on time and on budget.</p>
          </div>

          <div className="process-grid">
            {/* Step 1 */}
            <div className="process-card">
              <div className="process-icon-box">
                <span className="process-step-badge">01</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h4 className="process-card-title">Discovery & Architecture</h4>
              <p className="process-card-desc">We start by understanding your business goals, target users, and technical constraints. We then architect the database, tech stack, and user flows.</p>
            </div>

            {/* Step 2 */}
            <div className="process-card">
              <div className="process-icon-box">
                <span className="process-step-badge">02</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h4 className="process-card-title">UI/UX Design</h4>
              <p className="process-card-desc">Our design team creates high-fidelity wireframes and interactive prototypes in Figma, ensuring the user experience is intuitive and beautiful.</p>
            </div>

            {/* Step 3 */}
            <div className="process-card">
              <div className="process-icon-box">
                <span className="process-step-badge">03</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h4 className="process-card-title">Development (Sprints)</h4>
              <p className="process-card-desc">We build the product in agile 2-week sprints, giving you regular updates and staging links to test features as they are completed.</p>
            </div>

            {/* Step 4 */}
            <div className="process-card">
              <div className="process-icon-box">
                <span className="process-step-badge">04</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h4 className="process-card-title">Rigorous Testing</h4>
              <p className="process-card-desc">We conduct extensive QA, including automated unit tests, cross-browser compatibility checks, and load testing to ensure zero critical bugs.</p>
            </div>

            {/* Step 5 */}
            <div className="process-card">
              <div className="process-icon-box">
                <span className="process-step-badge">05</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <h4 className="process-card-title">Launch</h4>
              <p className="process-card-desc">We handle the entire deployment process, configuring servers on AWS or Google Cloud, setting up CI/CD pipelines, and flipping the switch to live.</p>
            </div>

            {/* Step 6 */}
            <div className="process-card">
              <div className="process-icon-box">
                <span className="process-step-badge">06</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                </svg>
              </div>
              <h4 className="process-card-title">Support & Scaling</h4>
              <p className="process-card-desc">Launch is just the beginning. We provide ongoing maintenance, performance monitoring, and iterative feature development to scale with your growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <FAQ bg="var(--white)" />

      {/* 8. Minimal CTA */}
      <MinimalCTA bg="var(--teal-dark)" />

    </div>
  );
}
