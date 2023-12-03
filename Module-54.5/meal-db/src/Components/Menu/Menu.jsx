import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const Menu = () => {
    const data = useLoaderData()
    console.log(data.meals);
    return (
        <div className=''>
            <h1 className='text-amber-500 text-6xl text-center py-10'>Our All Meals</h1>
            <div className='grid lg:grid-cols-3  lg:gap-5 gap-10 w-3/4 text-center mx-auto'>

                {data.meals.map(item => <Item
                    key={item.idMeal}
                    item={item}
                ></Item>)}
            </div>
        </div>

    );
};

export default Menu;