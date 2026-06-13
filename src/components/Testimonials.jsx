"use client";
import { useEffect, useRef } from "react";

export default function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

        // If we are at the last item, scroll back to the first
        if (scrollTop + clientHeight >= scrollHeight - 10) {
          scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          // Otherwise scroll down to the next item
          scrollRef.current.scrollBy({ top: clientHeight, behavior: "smooth" });
        }
      }
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text: "Digitelixx transformed our online presence. Our traffic doubled in just 3 months, and the new web app they built is flawless.",
      name: "Sarah Jenkins",
      role: "CEO at Nexus"
    },
    {
      text: "The most transparent agency we've ever worked with. They mapped out the entire software architecture and delivered 2 weeks early.",
      name: "David Chen",
      role: "Founder of Stylehive"
    },
    {
      text: "Their marketing team is unmatched. We saw a 500% ROI on our paid campaigns within the first quarter. Highly recommended!",
      name: "Priya Sharma",
      role: "CMO at Nourishco"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container testimonials-split">
        <div className="testimonials-left">
          <h2>What our clients say</h2>
          <p className="testimonials-sub">We've partnered with ambitious startups and global enterprises to build scalable web apps.</p>
          <div className="client-metrics">
            <div className="metric">
              <span className="metric-number">98%</span>
              <span className="metric-label">Client Retention</span>
            </div>
            <div className="metric">
              <span className="metric-number">120+</span>
              <span className="metric-label">Projects Delivered</span>
            </div>
          </div>
        </div>
        <div className="testimonials-right" ref={scrollRef}>
          {testimonials.map((t, i) => (
            <div className="testimonial-row" key={i}>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author-block">
                <h5>{t.name}</h5>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
