import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (/^[0-9+\-*/().]*$/.test(value)) {
      setInput(value);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setInput("");
    setResult(0);
  };

  return (
    <CalculatorUI
      input={input}
      result={result}
      handleClick={handleClick}
      handleChange={handleChange}
      calculate={calculate}
      clear={clear}
    />
  );
}

function CalculatorUI({
  input,
  result,
  handleClick,
  handleChange,
  calculate,
  clear,
}) {
  const renderButtons = () => {
    const buttons = [];
    const buttonValues = [
      "C",
      "(",
      ")",
      "/",
      "7",
      "8",
      "9",
      "*",
      "4",
      "5",
      "6",
      "-",
      "3",
      "2",
      "1",
      "+",
      "0",
      "=",
    ];

    buttonValues.forEach((value, index) => {
      if (value === "C") {
        buttons.push(
          <button key={value} onClick={clear}>
            {value}
          </button>
        );
      } else if (value === "=") {
        buttons.push(
          <button key={value} onClick={calculate}>
            {value}
          </button>
        );
      } else {
        buttons.push(
          <button key={value} onClick={() => handleClick(value)}>
            {value}
          </button>
        );
      }

      // 줄바꿈 추가
      if ((index + 1) % 4 === 0) {
        buttons.push(<br />);
      }
    });

    return buttons;
  };

  return (
    <div>
      <h1>계산기</h1>
      <h2>계산 결과: {result}</h2>
      <div>
        <input type="text" value={input} onChange={handleChange} />
        <div>{renderButtons()}</div>
      </div>
    </div>
  );
}

export default Calculator;
