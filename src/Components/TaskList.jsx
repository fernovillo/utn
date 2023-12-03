import React, { useState } from "react";
import TaskItem from "./TaskItem";

// Componente de Lista de Tareas
const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  const [confirmDelete, setConfirmDelete] = useState(null);

  const handleDeleteClick = (taskId) => {
    setConfirmDelete(taskId);
  };

  const handleConfirmDelete = () => {
    onDeleteTask(confirmDelete);
    setConfirmDelete(null);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(null);
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskItem task={task} onCompleteTask={onCompleteTask} />
          <button onClick={() => handleDeleteClick(task.id)}>Eliminar</button>
        </div>
      ))}
      {confirmDelete && (
        <div>
          <p>¿Estás seguro de que deseas eliminar esta tarea?</p>
          <button onClick={handleConfirmDelete}>Sí</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )}
    </div>
  );
};

export default TaskList;
