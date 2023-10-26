import About from "./pages/About.jsx"
import { 
  Route, 
  Link, 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements 
} from 'react-router-dom'
import Home from "./pages/Home.jsx" 
import Vans, {loader as vansLoader} from "./pages/vans/Vans.jsx"
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
import NotFound from "./components/NotFound.jsx"
import Error from "./components/Error.jsx"

const router = createBrowserRouter(createRoutesFromElements(
          <Route element={<Layout/>} >
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path="/vans" element={<Vans/>} loader={vansLoader} errorElement={<Error/>} />
            <Route path="/vans/:id" element={<VanDetail/>}/>
            {/* Host Navbar */}
            <Route path="host" element={<HostLayout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="reviews" element={<Reviews/>}/>
              <Route path="vans" element={<VansHost/>}/>

              {/*  */}

              <Route path="vans/:id" element={<VanDetailHost/>}>
                <Route index element={<HostVanInfo/>}/>
                <Route path="photos" element={<HostVanPhoto/>}/>
                <Route path="pricing" element={<HostVanPricing/>}/>
              </Route>

              <Route path="income" element={<Income/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
          </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
