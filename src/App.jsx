import About from "./components/About"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./components/Home"
import Nav from"./Nav"

function App() {
  return (
    <BrowserRouter>
    <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
