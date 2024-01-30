import {  useState } from "react"
let counter = 4
function App() {
  // const [title, setTitle] = useState("Vikash")

  // function ChangeTitle() {
  //   setTitle(Math.random())
  // }
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "go to gym today"
    }, {
      id: 2,
      title: "eat your food",
      description: "eat your food"
    }, {
      id: 3,
      title: "go to class",
      description: "go to class"
    }
  ])

  function addToDo() {
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }
  return (
    <div>
    {/* <button onClick={ChangeTitle}>Click to change title.</button>
    <Header title={title} /> */}
    {/* <HeaderWithButton />
    <Header title="Rock" /> */}
    <button onClick={addToDo}>Add a new ToDo</button>
    {todos.map(todo => (
        <ToDo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  )
}

function HeaderWithButton() {
  const [title, setTitle] = useState("Vikash")

  function ChangeTitle() {
    setTitle(Math.random())
  }
  return <div>
    <button onClick={ChangeTitle}>Click to change title</button>
    <Header title={title} />
  </div>
}

function Header({title}) {
  return <div>
   My name is {title}
  </div>
}

function ToDo({title, description}) {
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App
