import React from "react";
import CategoryButton from "./CategoryButton";

const CategorySection = () => {
  let categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <div className="mb-6 ps-6">
      <p className="text-sm mb-2 text-slate-500">Product Categories</p>
      <div className="category_container flex gap-3 overflow-scroll">
        <CategoryButton categoryName="All" current={true} />
        {categories.map((categoryName) => (
          <CategoryButton
            key={categoryName}
            categoryName={categoryName}
            current={false}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
