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
import HostLayout from "./pages/host/HostLayout.jsx"
import VansHost from "./pages/host/VansHost.jsx"
import VanDetailHost from "./pages/host/VanDetailHost.jsx"
import HostVanInfo from "./pages/host/hostVans/HostVanInfo.jsx"
import HostVanPhoto from "./pages/host/hostVans/HostVanPhoto.jsx"
import HostVanPricing from "./pages/host/hostVans/HostVanPricing.jsx"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path="/vans" element={<Vans/>}/>
            <Route path="/vans/:id" element={<VanDetail/>}/>
            
            <Route path="host" element={<HostLayout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="reviews" element={<Reviews/>}/>
              <Route path="vans" element={<VansHost/>}/>

              <Route path="vans/:id" element={<VanDetailHost/>}>
                <Route index element={<HostVanInfo/>}/>
                <Route path="photos" element={<HostVanPhoto/>}/>
                <Route path="pricing" element={<HostVanPricing/>}/>
              </Route>

              <Route path="income" element={<Income/>}/>
            </Route>

          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
