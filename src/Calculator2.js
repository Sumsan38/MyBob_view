import React, { useState } from "react";

function calculate() {
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
        buttons.push(<button key={value}>{value}</button>);
      } else if (value === "calculate") {
        buttons.push(<button key={value}>{value}</button>);
      } else {
        buttons.push(<button key={value}>{value}</button>);
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
      <h2>결과: </h2>
    </div>
  );
}

export default calculate;
