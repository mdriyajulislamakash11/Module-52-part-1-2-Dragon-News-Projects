import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const HeadLine = () => {
  return (
    <div>
      <div className="flex items-center mt-16 gap-4 bg-base-300">
        <p className="py-3 px-7 bg-red-500 text-white font-bold">Latest</p>
        <Marquee pauseOnHover={true}>
          <Link className="font-sembold text-xl">
            Lorem ipsum dolor sit amet consectetur., ipsum dolor sit amet
            consectetur adipisicing elit. Necessitatibus! etur adipisicing elit.
            Quaerat numquam odit aperiam.
          </Link>
          <Link className="font-sembold text-xl">
            Lorem ipsum dolor sit amet consectetur., ipsum dolor sit amet
            consectetur adipisicing elit. Necessitatibus! etur adipisicing elit.
            Quaerat numquam odit aperiam.
          </Link>
          <Link className="font-sembold text-xl">
            Lorem ipsum dolor sit amet consectetur., ipsum dolor sit amet
            consectetur adipisicing elit. Necessitatibus! etur adipisicing elit.
            Quaerat numquam odit aperiam.
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default HeadLine;
