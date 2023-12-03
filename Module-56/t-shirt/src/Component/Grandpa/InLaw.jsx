import React, { useContext } from 'react';
import { MoneyHandle } from './Grandpa';

const InLaw = () => {
    const [money] = useContext(MoneyHandle)
    return (
        <div>
            In law :{money}
            
        </div>
    );
};

export default InLaw;