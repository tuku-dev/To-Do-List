import Todo from "./Todo"

function ToDoList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map(task => <Todo key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />)}
    </ul>
  )
}

export default ToDoList