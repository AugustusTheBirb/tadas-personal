import './App.css'
import MainNavigation from './components/MainNavigation.jsx'
import Comic from "./components/Comic.jsx"
import Footer from "./components/Footer.jsx"

function App() {
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
