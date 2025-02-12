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
import FlightUpdateDelete from './pages/admin/flight/FlightUpdateDelete.jsx'
import AddPackages from './pages/admin/packages/AddPackages.jsx'
import Packages from './pages/admin/packages/Packages.jsx'
import PackageDetails from './pages/admin/packages/PackageDetails.jsx'
import UpdateDeletePackage from './pages/admin/packages/UpdateDeletePackage.jsx'
import AllPackages from './pages/admin/packages/AllPackages.jsx'
import About from './components/About.jsx'
import Help from './components/Help.jsx'
import AddBooking from './pages/admin/Booking/AddBooking.jsx'
import SearchPackage from './pages/admin/packages/SearchPackage.jsx'
import UserBooking from './pages/admin/Booking/UserBooking.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
<Route path='/register' element={<Register/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/' index={true} element={<Home/>}/>
<Route path='/flights' element={<Flights/>}/>
<Route path='/flight/:id' element={<FlightDetail/>}/>
<Route path='/package' element={<SearchPackage/>}/>
<Route path='/package/:id' element={<PackageDetails/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Help/>}/>
{/* auth route */}
<Route path='' element={<AuthRoute/>}>

<Route path='/profile' element={<Profile/>}/>
<Route path='/addbooking' element={<AddBooking/>}/>
<Route path='/user-booking' element={<UserBooking/>}/>
</Route>



<Route path='/admin' element={<AdminRoute/>}>
<Route path='userlists' element={<UserList/>}/>
<Route path='addflight' element={<AddFlight/>}/>
<Route path='allFlights' element={<AllFlight/>}/>
<Route path='flight/update/:id' element={<FlightUpdateDelete/>}/>
<Route path='addpackage' element={<AddPackages/>}/>
<Route path='package/update/:id' element={<UpdateDeletePackage/>}/>
<Route path='allPackages' element={<AllPackages/>}/>
</Route>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
