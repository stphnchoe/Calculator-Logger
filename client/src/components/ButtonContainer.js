import React from "react";
import CalculatorBtn from "./CalculatorBtn";

const ButtonContainer = ({
  onDigitPress,
  onPercentPress,
  onSignPress,
  onOperatorPress,
  onDecimalPress,
  onClearPress,
  onClearAllPress,
  onButtonPress,
}) => {
  return (
    <React.Fragment>
      <div className="columns is-mobile">
        <CalculatorBtn onButtonClick={onClearAllPress} val="C" />
        <CalculatorBtn onButtonClick={onSignPress} val="+/-" />
        <CalculatorBtn onButtonClick={onPercentPress} val="%" />
        <CalculatorBtn onButtonClick={onOperatorPress} val="/" />
      </div>
      <div className="columns is-mobile">
        <CalculatorBtn onButtonClick={onDigitPress} val="7" />
        <CalculatorBtn onButtonClick={onDigitPress} val="8" />
        <CalculatorBtn onButtonClick={onDigitPress} val="9" />
        <CalculatorBtn onButtonClick={onOperatorPress} val="*" />
      </div>
      <div className="columns is-mobile">
        <CalculatorBtn onButtonClick={onDigitPress} val="4" />
        <CalculatorBtn onButtonClick={onDigitPress} val="5" />
        <CalculatorBtn onButtonClick={onDigitPress} val="6" />
        <CalculatorBtn onButtonClick={onOperatorPress} val="-" />
      </div>
      <div className="columns is-mobile">
        <CalculatorBtn onButtonClick={onDigitPress} val="1" />
        <CalculatorBtn onButtonClick={onDigitPress} val="2" />
        <CalculatorBtn onButtonClick={onDigitPress} val="3" />
        <CalculatorBtn onButtonClick={onOperatorPress} val="+" />
      </div>
      <div className="columns is-mobile">
        <CalculatorBtn
          onButtonClick={onDigitPress}
          val="0"
          customStyle={"is-half"}
        />
        <CalculatorBtn onButtonClick={onDecimalPress} val="." />
        <CalculatorBtn onButtonClick={onOperatorPress} val="=" />
      </div>
    </React.Fragment>
  );
};

export default ButtonContainer;
