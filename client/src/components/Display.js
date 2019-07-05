import React from "react";

const Display = ({ displayValue }) => {
  return (
    <div className="box">
      <h1 className="title has-text-black has-text-right">{displayValue}</h1>
    </div>
  );
};

export default Display;
