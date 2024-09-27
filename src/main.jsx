import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Components/Login.jsx';
import App from './App.jsx'
import Register from './Components/Register.jsx'; 
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './Pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path:"register",
    element:<Register/>,
  },
  {
    path:"home",
    element:<Home/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
