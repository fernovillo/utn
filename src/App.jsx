import React, { useState } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  React.useEffect(() => {
    // Efecto de Actualización: Mostrar un mensaje cuando la lista de tareas cambia
    console.log("La lista de tareas ha sido actualizada:", tasks);
    // Persistencia de datos utilizando localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  React.useEffect(() => {
    // Obtener tareas de localStorage al cargar la página
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <div>
      <TaskList
        tasks={tasks}
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default App;
