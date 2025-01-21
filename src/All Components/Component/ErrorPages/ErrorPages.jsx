import React from 'react';
import Error from "../../../assets/ErrorPages/error.png";
const ErrorPages = () => {
    return (
        <div className='text-center text-2xl justify-center items-center font-bold'>
           <img src={Error} alt="404" />
        </div>
    );
};

export default ErrorPages;