import React from 'react';

const Title = ({heading,subHeading}) => {
    return (
        <div className='mx-auto sm:w-4/12 text-center my-8'>
            <h3 className='text-orange-400 '>--{subHeading}--</h3>
            <h2 className='uppercase text-2xl border-y-4 py-3 my-5'>{heading}</h2>
        </div>
    );
};

export default Title;