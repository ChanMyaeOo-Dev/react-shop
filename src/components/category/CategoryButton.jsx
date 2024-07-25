import React from "react";

const CategoryButton = ({ categoryName, current }) => {
  return (
    <button
      className={`category_btn ${current ? "bg-slate-700 !text-white" : ""}`}
      key={categoryName}
    >
      {categoryName}
    </button>
  );
};

export default CategoryButton;
