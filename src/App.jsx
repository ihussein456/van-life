import About from "./pages/About.jsx"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home.jsx" 
import Nav from"./Nav"
import Vans from "./pages/Vans"

function App() {
  return (
    <BrowserRouter>
    <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path="/Vans" element={<Vans/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
