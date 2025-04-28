import { useState } from 'react'
import './App.css'
import MainNavigation from './components/MainNavigation.jsx'
import Comic from "./components/Comic.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <MainNavigation />
        <Comic></Comic>
      </div>
    </>
  )
}

export default App
