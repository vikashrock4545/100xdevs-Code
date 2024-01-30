import { useEffect } from "react"

function App() {

  useEffect(function () {
    alert("Hello")
  }, [])
  
  return (
    <div style={{display: "flex"}}>
      {/* <CardWrapper innerComponent={<TextComponent />} /> */}
      <CardWrapper>
        <div>
          hii there hellooo from first
        </div>
      </CardWrapper>
      <CardWrapper>
        <div>
          hii there hellooo from second
        </div>
      </CardWrapper>
    </div>
  )
}

// function TextComponent() {
//   return <div>
//     hii there
//   </div>
// }

function CardWrapper({children}) {
  return <div style={{border: "2px solid black", padding: 20, margin: 10}}>
    {children}
  </div>
}

export default App
