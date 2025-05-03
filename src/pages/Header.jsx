import React from "react";
import banner from "../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="mt-16">
      {/* header image */}
      <div className="flex justify-center">
        <img className="md:w-[600px]" src={banner} alt="" />
      </div>

      {/* slogan */}
      <p className="text-center text-gray-400 text-2xl my-4">Journalism Without Fear or Favour</p>

      {/* date time */}
      <p className="text-center text-gray-600 text-2xl my-4">{moment().format('LLLL')}</p>
    </div>
  );
};

export default Header;
