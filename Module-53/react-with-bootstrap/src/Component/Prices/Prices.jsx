import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const Prices = () => {
    const [prices, setPrices] = useState([])
    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div>

            <h1 className='text-6xl text-center py-5 text-violet-600'>Welcome to our GYM World</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    > </PriceCard>)
                }
            </div>
        </div>

    );
};

export default Prices;