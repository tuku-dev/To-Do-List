import React, { useState } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import ToDoList from './ToDoList';

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }])
  }
  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="App font-sans max-w-[700px] mx-auto border mt-10 p-5 rounded shadow-lg pb-10">
      <h1 className="text-center text-3xl font-extrabold mb-10">To-Do List</h1>
      <TodoInput addTask={addTask} />
      <ToDoList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
