import React from 'react';

const Item = ({item,handleRemoveCart}) => {
    const {name,picture, price,_id} = item
    return (
        <div className='my-10 flex justify-between items-center'>
            <img className='w-10' src={picture} alt="" />
            <p className='text-2xl'>{name}</p>
            <p>${price}</p>
            <button onClick={()=>handleRemoveCart(_id)}>X</button>
            
        </div>
    );
};

export default Item;