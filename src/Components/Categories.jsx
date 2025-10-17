import React, { Suspense, use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);
  // console.log(categories);
  return (
    <div>
      <h2 className="font-bold text-xl">All Categoties {categories.length} </h2>
      <div className="grid grid-cols-1 mt-5 gap-3 ">
        {categories.map((category) => (
          <NavLink to={`/category/${category.id}`} key={category.id} className={"text-xl text-accent font-semibold btn border-0 bg-base-100 hover:bg-base-200"}>
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
