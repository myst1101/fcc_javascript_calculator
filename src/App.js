import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CalculatorTitle from "./components/calculatorTitle";
import ExpressionScreen from "./components/FormulaScreen";
import Output from "./components/Output";
import Button from "./components/button";
//const isOperator = /[*/+‑]/;
const endsWithOperator = /[*+-/]$/;
//const isNumber = /[0-9]/;
//const endsWithDec = /[.]$/;

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "0",
      previousValue: "",
      expression: ""
    };
    this.handleNumbers = this.handleNumbers.bind(this);
    this.evaluate = this.evaluate.bind(this);
    this.initialize = this.initialize.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  handleDecimal(e) {
    const { currentValue, expression } = this.state;
    if (currentValue === "0" && expression === "") {
      this.setState({
        currentValue: "0" + e.target.value,
        expression: "0" + e.target.value,
        previousValue: currentValue
      });
    } else if (!currentValue.includes(".")) {
      this.setState({
        currentValue: currentValue + e.target.value,
        expression: expression + e.target.value
      });
    }
  }

  handleOperators(e) {
    const { expression, currentValue } = this.state;
    this.setState({
      currentValue: e.target.value,
      expression: expression + e.target.value,
      previousValue: currentValue
    });
    if (endsWithOperator.test(expression)) {
      this.setState({
        currentValue: e.target.value,
        expression: expression.replace(
          expression[expression.length - 1],
          e.target.value
        )
      });
    } else if (this.state.evaluated && expression.includes("=")) {
      this.setState({
        expression: currentValue + e.target.value,
        currentValue: e.target.value
      });
    }
  }

  handleNumbers(e) {
    let { currentValue } = this.state;
    let { expression } = this.state;

    this.setState({
      currentValue:
        currentValue === "0" ? e.target.value : currentValue + e.target.value,
      expression: expression + e.target.value,
      previousValue: currentValue
    });
  }
  /*if (endsWithOperator.test(currentValue)) {
      this.setState({
        currentValue: e.target.value,
        previousValue: currentValue,
        expression: expression + e.target.value
      });
    }*/

  evaluate() {
    let { expression } = this.state;
    if (endsWithOperator.test(expression)) expression = expression.slice(0, -1);
    // eslint-disable-next-line
    let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
    this.setState({
      currentValue: answer.toString(),
      expression: expression + "=" + answer,
      previousValue: answer,
      evaluated: true
    });
  }
  toggle() {
    const { expression, currentValue } = this.state;
    if (expression[0] !== "-") {
      this.setState({
        expression: "-" + expression,
        currentValue: "-" + currentValue
      });
    } else {
      this.setState({
        expression: expression.slice(1),
        currentValue: currentValue.slice(1)
      });
    }
  }
  initialize() {
    this.setState({
      currentValue: "0",
      previousValue: "",
      expression: ""
    });
  }
  render() {
    const { currentValue, expression } = this.state;
    return (
      <div className="calculator">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <CalculatorTitle title="JavaScript Calculator" />
        </div>
        <div className="board">
          <div className="output">
            <ExpressionScreen expression={expression} />
            <Output currentValue={currentValue} />
            <Button
              handleNumbers={this.handleNumbers}
              handleDecimal={this.handleDecimal}
              handleOperators={this.handleOperators}
              evaluate={this.evaluate}
              initialize={this.initialize}
              toggle={this.toggle}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

//Regex
//Match 0 or more(>= 0) items
//-    /^\d*$(?=.)/.test('12')
//     /^[-+]?[0-9]+\.[0-9]+$/ : decimal number validation
//    /^(?:\d*\.\d{1,2}|\d+)$/
//     /^(?:\d*\.\d*|\d+)$/.test('0.144')

//    !currentValue.slice(currentValue.indexOf("+") + 1).includes(".")

/*this.setState({
currentValue: currentValue.match(/(-?\d+\.?\d*)$/)[0] + ".",
  expression: currentValue + "."
      });
      */

/*handleDecimal() {
if (this.state.evaluated === true) {
this.setState({
  currentVal: '0.',
  formula: '0.',
  evaluated: false });
} else if (!this.state.currentVal.includes('.') &&
!this.state.currentVal.includes('Limit')) {
this.setState({ evaluated: false });
if (this.state.currentVal.length > 21) {
  this.maxDigitWarning();
} else if (endsWithOperator.test(this.state.formula) ||
this.state.currentVal == '0' && this.state.formula === '') {
  this.setState({
    currentVal: '0.',
    formula: this.state.formula + '0.' });

} else {
  this.setState({
    currentVal: this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + '.',
    formula: this.state.formula + '.' });

}
}
}
*/
