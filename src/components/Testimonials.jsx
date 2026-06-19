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
      text: "Digitelixx built our online presence from the ground up. Their work helped us grow our digital sales incredibly fast.",
      name: "Hami Basan",
      role: "Planet Muscle"
    },
    {
      text: "The team at Digitelixx delivered a flawless website and ran campaigns that significantly increased our leads. We are thrilled with the results.",
      name: "Vijay Chauhan",
      role: "Magic Group"
    },
    {
      text: "Exceptional service and an extremely transparent process. Our brand's visibility skyrocketed after partnering with them.",
      name: "Zahir",
      role: "Faceman"
    },
    {
      text: "They don't just build websites; they build scalable systems. Digitelixx is the only agency we trust with our digital ecosystem.",
      name: "Asif",
      role: "Naaz"
    },
    {
      text: "Fast execution, zero bloated code, and real results. Our web application was launched on time and runs perfectly.",
      name: "Altaf",
      role: "Cashmitra"
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
