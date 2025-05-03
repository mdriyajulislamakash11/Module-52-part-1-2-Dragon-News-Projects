import React from "react";
import Header from "../pages/Header";
import HeadLine from "../components/HeadLine";
import Navber from "../components/Navber";
import DragonNew from "../components/DragonNew";

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
      <DragonNew />

    </div>
  );
};

export default Root;
