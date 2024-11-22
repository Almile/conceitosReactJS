import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([])// Estado para guardar as tarefas
  const [newTask, setNewTask] = useState("")// Estado para guardar as novas tarefas
  const [filter, setFilter] = useState("all")// Estado para guardar os filtros

  // função que atualiza valor do input de nova tarefa
  const handleInputChange = (event) => {
    setNewTask(event.target.value)
  }

  // Função para adicionar uma nova tarefa à lista
  const handleAddTask = () => {
    if (newTask.trim() === "") {//verifica se o input está em branco
      return
    }
     // Adiciona a nova tarefa à lista de tarefas com a propriedade completed inicializada como false
    setTasks([...tasks, { text: newTask, completed: false }])
    setNewTask("")// Limpa o campo de input após adicionar a tarefa
  }

  // Função para remover uma tarefa da lista pelo index
  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  // Função para alternar o status de conclusão de uma tarefa
  const handleMarkComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
    // Mapeia as tarefas, alterando o status da tarefa no índice especificado
      i === index ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  // Função chamada quando o valor do seletor de filtro muda
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

    // Filtra as tarefas com base no filtro selecionado no select
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