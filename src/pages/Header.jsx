import React from "react";
import banner from "../assets/logo.png";

const Header = () => {
  return (
    <div className="mt-16">
      {/* header image */}
      <div className="flex justify-center">
        <img src={banner} alt="" />
      </div>

      {/* slogan */}
      <p className="text-center"></p>

      {/* date time */}
      <p className="text-center"></p>
    </div>
  );
};

export default Header;
