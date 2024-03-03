import { RecoilRoot, useRecoilValueLoadable } from 'recoil'
import { todosAtomFamily } from './atoms'
import { Suspense } from 'react';

function App() {

  return <RecoilRoot>
  <Suspense fallback={"loading....."}>
    <ToDo id={1} />
    <ToDo id={2} />
    <ToDo id={3} />
    <ToDo id={4} />
    <ToDo id={5} />
    <ToDo id={6} />
  </Suspense>
  </RecoilRoot>
}

function ToDo({id}) {
  const todo = useRecoilValueLoadable(todosAtomFamily(id));
  if(todo.state === "loading") return <div>
    Loading...
  </div>
  else if(todo.state === "hasValue") return <div>
    {todo.contents.title}
    {todo.contents.description}
  </div>
  else if(todo.state === "hasError") return <div>
    Error while getting the value from backend....
  </div>
}

export default App
