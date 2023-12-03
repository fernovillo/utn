// eslint-disable-next-line react/prop-types
import React, { useState, useEffect } from "react";

// Componente de Tarea
// eslint-disable-next-line react/prop-types
const TaskItem = ({ task, onCompleteTask }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Efecto para mostrar un mensaje cuando la tarea cambia de estado
    console.log(
      // eslint-disable-next-line react/prop-types
      `La tarea "${task.name}" ahora está ${
        isCompleted ? "completada" : "pendiente"
      }`
    );
    // eslint-disable-next-line react/prop-types
  }, [isCompleted, task.name]);

  const handleCompleteClick = () => {
    setIsCompleted(!isCompleted);
    // eslint-disable-next-line react/prop-types
    onCompleteTask(task.id);
  };

  return (
    <div style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
      <span>{task.name}</span>
      <button onClick={handleCompleteClick}>Completar</button>
    </div>
  );
};

export default TaskItem;
