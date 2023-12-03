import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from './Tshirt';
import Cart from '../cart/Cart';
import  {toast}  from 'react-toastify';


const Shop = () => {
    const tShirts = useLoaderData()
    const [cart,setCart] = useState([])
    const Handler = createContext()

    const handleCart = (tShirt) =>{
        const exits = cart.find(el => el._id === tShirt._id)
        if(exits){
            toast('This item already exits in your cart!', {
                position: toast.POSITION.TOP_LEFT,
                className: 'toast-message'
            });
        }
        else{
            const newCart = [...cart, tShirt]
            setCart(newCart)
        }
    }
    const handleRemoveCart = id =>{
        const remaining = cart.filter(el => el._id !== id)
        setCart(remaining)
    }
    
    return (
        <div className='flex justify-center'>

            <div className='grid grid-cols-3 gap-10'>
                {
                    tShirts.map(tShirt => <Tshirt
                        key={tShirt._id}
                        item ={tShirt}
                        handleCart={handleCart}
                    ></Tshirt>)
                }
            </div>
            <Cart
                key={tShirts._id}
                cart={cart}
                handleRemoveCart={handleRemoveCart}
            ></Cart>
        </div>

    );
};

export default Shop;