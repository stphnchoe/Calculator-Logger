import React, { Component } from "react";
import Display from "./Display";
import ButtonList from "./ButtonList";

class Calculator extends Component {
  state = {};

  render() {
    return (
      <section className="hero is-success is-fullheight">
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img
                    src="https://bulma.io/images/bulma-type-white.png"
                    alt="Logo"
                  />
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container">
            <Display />
            <ButtonList />
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
