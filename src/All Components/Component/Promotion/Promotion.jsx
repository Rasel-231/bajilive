import React, { useEffect, useState } from 'react';
import ChildPromotion from './childPromotion/ChildPromotion';
const Promotion = () => {
    const[promotion,setPromotion]=useState([]);

    useEffect(()=>{
        fetch("https://server-j567ib6mn-halifaxs-projects.vercel.app/promotion")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setPromotion(data)
        })
    },[])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
            {
                promotion.map(send=>{
                return(
                    <ChildPromotion
                    key={send.id}
                    send={send}
                    />
                )    
                })
            }
           
        </div>
    );
};

export default Promotion;