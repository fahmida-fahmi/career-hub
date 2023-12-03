import React, { createContext, useState } from 'react';
import Father from './Father';
import Uncle from './Uncle';
import Aunt from './Aunt';

export const RingHandle = createContext('')
export const MoneyHandle = createContext(0)

const Grandpa = () => {
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa text-center text-3xl'>
            <h2 className=''>Grandpa</h2>
            <h2>I have no money. Can you give some I will show that here : { money}</h2>
            <MoneyHandle.Provider value={[money,setMoney]}>
                <RingHandle.Provider value={'diamond ring'}>
                    <section className='flex justify-between'>
                        <Father></Father>
                        <Uncle></Uncle>
                        <Aunt></Aunt>
                    </section>
                </RingHandle.Provider>
            </MoneyHandle.Provider>
        </div>
    );
};

export default Grandpa;