export default function Contact() {
  return (
    <section className="contact-section">
      <div className="container contact-grid">
        <div className="contact-info">
          <h2>Let's build something amazing together.</h2>
          <p>Whether you need a new website, a headless commerce solution, or a full-scale marketing campaign, our team is ready to help.</p>
          <ul>
            <li><strong>Email:</strong> hello@digitelixx.com</li>
            <li><strong>Phone:</strong> +91 98765 43210</li>
            <li><strong>Location:</strong> Mumbai, India</li>
          </ul>
        </div>
        <div className="contact-form-card">
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label>Project Details</label>
              <textarea rows="4" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="button" className="btn-action">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
