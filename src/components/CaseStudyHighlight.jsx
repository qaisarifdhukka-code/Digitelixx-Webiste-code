export default function CaseStudyHighlight() {
  return (
    <section className="case-study-section-wrapper">
      <div className="container">
        <div className="csh-header-left">
          <h2>Launch your career or scale your business</h2>
          <p>Explore our high-performance solutions and proven track record of digital growth.</p>
        </div>
        
        <div className="case-study-split-grid new-layout">
          
          {/* Left Box: Case Study (White) */}
          <div className="featured-case-box">
            <div className="fcb-content">
              <span className="fcb-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', verticalAlign: 'middle'}}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                FEATURED CASE STUDY
              </span>
              <h3>Scaling Stylehive India to <span style={{color: 'var(--orange)'}}>500% ROI</span></h3>
              <p>We completely overhauled Stylehive's eCommerce infrastructure, implementing advanced performance marketing and streamlining their conversion funnel to achieve unprecedented growth in just 6 months.</p>
              
              <ul className="check-list check-list-dark">
                <li>Comprehensive tech-stack audit and rebuild.</li>
                <li>Data-driven performance marketing campaigns.</li>
                <li>Enhanced UX/UI for seamless checkout experience.</li>
              </ul>
              
              <div className="revenue-chart">
                <div className="chart-header">
                  <span className="chart-title">Revenue Growth (6 Mo)</span>
                  <span className="chart-metric">1024%</span>
                </div>
                <div className="chart-bars">
                  <div className="bar bar-1"></div>
                  <div className="bar bar-2"></div>
                  <div className="bar bar-3"></div>
                  <div className="bar bar-4"></div>
                  <div className="bar bar-5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Box: Services (Orange) */}
          <div className="internship-box services-box">
            <h3>Our Services</h3>
            <p>Precision-engineered solutions for digital dominance.</p>
            
            <div className="services-pill-list">
              <div className="service-pill">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
                B2B SaaS
              </div>
              <div className="service-pill">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                eCommerce
              </div>
              <div className="service-pill">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 2 2 7 11 12 20 7 11 2"></polygon><polygon points="2 17 11 22 20 17"></polygon><polygon points="2 12 11 17 20 12"></polygon></svg>
                Performance Marketing
              </div>
              <div className="service-pill">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                Brand Identity
              </div>
            </div>
          </div>

        </div>
        
        {/* Buttons Row */}
        <div className="case-study-buttons-row">
          <a href="#" className="btn-action btn-dark">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            See Our Clients
          </a>
          <a href="#" className="btn-action btn-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            Read Full Case Study
          </a>
        </div>
        
      </div>
    </section>
  );
}
