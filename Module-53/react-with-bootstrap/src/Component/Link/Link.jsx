import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({item}) => {
    return (
        <li className='px-12 py-3 hover:bg-violet-700 text-white text-2xl'>
            <NavLink to={item.path}>{item.name}</NavLink>
            {/* <NavLink></NavLink> */}
        </li>
    );
};

export default Link;