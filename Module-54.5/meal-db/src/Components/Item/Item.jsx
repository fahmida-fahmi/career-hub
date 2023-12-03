import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({item}) => {
    const {strMeal, strCategory, strArea,strMealThumb,strTags,idMeal} = item
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate(`/item/${strMeal}`)
    }
    return (
        <div className='border-2 border-amber-500 rounded-3xl p-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 duration-300'>
            <img className='rounded-3xl' src={strMealThumb} alt="" />
            <h1 className='text-amber-500 font-semibold text-3xl py-2'>{strMeal}</h1>
            <p className='text-white text-2xl font-semibold'>{strTags?strTags: strMeal}  <span className='text-sm'>[{strCategory}]</span></p>
            <p className='text-amber-500 text-1xl font-semibold py-2'>{strArea}</p>
            <button onClick={handleNavigate} className='text-white border-white border-2 py-3 px-8 bg-amber-500 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300'>Show Details</button>
        </div>
    );
};

export default Item;