import React from "react";
import { useParams, Redirect } from "react-router-dom";

// TODO: add comments to every component!!!

function Color({ colors }) {
  const { paramColor } = useParams();
  console.log("colors", colors);

  let color, colorName;

  let filtered = colors.filter((c) => c.colorName === paramColor);
  if (filtered.length === 0) return <Redirect to="/colors" />;
  color = filtered[0].color;
  colorName = filtered[0].colorName;

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: color,
        color: "white",
      }}
    >
      {colorName}
    </div>
  );
}

export default Color;
