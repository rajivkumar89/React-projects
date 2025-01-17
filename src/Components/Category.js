import React from "react";

export default function Category({ finalCategory, setCatName }) {
  // Ensure finalCategory is an array before trying to map it
  let cat = finalCategory.map((category, i) => {
    return (
      <li onClick={() => setCatName(category.name)} key={i}> {/* Use category.name instead of category */}
        {category.name} {/* Assuming each category has a 'name' field */}
      </li>
    );
  });

  return (
    <>
      <h2>Product Category</h2>
      <ul>{cat}</ul>
    </>
  );
}
