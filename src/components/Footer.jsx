export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img src="/Images/Digitelixx Logo.png" alt="Digitelixx" className="footer-logo" />
            <p className="footer-about">We offer a comprehensive suite of digital services that cover all aspects of a brand's growth. From scoping and design to building and final deployment, we have the expertise to transform your vision into reality.</p>
            <div className="social-links">
              <a href="#">in</a>
              <a href="#">tw</a>
              <a href="#">fb</a>
              <a href="#">ig</a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/services/full-stack-development">Full Stack Dev</a></li>
              <li><a href="/services/digital-marketing">Digital Marketing</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="contact-item">
              <a href="mailto:info@digitelixx.com" style={{color: "inherit", textDecoration: "none"}}>info@digitelixx.com</a>
            </div>
            <div className="contact-item" style={{ lineHeight: "1.5" }}>
              1601, Magic Square, Near Dhukka Chambers,<br/>
              Off. Poddar Road, Malad(E), Mumbai-400097
            </div>
            <div className="contact-item">
              <a href="tel:+917304759661" style={{color: "inherit", textDecoration: "none"}}>+91 73047 59661</a>
            </div>
            <div className="contact-item" style={{ marginTop: "16px" }}>
              <a href="/contact" className="btn-action" style={{ fontSize: "0.9rem", padding: "8px 0" }}>Work with us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
