import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const detail = useLoaderData()
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate(-1)
    }
    console.log(detail);
    return (
        <div className='text-left py-5 font-semibold text-2xl w-50 mx-auto'>
            <h1 className='text-5xl text-violet-800 text-center pb-3'> {detail.name}</h1>
            <h1 className='py-2 text-violet-400'>Username: <span className='ps-2 text-gray-600'>{detail.username}</span></h1>
            <h1 className='py-2 text-violet-400'>Email: <span className='ps-2 text-gray-600'>{detail.email}</span></h1>
            <h1 className='py-2 text-violet-400'>Phone: <span className='ps-2 text-gray-600'>{detail.phone}</span></h1>
            <h1 className='py-2 text-5xl text-violet-500'>Address:</h1>
            <p className='py-2 text-2xl text-violet-400'>City:<span className='ps-2 text-gray-600'>{detail.address.city}</span></p>
            <p className='py-2 text-2xl text-violet-400'>GEO:<span className='ps-2 text-gray-600'>{detail.address.geo.lat}</span> , <span className='ps-2 text-gray-600'>{detail.address.geo.lng}</span></p>
            <p className='py-2 text-2xl text-violet-400'>Street: <span className='ps-2 text-gray-600'>{detail.address.street}</span></p>
            <p className='py-2 text-2xl text-violet-400'>Suite: <span className='ps-2 text-gray-600'>{detail.address.suite}</span></p>
            <p className='py-2 text-2xl text-violet-400'>Zip Code:  <span className='ps-2 text-gray-600'>{detail.address.zipcode}</span></p>

            <h1 className='py-3 text-5xl text-violet-500'>Company:</h1>
            <p className='text-violet-400'>Name:  <span className='ps-2 text-gray-600'>{detail.company.name}</span></p>
            <p className='text-violet-400'>Catch Phrase:<span className='ps-2 text-gray-600'>{detail.company.catchPhrase}</span></p>
            <p className='text-violet-400'>Bs: <span className='ps-2 text-gray-600'>{detail.company.bs}</span></p>

            <button className='border mx-auto py-2 w-50 mt-4 bg-violet-500 rounded-3xl cursor-pointer text-white font-semibold transition  delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-violet-800 duration-1000' onClick={handleNavigate}>Go back</button>


        </div>
    );
};

export default ProductDetails;