import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div className='mx-5'>
            <h1 className='py-5 text-center text-5xl text-violet-500 font-semibold'>This is our Team Members & their description</h1>
            <div className='grid grid-cols-4 gap-5'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
    </div>

    );
};

export default Products;