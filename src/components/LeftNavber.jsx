import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavber = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);

  return (
    <div>
      <h2 className="text-xl font-semibold">
        All Category {categories.length}
      </h2>

      {categories.map((category) => (
        <NavLink
          className="btn flex flex-col w-full my-2"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftNavber;
