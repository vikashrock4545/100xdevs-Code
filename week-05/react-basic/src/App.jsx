/* eslint-disable react/prop-types */
import { useState } from "react"
import { ToDos } from "./Button"
function App() {
  // const [count, setCount] = useState(0)
  const [todos, settodos] = useState([{
    title: "Gym",
    description: "Gym Description",
    completed: false
  }, {
    title: "Study",
    description: "Study Description",
    completed: true
  }])

  function randomToDo() {
    settodos([...todos, {
      title: "new task", 
      description: "New task Description",
      completed: false
    }])
    // console.log(todos)
  }

  return (
    <div>
        {/* <ToDos title={todos[0].title} description={todos[0].description} />
        <ToDos title={todos[1].title} description={todos[1].description} /> */}
        <button onClick={randomToDo}>Add a new To Do</button>
        {todos.map(function(todo) {
          // eslint-disable-next-line react/jsx-key
          return <ToDos title={todo.title} description={todo.description} />
        })}
    </div>
  )
}

export default App
