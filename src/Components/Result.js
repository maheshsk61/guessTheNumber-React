import React from "react";

function Result(props) {
  let result;
  let error;
  let convertInputToNum;
  if (props.inputNumber) {
    convertInputToNum = Number(props.inputNumber);
    if (convertInputToNum < props.secretNumber) {
      result = "Lowest";
    } else if (convertInputToNum > props.secretNumber) {
      result = "Highest";
    } else if (convertInputToNum === props.secretNumber) {
      result = "Correct!";
    } else {
      error = true;
    }
  }
  return (
    <div className="Result p-3">
      <h4>
        {result
          ? `You Guessed - ${result} Number`
          : error && "Please Enter Numbers only"}
      </h4>
    </div>
  );
}

export default Result;
