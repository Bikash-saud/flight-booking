import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements,RouterProvider,Route} from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Register from './pages/auth/Register.jsx'
import Login from './pages/auth/Login.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
<Route path='/register' element={<Register/>}/>
<Route path='/login' element={<Login/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
