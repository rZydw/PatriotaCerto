import React from "react";
import { Star } from "lucide-react";

const Testimonial = ({ name, avatar, stars = 5, text }) => {
  return (
    <div className="flex items-stretch gap-3">
      {/* Avatar */}
      <div className="flex-shrink-0 self-center">
        <div
          className="rounded-full overflow-hidden border-2 border-white/30"
          style={{ width: 70, height: 70 }}
        >
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      {/* Pill */}
      <div className="testimonial-border flex-1">
        <div className="testimonial-content">
          <div className="text-center">
            <div
              className="text-white text-[18px] leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
              }}
            >
              {name}
            </div>
            <div className="flex justify-center gap-0.5 mt-1 mb-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < stars ? "star-yellow" : "text-white/20"
                  }`}
                  strokeWidth={1}
                />
              ))}
            </div>
            <div className="text-white text-[12px] sm:text-[12.5px] leading-snug px-2">
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
