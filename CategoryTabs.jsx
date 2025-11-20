
import React from "react";
import { siteContent } from "../data";

const CategoryTabs = ({ activeCategoryId, onCategoryChange }) => {
  const { categories } = siteContent;

  return (
    <div className="category-tabs">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={
            "category-tab" +
            (cat.id === activeCategoryId ? " category-tab-active" : "")
          }
          onClick={() => onCategoryChange(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
