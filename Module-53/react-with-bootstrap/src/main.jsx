import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Component/Navbar/navbar.jsx';
import About from './Component/About/About.jsx';
import Prices from './Component/Prices/Prices.jsx';
import Products from './Component/Products/Products.jsx';
import ProductDetails from './Component/ProductDetails/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Oppps !!!!!!!!!!! dear we are offline now</div>,
    children: [
      {
        path:'/',
        element: <Prices/>
      },
      {
        path: 'about',
        element: <About/>,
    
      },
      {
        path:'products',
        element: <Products></Products>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'product/:productId',
        element: <ProductDetails></ProductDetails>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.productId}`)
      },
      {
        path:'services',
        element: <div>hello service</div>,
    
      },
      {
        path:'contact',
        element: <div>hello contact</div>,
    
      }
    ]
    
  },
  


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
