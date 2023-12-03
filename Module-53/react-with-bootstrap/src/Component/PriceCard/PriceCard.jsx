import { Button, ButtonGroup } from 'react-bootstrap';
import React from 'react';
import Features from '../Features/Features';

const PriceCard = (props) => {
    const {name,features,price} = props.price
    return (
        <div className='rounded-3xl text-center border-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-100 duration-300'>
            <div className='rounded-t-3xl  bg-violet-500'>

                <h1 className='text-4xl font-bold px-3 py-5 text-white'>{name}</h1>
            </div>
            <h1 className='py-5 text-6xl font-bold text-violet-500'>${price} <span className='text-4xl text-gray-500'>/month</span></h1>
            <div className=' text-left px-5'>

            <h1 className='text-3xl text-violet-500 font-semibold'>Features:</h1>
            <ul className='py-4 text-2xl '>
                {
                    features.map((el,id) =><Features
                    key={id}
                    feature = {el}
                    ></Features>)
                }
            </ul>
            </div>
            <button className='py-3 px-5 bg-violet-500 rounded-2xl text-white font-semibold mb-5'>Select Membership</button>

        </div>
    );
};

export default PriceCard;