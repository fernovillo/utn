import React, { useState } from "react";
//import TaskItem from "./TaskItem";
const TaskForm = ({ tasks, onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (newTask.trim() !== "") {
      onAddTask({ id: Date.now(), name: newTask, completed: false });
      setNewTask("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Nueva Tarea:
        <input type="text" value={newTask} onChange={handleInputChange} />
      </label>

      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;
