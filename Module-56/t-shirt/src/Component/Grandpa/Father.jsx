import React from 'react';
import Brother from './Brother';
import Sister from './Sister';
import InLaw from './InLaw';

const Father = () => {
    return (
        <div>
            Father
            <Sister></Sister>
            <InLaw></InLaw>
            <Brother></Brother >
        </div>
    );
};

export default Father;