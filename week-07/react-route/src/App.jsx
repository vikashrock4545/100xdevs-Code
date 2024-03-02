import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
// import { Dashboard } from "./components/Dashboard"
// import { Landing } from "./components/Landing"
import { Suspense, lazy } from "react";
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));


function App() {

  return (
    <div>
      {/* <div> */}
        {/* <button onClick={() => {
          window.location.href = "/"
        }}>Landing Page</button>
        <button onClick={() => {
          window.location.href = "/dashboard"
        }}>Dashboard</button> */}

      {/* </div> */}
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate()
  return <div>
    <button onClick={() => {
      navigate("/")
    }}>Landing Page</button>
    <button onClick={() => {
      navigate("/dashboard")
    }}>Dashboard</button>
  </div>
}

export default App
