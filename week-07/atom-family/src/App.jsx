import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
// import { TODOS } from './todos'
import { todosAtomFamily } from './atoms'
import { useEffect } from 'react'

function App() {

  return <RecoilRoot>
    {/* <Updater /> */}
    <ToDo id={1} />
    <ToDo id={2} />
    <ToDo id={2} />
    <ToDo id={2} />
    <ToDo id={2} />
    <ToDo id={3} />
  </RecoilRoot>
}

// function Updater() {
//   const updateToDo = useSetRecoilState(todosAtomFamily(2))
//   useEffect(() => {
//     setTimeout(() => {
//       updateToDo({
//         id: 2,
//         title: "New To Do",
//         description: "New To Do Description",
//       })
//     }, 5000)
//   }, [])
// }

function ToDo({id}) {
  const currentToDo = useRecoilValue(todosAtomFamily(id))

  return <div>
    <h1>{currentToDo.title}</h1>
    <h2>{currentToDo.description}</h2>
  </div>
}

export default App
