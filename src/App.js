import React, { useEffect, useState } from "react";
import "./App.css";
import Result from "./Components/Result";
function App() {
  const [input, setInput] = useState("");
  const [secretNum, setSecretNum] = useState(generateRandomNumbers);
  function generateRandomNumbers() {
    return Math.floor(Math.random() * 10) + 1;
  }
  useEffect(() => {
    setSecretNum(generateRandomNumbers());
  }, []);
  function handleInput(e) {
    setInput(e.target.value);
  }
  return (
    <div className="container col-xs-12">
      <label className="fs-5 p-3" htmlFor="input">
        <h1>Guess the Numbers between 1 to 10</h1>
      </label>
      <input
        type="text"
        placeholder="Enter a number"
        name="input"
        className="p-3"
        onChange={handleInput}
      />
      <Result inputNumber={input} secretNumber={secretNum} />
    </div>
  );
}
export default App;
