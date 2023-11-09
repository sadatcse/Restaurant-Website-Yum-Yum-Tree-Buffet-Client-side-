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
import OrderPage from './components/Page/OrderPage';
import Myorderfood from './components/Page/Myorderfood';
import PrivateRoot from './components/Root/PrivateRoot';



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
        loader: () => fetch('https://yumyum-store-server.vercel.app/menusCount/')
      },

      {
        path: '/add',
        element: <PrivateRoot><AddProduct></AddProduct></PrivateRoot>,
      },
      { 
        path: '/menus/:id',
        element: <PrivateRoot><DetailsPage></DetailsPage></PrivateRoot>,
        loader: ({ params }) => fetch(`https://yumyum-store-server.vercel.app/menus/${params.id}`)   
      },
      {
        path: '/myadd/',
        element: <PrivateRoot><Myadded></Myadded></PrivateRoot>
           
      },
      {
        path: '/blog',
        element:<Blog></Blog>
       
      },
      {
        path: '/updatemenu/:id',
        element:<PrivateRoot><Updateproduct></Updateproduct></PrivateRoot>,
        loader: ({ params }) => fetch(`https://yumyum-store-server.vercel.app/menus/${params.id}`)  
      },
      {
        path: '/order/:id',
        element:<PrivateRoot><OrderPage></OrderPage></PrivateRoot>,
        loader: ({ params }) => fetch(`https://yumyum-store-server.vercel.app/menus/${params.id}`)  
      },
      {
        path: '/myorder',
        element:<PrivateRoot><Myorderfood></Myorderfood></PrivateRoot>
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

