import React, { useState } from "react";

const TodoFunction = () => {
  const [todoAraay, setTodoArray] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodoArray([...todoAraay, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    // const newTotoArray = todoAraay.filter((todo, i) => i !== index);
    // setTodoArray(newTotoArray);
    const newTotoArray = [...todoAraay];
    newTotoArray.splice(index, 1);
    setTodoArray(newTotoArray);
  };

  const changeInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <TodoView
      input={input}
      todoAraay={todoAraay}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      changeInput={changeInput}
    />
  );
};

const TodoView = ({ input, todoAraay, addTodo, deleteTodo, changeInput }) => {
  const renderArray = () => {
    // 여기가 잘 이해가 안감
    return todoAraay.map((todo, index) => (
      <li key={index}>
        {todo}
        <button onClick={() => deleteTodo(index)}>삭제</button>
      </li>
    ));
  };

  return (
    <div>
      <h3>TODO list</h3>
      <div>{renderArray()}</div>
      <div>
        <input type="text" value={input} onChange={changeInput} />
        <button onClick={addTodo}>추가</button>
      </div>
    </div>
  );
};

export default TodoFunction;
