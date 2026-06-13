export default function Brands() {
  const logos = ["MAILCHIMP", "MAZE", "SHOPIFY", "SLACK", "NETFLIX", "GOOGLE", "AMAZON", "SPOTIFY", "BASECAMP"];
  
  return (
    <div className="brands marquee-container">
      <div className="marquee-content">
        {/* Render twice for seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="brand-logos">
            <span>{logo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
