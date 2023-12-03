import React, { useState } from 'react';
import Item from './Item';

const Cart = ({ cart,handleRemoveCart }) => {
let message
    return (
        <div className=''>
            {
                cart.length === 0 ? 'plz add some product': 'your are gorib'
            }
            <div className='sticky top-20  bg-cyan-800 mx-10 rounded-3xl border-4'>
                <div className='m-10'>
                    <h1 className='mb-10'>Order summary: {cart.length} </h1>
                    {
                        cart.length ===2 && 'you select 2 items'
                    }
                    {
                        cart.length === 3 || 'you did not select 3 items'
                    }
                    {
                        cart.map(item => <Item
                            key={item._id}
                            item={item}
                            handleRemoveCart={handleRemoveCart}
                        ></Item>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Cart;