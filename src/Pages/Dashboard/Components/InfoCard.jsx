import React from "react";

export default function InfoCard({ card_name, amount, color, image, bgColor }) {
  return (
    <div
      className="info-card"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "25px",
        gap: "10px",
        borderRadius: "10px",
        background: bgColor || "linear-gradient(135deg, #1E1E1E, #292929)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      }}
    >
      {/* Left Content */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p style={{ color: "#bbb", fontSize: "1.5rem", margin: "0 0 5px 0" }}>
          {card_name}
        </p>
        <p
          style={{
            color: color,
            fontSize: "20px",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          ${amount}
        </p>
      </div>

      {/* Right Icon */}
      <img
        src={image}
        alt={card_name}
        width={50}
        height={50}
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
    </div>
  );
}
