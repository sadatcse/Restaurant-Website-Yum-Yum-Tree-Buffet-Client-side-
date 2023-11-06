import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Import React Router dom 

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Import Browser Root

import Root from './components/Root';
import AuthProvider from './providers/AuthProvider';


// Import Web site Page 

import Error404 from './components/Page/Error404';
import Home from './components/Page/Home';

import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import Allfood from './components/Page/Allfood';
import AddProduct from './components/Dashboard/AddProduct';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path:'/',
        element:<Home></Home>
        
      },
      {
        path:'/login',
        element:<Login></Login>
      },

      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/allfood',
        element: <Allfood></Allfood>
      },
      {
        path: '/add',
        element: <AddProduct></AddProduct>
      },
       

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
      </React.StrictMode>,
)

