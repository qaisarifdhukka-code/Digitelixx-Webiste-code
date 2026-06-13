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
              <li><a href="#">Service</a></li>
              <li><a href="#">Agency</a></li>
              <li><a href="#">Case Study</a></li>
              <li><a href="#">Resource</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Licence</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Copyright</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="contact-item">
              (406) 555-0120
            </div>
            <div className="contact-item">
              hello@digitelixx.com
            </div>
            <div className="contact-item">
              Mumbai, Maharashtra, India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
