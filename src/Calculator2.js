import React, { useState } from "react";

function Calculate() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  function handleClick(value) {
    setInput(input + value);
  }

  function clear() {
    setInput("");
    setResult(0);
  }

  function calculate() {
    setResult(eval(input));
  }

  function handleChange(event) {
    const value = event.target.value;
    if (/^[0-9+\-*/().]*$/.test(value)) {
      setInput(value);
    }
  }

  const renderButtons = () => {
    const buttons = [];
    const buttonValues = [
      "C",
      "(",
      ")",
      "+",
      "1",
      "2",
      "3",
      "-",
      "4",
      "5",
      "6",
      "*",
      "7",
      "8",
      "9",
      "/",
      "0",
      "calculate",
    ];

    buttonValues.forEach((value, index) => {
      if (value === "C") {
        buttons.push(
          <button key={value} onClick={clear}>
            {value}
          </button>
        );
      } else if (value === "calculate") {
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
      if ((index + 1) % 4 === 0) {
        buttons.push(<br />);
      }
    });

    return buttons;
  };

  return (
    <div>
      <h1>계산기</h1>
      <div>{renderButtons()}</div>
      <div>
        <input type="text" value={input} onChange={handleChange} />
      </div>
      <h2>결과: {result}</h2>
    </div>
  );
}

export default Calculate;
