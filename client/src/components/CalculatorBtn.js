import React from "react";

const CalculatorBtn = ({ onButtonClick, val, customStyle = "" }) => {
  return (
    <div
      onClick={() => onButtonClick(val)}
      className={`column has-text-centered ${customStyle}`}
    >
      <div class="box has-text-success">{val}</div>
    </div>
  );
};

export default CalculatorBtn;
