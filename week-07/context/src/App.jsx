/* eslint-disable react/prop-types */
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
// import { CountContext } from "./context"
import { countAtom, evenSelector } from "./store/atoms/count"


function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  // console.log("re-render")
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
    <EvenRenderer />
  </div>
}

function EvenRenderer() {
  const isEven = useRecoilValue(evenSelector)
  return <div>
    {isEven ? "It is Even" : ""}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  // console.log("button re-render")
  return <div>
    <button onClick={() => {
      setCount(count => count+1)
    }}>Increase</button>
    <button onClick={() => {
      setCount(count => count-1)
    }}>Decrease</button>
  </div>

}

export default App
