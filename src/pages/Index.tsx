import React from "react";

export default function Index() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #7b2ff7, #9f44f8, #c471ed)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        color: "white",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      {/* HERO TITLE */}
      <h1
        style={{
          fontSize: "64px",
          fontWeight: "bold",
          marginBottom: "20px",
          textShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        Demo OS
      </h1>

      {/* SUBTEXT */}
      <p
        style={{
          fontSize: "22px",
          maxWidth: "650px",
          lineHeight: "1.6",
          opacity: 0.95,
        }}
      >
        A next‑generation AI experience designed for creativity, speed, and simplicity.
        Built to feel alive, responsive, and beautifully futuristic.
      </p>

      {/* CTA BUTTON */}
      <button
        style={{
          marginTop: "50px",
          padding: "16px 32px",
          fontSize: "20px",
          borderRadius: "12px",
          backgroundColor: "white",
          color: "#5a2be7",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Get Started
      </button>
    </div>
  );
}
