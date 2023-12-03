import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, ButtonGroup, Card,CardGroup, Nav } from 'react-bootstrap';
import Navbar from './Component/Navbar/navbar';
import Prices from './Component/Prices/Prices';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet/>

    </>
  )
}

export default App
