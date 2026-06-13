export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar container">
        <a href="#" className="nav-logo">
          <img src="/Images/Digitelixx Logo.png" alt="Digitelixx" />
        </a>
        
        <div className="nav-pill">
          <a href="#" className="active">Home</a>
          <a href="#">About Us</a>
          <a href="#">Our work</a>
          <a href="#">Services</a>
        </div>

        <a href="#" className="nav-btn">Get started</a>
      </nav>
    </div>
  );
}
