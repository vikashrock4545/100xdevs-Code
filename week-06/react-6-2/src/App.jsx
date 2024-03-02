// import { useEffect, useMemo } from "react"
import { useMemo } from "react"
import { useState } from "react"
// import axios from 'axios'

function App() {
  // const [btn, setBtn] = useState(1)
  // return (
  //   <div>
  //     <button onClick={() => {
  //       setBtn(1)
  //     }}>1</button>
  //     <button onClick={() => {
  //       setBtn(2)
  //     }}>2</button>
  //     <button onClick={() => {
  //       setBtn(3)
  //     }}>3</button>
  //     <button onClick={() => {
  //       setBtn(4)
  //     }}>4</button>
  //     <Todo id={btn} />
  //   </div>
  // )
  const [inputValue, setInputValue] = useState(0)
  const [counter, setCounter] = useState(0)
  // const [finalValue, setFinalValue] = useState(0)
  // useEffect(() => {
  //   let count = 0
  //   for(let i = 1; i <= inputValue; i++) {
  //     count += i
  //   }
  //   setFinalValue(count)
  // }, [inputValue])
  let count = useMemo(() => {
    let finalCount = 0
    for(let i = 1; i <= inputValue; i++) {
      finalCount += i
    }
    return finalCount
  }, [inputValue])
  
  return <div>
    <input onInput={(event) => {
      setInputValue(event.target.value)
    }} placeholder="Find sum from 1 to n"></input><br></br>
    Sum from 1 to {inputValue} is {count}<br></br>
    <button onClick={() => {
      setCounter(counter+1)
    }}>Counter {counter}</button><br></br>
  </div>
}

// function Todo({id}) {
//   const [todos, setTodos] = useState([])
//   // useEffect(() => {
//   //   fetch(`http://localhost:3001/todo?id=${id}`)
//   //     .then(async function (response) {
//   //       const json = await response.json()
//   //       setTodos(json.todos)
//   //     })
//   // }, [])

//   useEffect(() => {
//     axios.get(`http://localhost:3001/todo?id=${id}`)
//       .then(function (response) {
//         setTodos(response.data.todos)
//       })
//   }, [id])

//   return <div>
//     <h1>{todos.title}</h1>
//     <h4>{todos.description}</h4>
//   </div>
// }

export default App
