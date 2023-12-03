import React from 'react';

const Tshirt = ({ item,handleCart }) => {

    const { _id, price, picture, name, gender } = item
    return (
        <div className='border-2 text-center p-10 rounded-3xl'>
            <img className='w-auto mx-auto h-72  rounded-3xl' src={picture} alt="" />
            <p className='text-3xl my-3 text-cyan-300 text-semibold'>{name}</p>
            <p className='text-2xl'>Price: <span className='text-cyan-300'> ${price}</span></p>
            <button onClick={()=>handleCart(item)} className='bg-cyan-500 mt-3'>Buy now</button>
        </div>
    );
};

export default Tshirt;