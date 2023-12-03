import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0'>

            <div className='flex justify-center my-16 bg-cyan-500'>
                <Link className='px-10 text-white py-3' to='/'>Home</Link>
                <Link className='px-10 text-white py-3' to='/about'>About</Link>
                <Link className='px-10 text-white py-3' to='/shop'>Shop</Link>
                <Link className='px-10 text-white py-3' to='/grandpa'>Grandpa</Link>
            </div>
        </div>

    );
};

export default Header;