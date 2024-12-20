
function Todo({ task, toggleTask, deleteTask }) {
  return (
    <li className="flex items-center justify-start gap-3 border-b">
      <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} className="w-6 h-6 border rounded" />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className="text-xl p-3">{task.text}</span>
      <button onClick={() => deleteTask(task.id)} className="bg-red-400 text-red-950 py-2 px-3 ml-auto mr-0 rounded">Delete</button>
    </li>
  )
}

export default Todo