import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Cart from '../cart/Cart';
import  {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    // const showToastMessage = () => {
        
    // };
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer />

        </div>
    );
};

export default Home;