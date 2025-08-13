
import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './Layout/Contact/Contact.jsx'
import Registration from './components/Registration/Registration.jsx'
import Users from './components/Users/Users.jsx'
import DisplayElectricProducts from './components/Product/DisplayElectricProducts.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children: [
    {path: "",
    element: <Home/>
    },
    {
      path: "about",
      element: <About/>
    },
    {
      path: "Contact",
      element: <Contact/>
    }    
    ,
    {
      path: "registration",
      element: <Registration/>
    }
      ,
    {
      path: "users",
      element: <Users/>
    },
    {
      path: "electricProducts",
      element:<DisplayElectricProducts/>
    }
  ]

}])


createRoot(document.getElementById('root')).render(
  
 // <StrictMode>
    <RouterProvider router={router}/>
  
  //</StrictMode>
     

)
