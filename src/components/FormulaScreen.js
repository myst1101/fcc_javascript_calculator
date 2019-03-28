import React from "react";

const ExpressionScreen = props => {
  return (
    <div className="formulaScreen" value={props.expression}>
      {props.expression}
    </div>
  );
};

export default ExpressionScreen;
