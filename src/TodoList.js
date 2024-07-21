import { isEditable } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

const TodoFunction = () => {
  const [todoAraay, setTodoArray] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [currentTodo, setCurrentTodo] = useState("");

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

  const handleEditChange = (event) => {
    setCurrentTodo(event.target.value);
  };

  const editTodo = (index) => {
    setIsEditing(index);
    setCurrentTodo(todoAraay[index]);
  };

  const saveTodo = (index) => {
    const newTodoArray = [...todoAraay];
    newTodoArray[index] = currentTodo;
    setTodoArray(newTodoArray);
    setIsEditing(null);
    setCurrentTodo("");
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
      isEditing={isEditing}
      currentTodo={currentTodo}
      handleEditChange={handleEditChange}
      editTodo={editTodo}
      saveTodo={saveTodo}
    />
  );
};

const TodoView = ({
  input,
  todoAraay,
  addTodo,
  deleteTodo,
  changeInput,
  isEditing,
  currentTodo,
  handleEditChange,
  editTodo,
  saveTodo,
}) => {
  const renderArray = () => {
    // .map이 뭔지 모르겠음?
    return todoAraay.map((todo, index) => (
      <li key={index}>
        {isEditing === index ? (
          <span>
            <input
              type="text"
              value={currentTodo}
              onChange={handleEditChange}
            />
            <button onClick={() => saveTodo(index)}>저장</button>
          </span>
        ) : (
          <span>
            {todo}
            <button onClick={() => editTodo(index)}>수정</button>
            <button onClick={() => deleteTodo(index)}>삭제</button>
          </span>
        )}
      </li>

      //   <li key={index}>
      //     {todo}
      //     <button onClick={() => deleteTodo(index)}>삭제</button>
      //   </li>
    ));
  };

  return (
    <div>
      <h3>TODO list</h3>
      <div>
        <input
          type="text"
          value={input}
          placeholder="할 일을 추가하세요."
          onChange={changeInput}
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <div>{renderArray()}</div>
    </div>
  );
};

export default TodoFunction;
