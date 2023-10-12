import About from "./pages/About.jsx"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home.jsx" 
import Vans from "./pages/vans/Vans.jsx"
import "./server.js"
import VanDetail from "./pages/vans/VanDetail.jsx"
import Layout from "./components/Layout.jsx"
import Dashboard from "./pages/host/Dashboard.jsx"
import Reviews from "./pages/host/Reviews.jsx"
import Income from "./pages/host/Income.jsx"


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path="/vans" element={<Vans/>}/>
            <Route path="/vans/:id" element={<VanDetail/>}/>
            
            <Route path="/host" element={<Dashboard/>}>
              <Route path="/host/reviews" element={<Reviews/>}/>
              <Route path="/host/income" element={<Income/>}/>
            </Route>

          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
