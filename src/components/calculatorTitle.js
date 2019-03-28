import React from "react";

const titleStyles = { fontFamily: "Share Tech, sans-serif" };
const CalculatorTitle = props => {
  return (
    <div className="calculator-title">
      <h2 style={titleStyles}>{props.title}</h2>
    </div>
  );
};
export default CalculatorTitle;
