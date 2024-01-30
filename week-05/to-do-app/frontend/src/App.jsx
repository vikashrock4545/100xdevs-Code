import { useState } from 'react'
import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { ToDos } from './components/Todos'

function App() {
  
  const [todos, setTodos] = useState([])
  // fetch("http://localhost:3000/todo")
  //   .then(async function(response) {
  //     const json = await response.json()
  //     setTodos(json.todos)
  //   })

  return (
    <div>
      <CreateToDo />
      <ToDos todos={todos}></ToDos>
    </div>
  )
}

export default App
