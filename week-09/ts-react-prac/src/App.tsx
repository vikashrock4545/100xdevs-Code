import { Card } from "./components/Card"

const todos = {
  todo: "todo1", 
  description: "description", 
  complete: false
}

function App() {
  return (
    <Card todo={todos.todo} description={todos.description} complete={todos.complete}/>
  )
}

export default App
