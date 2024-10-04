
import{createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import './App.css'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import RootLayout from './components/RootLayout'
import NotFound from './components/NotFound'
import SignIn from './components/SignIn'
// import Pay from './pages/Pay'




function App() {
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Dashboard/>}></Route>
    <Route path = "/cart" element={<Cart/>}></Route>
    <Route path = "/signin" element={<SignIn/>}></Route>
    {/* <Route path = "/pay" element={<Pay/>}></Route> */}
    <Route path='*' element={<NotFound/>}></Route>
  

  </Route>
))

  return (
    <div className='App'>
  <RouterProvider router={router}/>
    </div>
  )
}

export default App
