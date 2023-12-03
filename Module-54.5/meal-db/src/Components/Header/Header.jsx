import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';
import logo from '../../../public/vite.svg';
import { useNavigation } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const navbarMenu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Menu',
            path: '/menu'
        },
        {
            id: 3,
            name: 'Reservations',
            path: '/reservations'
        },
        {
            id: 4,
            name: 'About Us',
            path: '/about-us'
        },
        {
            id: 5,
            name: 'Contact',
            path: '/contact'
        }

    ];
    const navigation = useNavigation()
    


    return (
        <div>


            <div className='flex justify-between bg-amber-500 py-5 '>
                <img className='px-8' src={logo} alt="" />

                <div className='flex justify-end'>
                    {
                        navbarMenu.map(menu => <Nav
                            key={menu.id}
                            menu={menu}
                        />)
                    }


                </div>
            </div>
            <div 
                id="detail"
                className={
                    navigation.state === "loading" ? 'loading' : ""
                }
            ></div>
            <Outlet></Outlet>
        </div>

    );
};

export default Header;