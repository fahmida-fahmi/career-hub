import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({menu}) => {
    const {path, name} = menu
    return (
        <div className=' px-10  text-white text-2xl '>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
};

export default Nav;