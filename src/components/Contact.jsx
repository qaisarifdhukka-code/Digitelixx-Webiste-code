import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="container contact-grid">
        <div className="contact-info">
          <h2>Let's build something amazing together.</h2>
          <p>Whether you need a new website, a headless commerce solution, or a full-scale marketing campaign, our team is ready to help.</p>
          <ul>
            <li><strong>Email:</strong> info@digitelixx.com</li>
            <li><strong>Phone:</strong> +91 73047 59661</li>
            <li><strong>Location:</strong> Mumbai-400097, India</li>
          </ul>
        </div>
        <div className="contact-form-card">
          <ContactForm theme="dark" />
        </div>
      </div>
    </section>
  );
}
