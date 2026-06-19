"use client";
import { useState } from "react";
import Link from "next/link";

const servicesData = [
  {
    id: "website",
    title: "Website UI/UX",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="var(--orange-light)" />
        <path d="M18 16L10 24L18 32M30 16L38 24L30 32" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "High-performance marketing websites built on modern frameworks like Next.js and React. Optimized for speed, SEO, and conversions. We design and build websites that help businesses operate smarter, load instantly, and grow faster.",
    subItems: ["Custom Web Design", "Next.js / React Development", "CMS Integration", "SEO Optimization"],
    cta: "Schedule A Call"
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="var(--orange-light)" />
        <rect x="16" y="10" width="16" height="28" rx="3" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 32H24.01" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Native-feel cross-platform mobile applications using Flutter and React Native, delivering a seamless experience on both iOS and Android. Every application is engineered to solve real business challenges, enhance user engagement, and deliver measurable outcomes.",
    subItems: ["iOS App Development", "Android App Development", "Flutter / React Native", "App Store Deployment"],
    cta: "Schedule A Call"
  },
  {
    id: "webapp",
    title: "Web App Development",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="var(--orange-light)" />
        <rect x="12" y="14" width="24" height="20" rx="2" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 20H36M20 34V38M28 34V38M16 38H32" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "We develop mission-critical custom web applications, dashboards, CRMs, and internal tools built from scratch to solve your unique business challenges. Our web solutions are designed to handle intensive workflows, high data volumes, and deep system integrations.",
    subItems: ["Custom Dashboards", "SaaS Platforms", "CRM Systems", "Admin Panels"],
    cta: "Schedule A Call"
  },
  {
    id: "automation",
    title: "Business Automation",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="var(--orange-light)" />
        <path d="M24 10L14 26H24L24 38L34 22H24L24 10Z" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Streamline your operations by connecting disjointed systems. We build robust APIs and workflow automations to save you hundreds of hours. We reduce complexity and improve efficiency to drive measurable business growth.",
    subItems: ["API Development", "Workflow Automation", "Zapier / Make Integration", "Legacy System Sync"],
    cta: "Schedule A Call"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="var(--orange-light)" />
        <path d="M12 16H36L33 30H15L12 16Z" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 34C19 35.1046 18.1046 36 17 36C15.8954 36 15 35.1046 15 34C15 32.8954 15.8954 32 17 32C18.1046 32 19 32.8954 19 34Z" fill="var(--orange)"/>
        <path d="M33 34C33 35.1046 32.1046 36 31 36C29.8954 36 29 35.1046 29 34C29 32.8954 29.8954 32 31 32C32.1046 32 33 32.8954 33 34Z" fill="var(--orange)"/>
        <path d="M12 16L10 10H6" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Scalable online stores built on headless architecture or customized Shopify platforms, designed to maximize your online sales revenue. From product discovery to seamless checkout, we engineer e-commerce experiences that convert.",
    subItems: ["Shopify Customization", "Headless Commerce", "Payment Gateway Integration", "Inventory Management"],
    cta: "Schedule A Call"
  }
];

export default function ServiceTabs({ bg = "transparent" }) {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);

  const activeContent = servicesData.find(s => s.id === activeTab);

  return (
    <section className="service-tabs-section" style={{ backgroundColor: bg }}>
      <div className="container">
        <div className="service-tabs-header">
          <h2>Full-Stack Development Services</h2>
          <p>We deliver scalable, secure, and performance-driven software solutions engineered to modern business needs.</p>
        </div>

        <div className="service-tabs-grid">
          {/* Sidebar Menu */}
          <div className="tabs-sidebar">
            {servicesData.map((service) => (
              <button
                key={service.id}
                className={`tab-btn ${activeTab === service.id ? "active" : ""}`}
                onClick={() => setActiveTab(service.id)}
              >
                <span className="tab-indicator">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
                {service.title}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="tab-content-area" key={activeTab}>
            <div className="tab-content-icon">
              {activeContent.icon}
            </div>
            
            <h3 className="tab-content-title">{activeContent.title}</h3>
            
            <p className="tab-content-desc">
              {activeContent.description}
            </p>

            <div className="tab-bottom-section">
              <div className="tab-subitems-grid">
                {activeContent.subItems.map((item, idx) => (
                  <div key={idx} className="tab-subitem">
                    <div className="subitem-bullet">
                      <div className="subitem-bullet-inner"></div>
                    </div>
                    <span>{item}</span>
                    <svg className="subitem-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                ))}
              </div>

              <div className="tab-cta-wrapper">
                <a href="https://wa.me/917304759661?text=Hi%20Digitelixx,%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="btn-primary tab-cta">
                  {activeContent.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
