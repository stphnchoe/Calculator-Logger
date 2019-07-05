import React from "react";
import CalculatorButton from "./CalculatorButton";

const ButtonList = () => {
  return (
    <div>
      <div>
        <div className="columns">
          Buttons
          <div className="column">
            <CalculatorButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonList;
