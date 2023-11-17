import React from "react";

export const ColorCard = ({ code, font, name, data }) => {
  return (
    <>
      <div
        className="color-card"
        style={{ backgroundColor: code, color: font }}
      >
        <h2>{name}</h2>
        <p>{data}</p>
      </div>
      <hr />
    </>
  );
};
