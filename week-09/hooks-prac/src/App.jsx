// import React, { useEffect, useState } from "react"
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import SearchBar from './components/SearchBar'
// import axios from "axios"
// import { useEffect, useState } from "react"

// function useTodos(n) {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     var refreshIntervalId = setInterval(() => {
//       setLoading(true)
//       axios.get("http://localhost:3000/todos")
//       .then(res => {
//         setTodos(res.data.todos)
//         setLoading(false)
//       })
//     }, n*1000) 

//     axios.get("http://localhost:3000/todos")
//       .then(res => {
//         setTodos(res.data.todos)
//         setLoading(false)
//       })
//     return () => {
//       clearInterval(refreshIntervalId)
//     }
//   },[n])
//   return {todos, loading}
// }

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine)
  // setInterval(() => {
  //   setIsOnline(window.navigator.onLine)
  // }, 2000)
  useEffect(() => {
    window.addEventListener('online', () => {
      setIsOnline(true)
    })
    window.addEventListener('offline', () => {
      setIsOnline(false)
    })
  }, [])
  
  return isOnline
}

const useMousePointer = () => {
  const [mousePosition, setMousePosition] = useState({ x : 0, y : 0 })

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return mousePosition
}

const useDimension = () => {
  const [width, setWidth] = useState(window.outerWidth)
  const [height, setHeight] = useState(window.outerHeight)

  const handleResizeEvent = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResizeEvent)
  }, [])
  return { height, width }
}

const useInterval = (fn, timeout) => {
  useEffect(() => {
    var value = setInterval(() => {
      fn()
    }, timeout)
    return () => {
      clearInterval(value)
    }
  }, [timeout, fn])
}

function App() {
  // const [render, setRender] = useState(true)
  // useEffect(() => {
  //   setInterval(() => {
  //     setRender(r => !r)
  //   }, 5000)
  // }, [])

  // return <div>
  //   {render ? <MyComponent /> : null}
  // </div>

  // const {todos, loading} = useTodos(8)

  // if(loading) {
  //   return <div>Loading...</div>
  // }
  
  const isOnline = useIsOnline()
  const mousePointer = useMousePointer()
  const {height, width} = useDimension()
  const [count, setCount] = useState(0)
  useInterval(() => {
    setCount(c => c+1)
  }, 2000)

  return <div>
    <Todos />
    You are {isOnline ? <span>Online</span> : <span>Offline</span>}
    <div>Mouse Position is ({mousePointer.x} , {mousePointer.y})</div>
    <div>the dimension of your window is {height} X {width}</div>
    <div>Timer is at {count}</div>
    <SearchBar />
    {/* {todos.map(todo => <Track todo={todo} />)} */}
  </div>
}

const fetcher = async function(url) {
  const data = await fetch(url)
  const json = await data.json()
  return json
}

function Todos() {
  const { data, error, isLoading } = useSWR("http://localhost:3000/todos", fetcher)
  if(error) return <div>failed to load</div>
  if(isLoading) return <div>Loading....</div>
  return <div>
    <div>the length of todos is {data.todos.length}</div>
    {data.todos.map(todo => <Track todo={todo} />)}
  </div>
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

// function MyComponent() {
//   useEffect(() => {
//     console.log("component mounted")

//  // when the dependency array changes then first this(cleanup) will run then the above code will run.
//     return () => {
//       console.log("component unmounted")
//     }
//   }, [])
//   return <div>my component rendered</div>
// }

// class MyComponent extends React.Component {
//   componentDidMount() {
//     console.log("component mounted")
//   }

//   componentWillUnmount() {
//     console.log("component unmounted")
//   }

//   render() {
//     return (
//       <div>My component rendered</div>
//     )
//   }
// }

// Functional based component.

// function MyComponent() {
//   const [count, setCount] = useState(0)
//   const clickHandler = () => {
//     setCount(count+1)
//   }
//   return (
//     <div>
//       <button onClick={clickHandler}>Increase {count}</button>
//     </div>
//   )
// }


// Class based components

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count : 0 }
//   }

//   incrementCount = () => {
//     this.setState({ count : this.state.count + 1 })
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     )
//   }
// }



export default App
