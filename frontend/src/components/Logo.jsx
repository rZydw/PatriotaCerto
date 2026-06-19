import React from "react";

const Logo = () => {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: 120,
        height: 120,
      }}
    >
      {/* Dark diamond background */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background:
            "radial-gradient(ellipse at center, #1a1f3a 0%, #0c1024 70%, #05071a 100%)",
          clipPath:
            "polygon(50% 8%, 92% 50%, 50% 92%, 8% 50%)",
          boxShadow: "inset 0 0 20px rgba(255,255,255,0.08)",
        }}
      />
      {/* Silver inner diamond border */}
      <div
        className="absolute inset-3 pointer-events-none"
        style={{
          border: "1.5px solid rgba(220,225,235,0.55)",
          clipPath:
            "polygon(50% 8%, 92% 50%, 50% 92%, 8% 50%)",
        }}
      />
      {/* Brand text */}
      <div className="relative z-10 text-center">
        <div
          className="leading-none"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: 22,
            background:
              "linear-gradient(180deg, #ffffff 0%, #c8cdda 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 1px 0 rgba(0,0,0,0.4)",
          }}
        >
          O Patriota
        </div>
        <div
          className="mt-1 mx-auto"
          style={{
            width: 60,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(220,225,235,0.7), transparent)",
          }}
        />
      </div>
    </div>
  );
};

export default Logo;
