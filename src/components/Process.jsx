export default function Process() {
  return (
    <div style={{ background: "var(--bg-alt)" }}>
      <section className="process-section container">
        <h2>Our Process</h2>
        <div className="process-grid">
          <div className="process-step">
            <div className="process-number">1</div>
            <h4>Discovery</h4>
            <p>Deep-dive into your business goals, target audience, and current challenges.</p>
          </div>
          <div className="process-step">
            <div className="process-number">2</div>
            <h4>Strategy</h4>
            <p>Architecting the roadmap, technical stack, and marketing approach.</p>
          </div>
          <div className="process-step">
            <div className="process-number">3</div>
            <h4>Execution</h4>
            <p>Building the software and launching the foundational campaigns.</p>
          </div>
          <div className="process-step">
            <div className="process-number">4</div>
            <h4>Launch</h4>
            <p>Going live with robust testing and quality assurance protocols.</p>
          </div>
          <div className="process-step">
            <div className="process-number">5</div>
            <h4>Scale</h4>
            <p>Analyzing metrics, optimizing conversion rates, and scaling the infrastructure.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
