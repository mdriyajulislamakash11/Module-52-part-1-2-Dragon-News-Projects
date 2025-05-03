import React from "react";
import Header from "../pages/Header";
import HeadLine from "../components/HeadLine";
import Navber from "../components/Navber";
import LeftNavber from "../components/LeftNavber";
import { Outlet } from "react-router-dom";
import RigrhNavber from "../components/RigrhNavber";

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
      <div className="mt-16 md:grid grid-cols-12 gap-3">
        {/* Left Navbar */}
        <aside className="col-span-3">
          <LeftNavber />
        </aside>

        {/* News */}
        <div className="col-span-6">
          <Outlet />
        </div>

        {/* Right Navber */}
        <aside className="col-span-3">
          <RigrhNavber />
        </aside>
      </div>
    </div>
  );
};

export default Root;
