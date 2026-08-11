import React from "react";

export default function Index() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
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
          fontSize: "56px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Welcome to Demo OS
      </h1>

      {/* SUBTEXT */}
      <p
        style={{
          fontSize: "20px",
          maxWidth: "600px",
          lineHeight: "1.6",
          opacity: 0.9,
        }}
      >
        A modern AI‑powered experience built for speed, simplicity, and creativity.
      </p>

      {/* CTA BUTTON */}
      <button
        style={{
          marginTop: "40px",
          padding: "14px 28px",
          fontSize: "18px",
          borderRadius: "10px",
          backgroundColor: "white",
          color: "#333",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Get Started
      </button>
    </div>
  );
}
