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


import Home from './components/Page/Home';

import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import Allfood from './components/Page/Allfood';
import AddProduct from './components/Dashboard/AddProduct';
import DetailsPage from './components/Page/Detailsmenu';
import Myadded from './components/Page/Myadded';
import Error404 from './components/Page/Error404';
import Blog from './components/Page/Blog';
import Updateproduct from './components/Dashboard/Updateproduct';




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
        element: <Allfood></Allfood>,
        loader: () => fetch('http://localhost:5000/menus/')
      },
      {
        path: '/add',
        element: <AddProduct></AddProduct>
      },
      { 
        path: '/menus/:id',
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) => fetch(`http://localhost:5000/menus/${params.id}`)   
      },
      {
        path: '/myadd/:email',
        element: <Myadded></Myadded>,
        loader: ({ params }) => fetch(`http://localhost:5000/menuse/${params.email}`)   
      },
      {
        path: '/blog',
        element:<Blog></Blog>
       
      },
      {
        path: '/updatemenu/:id',
        element:<Updateproduct></Updateproduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/menus/${params.id}`)  
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

