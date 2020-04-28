import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

function ColorList({ colors }) {
  console.log(colors);
  return (
    <ul>
      {colors.map((color) => (
        <Link
          key={color.id}
          to={`colors/${color.colorName}`}
          style={{ color: color.color }}
        >
          <li>{color.colorName}</li>
        </Link>
      ))}
    </ul>
  );
}

export default ColorList;
