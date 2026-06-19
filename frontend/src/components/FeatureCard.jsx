import React from "react";

const FeatureCard = ({ title, body }) => {
  return (
    <div className="br-card">
      <div className="br-card-inner">
        <div className="br-card-content">
          <h4
            className="text-white font-bold italic uppercase mb-2 text-[15px] sm:text-[16px] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h4>
          <p
            className="text-white/95 italic text-[13px] sm:text-[14px] leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
