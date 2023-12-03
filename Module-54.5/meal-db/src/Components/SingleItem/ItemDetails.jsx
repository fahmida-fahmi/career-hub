import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './ItemDetail.css'

const ItemDetails = () => {
    const detail = useLoaderData()
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }
    const { strMealThumb, strMeal, strCategory, strArea, strInstructions, strTags, strYoutube } = detail.meals[0]
    const seeFull = () => {
        document.getElementById('btn').innerText = `${strInstructions}`
    }
    console.log(detail.meals);
    console.log(detail.meals.strMeal);
    return (
        <div className='text-white mx-auto w-1/2 my-5'>
            <div className=''>

                <p className='text-6xl my-6 text-center text-amber-500'> {strMeal}</p>
                <img className='rounded-3xl w-80 ' src={strMealThumb} alt="" />
                <div className='text-amber-500 '>
                    <p className='text-3xl my-4'>Tags: <span>{strTags}</span></p>
                    <p className='text-3xl my-4'>Item Name: <span>{strArea}</span></p>
                    <p className='text-3xl my-4'>Item Instructions: <span id='btn'>{strInstructions.split('.')[0]}. . . . <button className='cursor-pointer underline text-amber-500' onClick={seeFull}>See more</button></span></p>
                    <p className='text-3xl my-6'>Item Name: <span>{strCategory}</span></p>
                    <a href={strYoutube} className='text-3xl w-80 mx-auto my-6'>Item Name: <span>Visit Youtube</span></a>


                </div>
            </div>
            <button onClick={handleNavigate} className='bg-amber-500 rounded-3xl py-3 px-10 my-10'>Go Back</button>
        </div>
    );
};

export default ItemDetails;