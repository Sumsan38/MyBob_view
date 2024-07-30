import React, { useState } from "react";

const TodoView = () => {
  const [todoAraay, setTodoArray] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState("");
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
    newTotoArray.splice(index, 1); // index 부터 1개 자른다
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

  const renderArray = () => {
    // .map 설명 듣기
    // 첫번쨰는 그냥 배열의 인자값, 두번쨰는 index (무조건)
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

export default TodoView;
