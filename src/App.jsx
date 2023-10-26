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
import VanDetail, {loader as vanDetailLoader} from "./pages/vans/VanDetail.jsx"
import Layout from "./components/Layout.jsx"
import Dashboard from "./pages/host/Dashboard.jsx"
import Reviews from "./pages/host/Reviews.jsx"
import Income from "./pages/host/Income.jsx"
import HostLayout from "./pages/host/HostLayout.jsx"
import VansHost, {loader as vanHostLoader} from "./pages/host/VansHost.jsx"
import VanDetailHost, {loader as vanHostDetailLoader} from "./pages/host/VanDetailHost.jsx"
import HostVanInfo from "./pages/host/hostVans/HostVanInfo.jsx"
import HostVanPhoto from "./pages/host/hostVans/HostVanPhoto.jsx"
import HostVanPricing from "./pages/host/hostVans/HostVanPricing.jsx"
import NotFound from "./components/NotFound.jsx"
import Error from "./components/Error.jsx"

const router = createBrowserRouter(createRoutesFromElements(
          <Route element={<Layout/>} >
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path="/vans" element={<Vans/>} loader={vansLoader} errorElement={<Error/>}  />
            <Route path="/vans/:id" element={<VanDetail/>} loader={vanDetailLoader} errorElement={<Error/>} />
            {/* Host Navbar */}

            <Route path="host" element={<HostLayout/>}>
              <Route 
              index element={<Dashboard/>}
              loader={() => {
                return null
              }}
              />
              <Route 
                path="reviews" element={<Reviews/>}
                loader={() => {
                  return null
                }}
              />
              <Route 
                path="vans" 
                element={<VansHost/>}
                loader={vanHostLoader}
              />
              {/*  */}

              <Route 
              path="vans/:id" element={<VanDetailHost/>}
              loader={vanHostDetailLoader}
              >
                <Route 
                index element={<HostVanInfo/>}
                loader={() => {
                  return null
                }}
                />
                <Route 
                path="photos" element={<HostVanPhoto/>}
                loader={() => {
                  return null
                }}
                />
                <Route 
                path="pricing" element={<HostVanPricing/>}
                loader={() => {
                  return null
                }}
                />
              </Route>

              <Route 
              path="income" element={<Income/>}
              loader={() => {
                return null
              }}
              />
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
