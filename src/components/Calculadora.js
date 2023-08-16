import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleButtonPress = (value) => {
    setInput(prevInput => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(0);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator mt-4">
      <input className="form-control mb-3" type="text" value={input} readOnly />
      <div className="grid-container">
        <button className="btn btn-outline-danger" onClick={handleClear}>C</button>
        <button className="btn btn-outline-secondary" onClick={() => handleButtonPress("(")}>(</button>
        <button className="btn btn-outline-secondary" onClick={() => handleButtonPress(")")}>)</button>
        <button className="btn btn-outline-secondary" onClick={() => handleButtonPress("/")}>/</button>
        <button className="btn btn-outline-primary" onClick={() => handleButtonPress("7")}>7</button>
        <button className="btn btn-outline-primary" onClick={() => handleButtonPress("8")}>8</button>
        <button className="btn btn-outline-primary" onClick={() => handleButtonPress("9")}>9</button>
        <button className="btn btn-outline-secondary" onClick={() => handleButtonPress("*")}>*</button>
        <button className="btn btn-outline-primary" onClick={() => handleButtonPress("4")}>4</button>
        <button className="btn btn-outline-primary" onClick={() => handleButtonPress("5")}>5</button>
        <button className="btn btn-outline-primary" onClick={() => handleButtonPress("6")}>6</button>
        <button className="btn btn-outline-secondary" onClick={() => handleButtonPress("-")}>-</button>
        <button className="btn btn-outline-primary" onClick={() => handleButtonPress("1")}>1</button>
        <button className="btn btn-outline-primary" onClick={() => handleButtonPress("2")}>2</button>
        <button className="btn btn-outline-primary" onClick={() => handleButtonPress("3")}>3</button>
        <button className="btn btn-outline-secondary" onClick={() => handleButtonPress("+")}>+</button>
        <button className="btn btn-outline-secondary" onClick={() => handleButtonPress("0")}>0</button>
        <button className="btn btn-outline-secondary" onClick={() => handleButtonPress(".")}>.</button>
        <button className="btn btn-outline-success" onClick={handleCalculate}>=</button>
      </div>
      <div className="result text-center mt-3">
        <p>Resultado: {result}</p>
      </div>
    </div>
  );
}

export default Calculator;
