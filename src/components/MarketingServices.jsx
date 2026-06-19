"use client";
import { useState } from "react";
import Link from "next/link";

const marketingServicesData = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="var(--orange-light)" />
        <circle cx="20" cy="20" r="6" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 25L32 32" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Dominate search results with technical SEO, high-authority link building, and content optimization. We build sustainable organic traffic pipelines that capture high-intent users exactly when they are searching for your solutions.",
    subItems: ["Technical SEO Audits", "Keyword Strategy", "On-Page Optimization", "Authority Link Building"],
    cta: "Get an SEO Audit"
  },
  {
    id: "ppc",
    title: "Performance Marketing (PPC)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="var(--orange-light)" />
        <path d="M12 28L20 20L26 26L36 16" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 16H36V22" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Maximize your Return on Ad Spend (ROAS) with data-backed campaigns across Google Ads, Meta, TikTok, and LinkedIn. We aggressively test creatives, audiences, and offers to scale your customer acquisition profitably.",
    subItems: ["Google Ads Management", "Meta & TikTok Ads", "LinkedIn B2B Lead Gen", "Retargeting Campaigns"],
    cta: "Scale Your Ads"
  },
  {
    id: "social",
    title: "Social Media Management",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="var(--orange-light)" />
        <path d="M16 22H20V34H26V22H30L32 16H26V13C26 11.8954 26.8954 11 28 11H32V5H28C23.5817 5 20 8.58172 20 13V16H16V22Z" fill="var(--orange)"/>
      </svg>
    ),
    description: "Build a loyal community and amplify your brand voice. We handle end-to-end social media strategy, from viral content creation and community management to influencer partnerships, ensuring your brand stays top-of-mind.",
    subItems: ["Content Strategy", "Community Management", "Influencer Outreach", "Analytics & Reporting"],
    cta: "Grow Your Following"
  },
  {
    id: "email",
    title: "Email & SMS Marketing",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="var(--orange-light)" />
        <path d="M10 14H38C39.1046 14 40 14.8954 40 16V32C40 33.1046 39.1046 34 38 34H10C8.89543 34 8 33.1046 8 32V16C8 14.8954 8.89543 14 10 14Z" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 16L24 25L8 16" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Turn your subscriber list into a predictable revenue engine. We design automated email flows and high-converting SMS campaigns that nurture leads, recover abandoned carts, and maximize customer lifetime value.",
    subItems: ["Automated Workflows", "Newsletter Campaigns", "SMS Marketing", "List Segmentation"],
    cta: "Automate Your Sales"
  },
  {
    id: "cro",
    title: "Conversion Rate Optimization",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="var(--orange-light)" />
        <path d="M24 10L14 26H24L24 38L34 22H24L24 10Z" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Traffic means nothing if it doesn't convert. We use heatmaps, user session recordings, and A/B testing to identify friction points on your website and engineer a frictionless user journey that skyrockets your conversion rates.",
    subItems: ["A/B & Multivariate Testing", "Landing Page Design", "User Behavior Analysis", "Checkout Optimization"],
    cta: "Improve Conversions"
  }
];

export default function MarketingServices({ bg = "var(--white)" }) {
  const [activeTab, setActiveTab] = useState(marketingServicesData[0].id);

  const activeContent = marketingServicesData.find(s => s.id === activeTab);

  return (
    <section className="service-tabs-section" style={{ backgroundColor: bg }}>
      <div className="container">
        <div className="service-tabs-header">
          <h2>Omnichannel Growth Strategies</h2>
          <p>We don't just run ads. We orchestrate comprehensive marketing ecosystems designed to capture market share and drive sustainable revenue.</p>
        </div>

        <div className="service-tabs-grid">
          {/* Sidebar Menu */}
          <div className="tabs-sidebar">
            {marketingServicesData.map((service) => (
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
                <Link href="#contact" className="btn-primary tab-cta">
                  {activeContent.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
