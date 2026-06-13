"use client";
import { useState } from "react";

const faqData = [
  {
    question: "What exactly counts as a successful campaign?",
    answer: "A tailored strategy with core metrics agreed upfront. Scope is defined and frozen before we begin execution to ensure alignment."
  },
  {
    question: "What if I change requirements mid-way?",
    answer: "We accommodate changes using agile methodology, though significant scope shifts may adjust the timeline or cost accordingly."
  },
  {
    question: "Do I own the code and assets?",
    answer: "Yes. Upon full payment, all intellectual property, source code, and design assets are 100% transferred to you."
  },
  {
    question: "What tech stack do you use?",
    answer: "We primarily build scalable web applications using React, Next.js, Node.js, and modern CSS frameworks, tailored to your specific needs."
  },
  {
    question: "Is the pricing really transparent?",
    answer: "Absolutely. We provide clear, itemized quotes before any work begins, with no hidden fees or surprise charges."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container faq-grid">
        <div className="faq-left">
          <h2>Agency FAQs</h2>
          <p>As a specialized development & marketing studio, we are dedicated to delivering functional solutions efficiently and providing a transparent, risk-free process to help our clients succeed.</p>
          <div className="faq-actions">
            <a href="#" className="btn-outline">More Questions</a>
            <a href="#" className="link-underline">Contact Us</a>
          </div>
        </div>
        <div className="faq-right">
          {faqData.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index} className={`faq-item ${isActive ? "active" : ""}`}>
                <div 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="faq-icon" style={{ color: "var(--orange)" }}>{isActive ? "-" : "+"}</span>
                </div>
                {isActive && (
                  <div className="faq-answer" style={{ display: "block", paddingTop: "12px", color: "var(--text-muted)" }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
