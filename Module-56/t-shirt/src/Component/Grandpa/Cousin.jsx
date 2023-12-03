import React, { useContext } from 'react';
import { RingHandle } from './Grandpa';

const Cousin = () => {
    const ring = useContext(RingHandle)
    return (
        <div>
            Cousine : I get the  {ring}
        </div>
    );
};

export default Cousin;