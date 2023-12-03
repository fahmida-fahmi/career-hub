import React, { useContext } from 'react';
import Cousin from './Cousin';
import { MoneyHandle } from './Grandpa';


const Uncle = () => {
    const [money,setMoney] = useContext(MoneyHandle)
    return (
        <div>
            <h2>Uncle</h2>
            <button className='border-white mt-3' onClick={()=> setMoney(money +1000)}>send 1k</button>
            <Cousin></Cousin>
        </div>
    );
};

export default Uncle;