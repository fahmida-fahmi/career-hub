import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'


const Features = ({ feature }) => {
    return (
        <div className='flex justify-start py-2.5'>
            <CheckCircleIcon className="h-8 w-8 text-violet-500" />
            <span className='ps-2'>
                {feature}</span>
        </div>
    );
};

export default Features;