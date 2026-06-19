"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar container">
        <Link href="/" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/Images/Digitelixx Logo.png" alt="Digitelixx" />
        </Link>
        
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="/careers" className={pathname === '/careers' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
          <div className="nav-dropdown">
            <span className={`nav-dropdown-trigger ${pathname.startsWith('/services') ? 'active' : ''}`}>Services</span>
            <div className="nav-dropdown-content">
              <Link href="/services/full-stack-development" className={pathname === '/services/full-stack-development' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Full Stack Dev</Link>
              <Link href="/services/digital-marketing" className={pathname === '/services/digital-marketing' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Digital Marketing</Link>
            </div>
          </div>
          <Link href="/contact" className="nav-btn mobile-only-btn" onClick={() => setIsMobileMenuOpen(false)}>Get started</Link>
        </div>

        <Link href="/contact" className="nav-btn desktop-only-btn">Get started</Link>
      </nav>
    </div>
  );
}
