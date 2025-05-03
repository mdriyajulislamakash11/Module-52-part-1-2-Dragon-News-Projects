import React from "react";
import Header from "../pages/Header";
import HeadLine from "../components/HeadLine";
import Navber from "../components/Navber";
import LeftNavber from "../components/LeftNavber";

const Root = () => {
  return (
    <div className="w-10/12 mx-auto">
      {/* Header */}
      <Header />

      {/* HeadLine */}
      <HeadLine />

      {/* Navbar */}
      <Navber />

      {/* Manin News Section */}
      <div>
        {/* Left Navbar */}
        <aside>
          <LeftNavber />
        </aside>

        {/* News */}
        <div></div>

        {/* Right Navber */}
        <aside>

        </aside>

      </div>

    </div>
  );
};

export default Root;
