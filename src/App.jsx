
import{createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import './App.css'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import RootLayout from './components/RootLayout'
import NotFound from './components/NotFound'
import SignIn from './components/SignIn'
import CheckoutPage from './components/CheckoutPage'
// In your main file, e.g., index.js or App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import Pay from './pages/Pay'
import OrderSummary from './components/OrderSummary'
import ShippingForm from './components/ShippingForm'

// import Pay from './pages/Pay'




function App() {
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Dashboard/>}></Route>
    <Route path = "/pay" element={<Pay/>}></Route>
    <Route path = "/shipping" element={<ShippingForm/>}></Route>
    <Route path = "/summary" element={<OrderSummary/>}></Route>
    <Route path = "/cart" element={<Cart/>}></Route>
    <Route path = "/signin" element={<SignIn/>}></Route>
    <Route path = "/checkout" element={<CheckoutPage/>}></Route>
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
