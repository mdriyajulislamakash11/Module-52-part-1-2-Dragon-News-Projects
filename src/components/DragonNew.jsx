import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const DragonNew = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("../categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);

  return (
    <div className="grid grid-cols-12 gap-4">
      {/* category button */}
      <div className="col-span-3">
        <h2 className="text-xl font-medium">All Category: {categories.length}</h2>
        {categories.map((category) => (
          <button className="btn text-center w-full my-2" key={category.id}>
            {" "}
            <NavLink>{category.name}</NavLink>
          </button>
        ))}
      </div>

      {/* news */}
      <div  className="col-span-6 ">
        <h2 className="text-xl font-medium">Dragon News Home</h2>


      </div>

      {/* social */}
      <div  className="col-span-3">
      <h2 className="text-xl font-bold">LogIn With</h2>

      </div>
    </div>
  );
};

export default DragonNew;
