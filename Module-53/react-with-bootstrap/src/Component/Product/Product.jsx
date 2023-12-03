import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {name,username,email,phone,id} = product
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate(`/product/${id}`)
    }
    return (
        <div className='border rounded-3xl text-center pb-5 border-violet-600'>
            <h1 className='text-3xl font-semibold text-white bg-violet-500 rounded-t-3xl py-4'>{name}</h1>
            <h1 className='font-semibold py-3'>Username: {username}</h1>
            <h1 className='font-semibold'>Email: {email}</h1>
            <h1 className='font-semibold pt-3'>Phone: {phone}</h1>
            {/* <p className='border mx-auto py-2 w-50 mt-4 bg-violet-500 rounded-3xl cursor-pointer text-white font-semibold transition  delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-violet-800 duration-1000'><Link to={`/products/${name.split(' ').join('')+id}`}>Show Details</Link></p> */}
            {/* <p className='border mx-auto py-2 w-50 mt-4 bg-violet-500 rounded-3xl cursor-pointer text-white font-semibold transition  delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-violet-800 duration-1000'><Link to={`/product/${id}`}>Show Details</Link></p> */}
            <button className='border mx-auto py-2 w-50 mt-4 bg-violet-500 rounded-3xl cursor-pointer text-white font-semibold transition  delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-violet-800 duration-1000' onClick={handleNavigate}>Show me more</button>

        </div>
    );
};

export default Product;