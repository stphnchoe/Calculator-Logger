import React, { Component } from "react";
import { create, all } from "mathjs";
import Display from "./Display";
import ButtonContainer from "./ButtonContainer";
import CalculationsFeeds from "./CalculationsFeed";

const config = {};
const math = create(all, config);

class Calculator extends Component {
  state = {
    value: null,
    displayValue: "0",
    operator: null,
    waitingForOperand: false,
    result: 0,
    equation: "",
  };

  onButtonPress = event => {
    let equation = this.state.equation;
    const pressedButton = event.target.innerHTML;
    console.log(pressedButton);

    if (pressedButton === "C") return this.clear();
    else if (
      (pressedButton >= "0" && pressedButton <= "9") ||
      pressedButton === "."
    )
      equation += pressedButton;
    else if (["+", "-", "*", "/", "%"].indexOf(pressedButton) !== -1)
      equation += " " + pressedButton + " ";
    else if (pressedButton === "=") {
      try {
        const evalResult = math.evaluate(equation);
        const result = Number.isInteger(evalResult)
          ? evalResult
          : evalResult.toFixed(2);
        this.setState({ result });
      } catch (error) {
        alert("Invalid Mathematical Equation");
      }
    } else {
      equation = equation.trim();
      equation = equation.substr(0, equation.length - 1);
    }

    this.setState({ equation: equation });
  };

  onClearAllPress = () => {
    this.setState({
      value: null,
      displayValue: "0",
      operator: null,
      waitingForOperand: false,
    });
  };

  onClearPress = () => {
    this.setState({
      displayValue: "0",
    });
  };

  onSignPress = () => {
    const { displayValue } = this.state;
    const newValue = parseFloat(displayValue) * -1;

    this.setState({
      displayValue: String(newValue),
    });
  };

  onPercentPress = () => {
    const { displayValue } = this.state;
    const currentValue = parseFloat(displayValue);

    if (currentValue === 0) return;

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, "");
    const newValue = parseFloat(displayValue) / 100;

    this.setState({
      displayValue: String(newValue.toFixed(fixedDigits.length + 2)),
    });
  };

  onDecimalPress = () => {
    const { displayValue } = this.state;

    if (!/\./.test(displayValue)) {
      this.setState({
        displayValue: displayValue + ".",
        waitingForOperand: false,
      });
    }
  };

  onDigitPress = digit => {
    console.log(digit);
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false,
      });
    } else {
      this.setState({
        displayValue:
          displayValue === "0" ? String(digit) : displayValue + digit,
      });
    }
  };

  onOperatorPress = nextOperator => {
    const { value, displayValue, operator } = this.state;
    const inputValue = parseFloat(displayValue);
    const CalculatorOperations = {
      "/": (prevValue, nextValue) => prevValue / nextValue,
      "*": (prevValue, nextValue) => prevValue * nextValue,
      "+": (prevValue, nextValue) => prevValue + nextValue,
      "-": (prevValue, nextValue) => prevValue - nextValue,
      "=": (prevValue, nextValue) => nextValue,
    };

    if (value == null) {
      this.setState({
        value: inputValue,
      });
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = CalculatorOperations[operator](currentValue, inputValue);

      this.setState({
        value: newValue,
        displayValue: String(newValue),
      });
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator,
    });
  };

  render() {
    return (
      <section className="hero is-success is-fullheight">
        <div className="hero-head">
          <nav className="navbar">
            <div className="navbar-brand">
              <a className="navbar-item" href="#">
                <img src="https://d34uoa9py2cgca.cloudfront.net/sezzle-credit-website-assets/sezzle-logo-black-50.png" />
              </a>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <Display displayValue={this.state.displayValue} />
                <ButtonContainer
                  onDigitPress={this.onDigitPress}
                  onPercentPress={this.onPercentPress}
                  onSignPress={this.onSignPress}
                  onOperatorPress={this.onOperatorPress}
                  onDecimalPress={this.onDecimalPress}
                  onButtonPress={this.onButtonPress}
                  onClearPress={this.onClearPress}
                  onClearAllPress={this.onClearAllPress}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <CalculationsFeeds calculations={this.state.calculations} />
        </div>
      </section>
    );
  }
}

export default Calculator;
