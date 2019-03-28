import React from "react";

const Output = props => {
  return (
    <div className="outputScreen" value={props.currentValue} id="display">
      {props.currentValue}
    </div>
  );
};

export default Output;
