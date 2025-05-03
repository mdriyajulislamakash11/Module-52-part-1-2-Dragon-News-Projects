import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const RigrhNavber = () => {
  return (
    <div className="">
      <h2 className="font-bold text-xl">LogIn With</h2>

      <div className="flex flex-col mt-6">
        <button className="btn border-2 border-blue-400 py-2 my-2">
          <FaFacebook /> Login With Google
        </button>
        <button className="btn border-2 border-blue-400 py-2">
          {" "}
          <FaGithub /> LogIn With GitHub
        </button>
      </div>



      {/* find us */}
      <h2 className="font-bold text-xl mt-11 ">Find Us On</h2>
      <div className="flex flex-col border mt-10 ">  
            <p className="flex items-center gap-2 text-xl py-4 pl-4  mx-4"> <FaFacebook /> Facebook</p>
            <p className="flex items-center gap-2 text-xl py-4 pl-4  mx-4"> <FaTwitter /> Twitter</p>
            <p className="flex items-center gap-2 text-xl py-4 pl-4  mx-4"> <FaInstagram /> Instagram</p>

      </div>
    </div>
  );
};

export default RigrhNavber;
