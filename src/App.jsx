import { useState } from 'react'
import './App.css'
import MainNavigation from './components/MainNavigation.jsx'
import Comic from "./components/Comic.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <MainNavigation />
        <Comic />
        <Footer />
      </div>
    </>
  )
}

export default App
