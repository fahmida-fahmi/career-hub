import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import Menu from './Components/Menu/Menu.jsx';
import Reservation from './Components/Reservations/Reservation.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Home from './Components/Home/Home.jsx';
import ItemDetails from './Components/SingleItem/ItemDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'menu',
        element:<Menu/>,
        loader: ()=> fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      },
      {
        path:'item/:itemId',
        element:<ItemDetails/>,
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.itemId}`)
      },
      {
        path:'reservations',
        element:<Reservation/>
      },
      {
        path:'about-us',
        element:<AboutUs/>
      },
      {
        path:'contact',
        element:<Contact/>
      },

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
