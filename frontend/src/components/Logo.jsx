import React from "react";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_mobile-design-16/artifacts/j8wjd2na_68c6b13d-0ad1-474f-9ae5-f47078233520.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={LOGO_URL}
        alt="O Patriota"
        className="block"
        style={{
          width: 240,
          height: 120,
          objectFit: "contain",
          objectPosition: "center",
        }}
        loading="eager"
      />
    </div>
  );
};

export default Logo;
