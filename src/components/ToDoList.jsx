import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")
  const [filter, setFilter] = useState("all")

  const handleInputChange = (event) => {
    setNewTask(event.target.value)
  }

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      return
    }
    setTasks([...tasks, { text: newTask, completed: false }])
    setNewTask("")
  }

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  const handleMarkComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "pending":
        return !task.completed
      case "completed":
        return task.completed
      default:
        return true
    }
  })

  return (
    <div className="content">
      <ul>
      <h1>To Do List</h1>
      <div>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a new task..."
      />
      <button onClick={handleAddTask}>Add task</button>
      </div>
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">All Tasks</option>
        <option value="pending">Pending Tasks</option>
        <option value="completed">Completed Tasks</option>
      </select>

      <ul className="checklist">
      {filteredTasks.map((task, index) => (
        <li key={task.id || index} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleMarkComplete(index)}
            className="task-checkbox"
          />
          <span className="task-text">
            {task.text}
          </span>
          <button onClick={() => handleRemoveTask(index)} className="task-remove-button">
            Remover
          </button>
        </li>
      ))}
      </ul>
      </ul>
    </div>
  )
}

export default ToDoList