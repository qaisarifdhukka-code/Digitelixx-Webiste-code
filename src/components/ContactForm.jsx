"use client";

import { useState, useRef, useEffect } from "react";

export default function ContactForm({ theme = "light" }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [budget, setBudget] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isDark = theme === "dark";
  const textColor = isDark ? "var(--white)" : "var(--teal-dark)";
  const borderColor = isDark ? "rgba(255, 255, 255, 0.2)" : "var(--border)";
  const mutedColor = isDark ? "rgba(255, 255, 255, 0.6)" : "var(--text-muted)";
  const placeholderColor = isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0,0,0,0.4)";
  const dropdownBg = isDark ? "var(--teal)" : "var(--white)";
  const dropdownHoverBg = isDark ? "var(--teal-dark)" : "var(--bg-alt)";

  const budgetOptions = [
    "Less than $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+"
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (formData.get("_honey")) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/b8f49a6b652c37725bf774b21448cdf7", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ padding: "40px 0", textAlign: "center" }}>
        <div style={{ width: "64px", height: "64px", backgroundColor: "var(--orange)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px auto" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--white)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 style={{ fontSize: "1.5rem", color: textColor, marginBottom: "16px", fontWeight: "700" }}>Request Received</h3>
        <p style={{ color: mutedColor, lineHeight: "1.6" }}>
          Thank you for reaching out. A growth strategist will review your information and contact you within 24 hours.
        </p>
      </div>
    );
  }

  const inputStyle = {
    width: "100%",
    padding: "12px 0",
    background: "transparent",
    border: "none",
    borderBottom: `2px solid ${borderColor}`,
    borderRadius: "0",
    fontFamily: "inherit",
    fontSize: "1.1rem",
    color: textColor,
    outline: "none",
    transition: "border-color 0.3s ease"
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontWeight: "600",
    color: mutedColor,
    textTransform: "uppercase",
    fontSize: "0.8rem",
    letterSpacing: "0.05em"
  };

  return (
    <div style={{ padding: "20px 0" }}>
      <form onSubmit={handleSubmit} style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "32px",
        "--autofill-bg": isDark ? "var(--teal-dark)" : "var(--bg)",
        "--autofill-color": isDark ? "var(--white)" : "var(--teal-dark)"
      }}>
        
        <input type="text" name="_honey" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          <div>
            <label style={labelStyle}>Full Name</label>
            <input type="text" name="name" required style={inputStyle} onFocus={(e) => e.target.style.borderBottomColor="var(--orange)"} onBlur={(e) => e.target.style.borderBottomColor=borderColor} placeholder="John Doe" />
          </div>
          
          <div>
            <label style={labelStyle}>Work Email</label>
            <input type="email" name="email" required style={inputStyle} onFocus={(e) => e.target.style.borderBottomColor="var(--orange)"} onBlur={(e) => e.target.style.borderBottomColor=borderColor} placeholder="john@example.com" />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Company Website</label>
          <input type="url" name="website" style={inputStyle} onFocus={(e) => e.target.style.borderBottomColor="var(--orange)"} onBlur={(e) => e.target.style.borderBottomColor=borderColor} placeholder="https://" />
        </div>

        <div ref={dropdownRef} style={{ position: "relative" }}>
          <label style={labelStyle}>Monthly Marketing Budget</label>
          <div 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{ 
              ...inputStyle, 
              cursor: "pointer", 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              borderBottomColor: isDropdownOpen ? "var(--orange)" : borderColor,
              color: budget ? textColor : placeholderColor
            }}
          >
            {budget || "Select a range..."}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={textColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          
          {isDropdownOpen && (
            <div style={{ position: "absolute", top: "100%", left: 0, right: 0, backgroundColor: dropdownBg, border: `1px solid ${borderColor}`, borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", marginTop: "8px", zIndex: 10, overflow: "hidden" }}>
              {budgetOptions.map((opt) => (
                <div 
                  key={opt}
                  onClick={() => { setBudget(opt); setIsDropdownOpen(false); }}
                  onMouseEnter={(e) => e.target.style.backgroundColor=dropdownHoverBg}
                  onMouseLeave={(e) => e.target.style.backgroundColor="transparent"}
                  style={{ padding: "14px 16px", cursor: "pointer", fontSize: "1.05rem", color: textColor, transition: "background-color 0.2s" }}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
          <input type="hidden" name="budget" value={budget} required />
        </div>

        <div>
          <label style={labelStyle}>Project Details</label>
          <textarea name="details" required rows="4" placeholder="How can we help you scale?" style={{ ...inputStyle, resize: "vertical" }} onFocus={(e) => e.target.style.borderBottomColor="var(--orange)"} onBlur={(e) => e.target.style.borderBottomColor=borderColor}></textarea>
        </div>

        <div>
          <button type="submit" disabled={isSubmitting} className="btn-action" style={{ background: "var(--orange)", color: "var(--white)", padding: "16px 40px", fontSize: "1.1rem", borderRadius: "50px", fontWeight: "600", border: "none", cursor: isSubmitting ? "not-allowed" : "pointer", transition: "all 0.3s ease", width: "auto", opacity: isSubmitting ? 0.7 : 1 }}>
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
        </div>

      </form>
    </div>
  );
}
