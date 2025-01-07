import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements,RouterProvider,Route} from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Register from './pages/auth/Register.jsx'
import Login from './pages/auth/Login.jsx'
import AdminRoute from './pages/admin/AdminRoute.jsx'
import UserList from './pages/admin/UserList.jsx'
import AuthRoute from './components/AuthRoute.jsx'
import Profile from './pages/user/Profile.jsx'
import AddFlight from './pages/admin/flight/AddFlight.jsx'
import Home from './Home.jsx'
import Flights from './pages/admin/flight/Flights.jsx'
import FlightDetail from './pages/admin/flight/FlightDetail.jsx'
import AllFlight from './pages/admin/flight/AllFlights.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
<Route path='/register' element={<Register/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/' index={true} element={<Home/>}/>
<Route path='/flights' element={<Flights/>}/>
<Route path='/flight/:id' element={<FlightDetail/>}/>
{/* auth route */}
<Route path='' element={<AuthRoute/>}>

<Route path='/profile' element={<Profile/>}/>
</Route>



<Route path='/admin' element={<AdminRoute/>}>
<Route path='userlists' element={<UserList/>}/>
<Route path='addflight' element={<AddFlight/>}/>
<Route path='allFlights' element={<AllFlight/>}/>
</Route>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
