import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [currentTask, setCurrentTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleEditChange = (event) => {
    setCurrentTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setIsEditing(index);
    setCurrentTask(tasks[index]);
  };

  const saveTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = currentTask;
    setTasks(newTasks);
    setIsEditing(null);
    setCurrentTask("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {isEditing === index ? (
              <span>
                <input
                  type="text"
                  value={currentTask}
                  onChange={handleEditChange}
                />
                <button onClick={() => saveTask(index)}>Save</button>
              </span>
            ) : (
              <span>
                {task}
                <button onClick={() => editTask(index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
