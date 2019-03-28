import React from "react";

const Button = props => {
  return (
    <div className="button-group">
      <button
        className="button acstyle"
        value="AC"
        onClick={props.initialize}
        id="clear"
      >
        AC
      </button>

      <button className="button toggle" value="+/-" onClick={props.toggle}>
        +/-
      </button>
      <button
        className="button divide"
        value="/"
        onClick={props.handleOperators}
        id="divide"
      >
        /
      </button>
      <button
        className="button"
        value="7"
        onClick={props.handleNumbers}
        id="seven"
      >
        7
      </button>
      <button
        className="button"
        value="8"
        onClick={props.handleNumbers}
        id="eight"
      >
        8
      </button>
      <button
        className="button"
        value="9"
        onClick={props.handleNumbers}
        id="nine"
      >
        9
      </button>
      <button
        className="button"
        value="*"
        onClick={props.handleOperators}
        id="multiply"
      >
        X
      </button>
      <button
        className="button"
        value="4"
        onClick={props.handleNumbers}
        id="four"
      >
        4
      </button>
      <button
        className="button"
        value="5"
        onClick={props.handleNumbers}
        id="five"
      >
        5
      </button>
      <button
        className="button"
        value="6"
        onClick={props.handleNumbers}
        id="six"
      >
        6
      </button>
      <button
        className="button"
        value="-"
        onClick={props.handleOperators}
        id="subtract"
      >
        -
      </button>
      <button
        className="button"
        value="1"
        onClick={props.handleNumbers}
        id="one"
      >
        1
      </button>
      <button
        className="button"
        value="2"
        onClick={props.handleNumbers}
        id="two"
      >
        2
      </button>
      <button
        className="button"
        value="3"
        onClick={props.handleNumbers}
        id="three"
      >
        3
      </button>
      <button
        className="button"
        value="+"
        onClick={props.handleOperators}
        id="add"
      >
        +
      </button>
      <button
        className="button zerostyle"
        value="0"
        onClick={props.handleNumbers}
        id="zero"
      >
        0
      </button>
      <button
        className="button"
        value="."
        onClick={props.handleDecimal}
        id="decimal"
      >
        .
      </button>
      <button
        className="button equals"
        value="="
        onClick={props.evaluate}
        id="equals"
      >
        =
      </button>
    </div>
  );
};
export default Button;

/*const ACButton = props => {
  return <button className="button acstyle">{props.label}</button>;
};

const ZeroButton = props => {
  return <button className="button zerostyle">{props.label}</button>;
};

const EqualsButton = props => {
  return <button className="button equals">{props.label}</button>;
};
export { Button, ACButton, ZeroButton, EqualsButton };*/
