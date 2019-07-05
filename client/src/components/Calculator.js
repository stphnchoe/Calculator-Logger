import React, { Component } from "react";
import Display from "./Display";
import ButtonList from "./ButtonList";

class Calculator extends Component {
  state = {};

  render() {
    return (
      <div>
        Calculator
        <Display />
        <ButtonList />
      </div>
    );
  }
}

export default Calculator;
