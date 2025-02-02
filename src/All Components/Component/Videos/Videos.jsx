import React from 'react';

const Videos = () => {
    return (
        <div className='sm:flex justify-center items-center'>
            <div className='border border-slate-800 shadow-sm m-6 p-1'>
                <video width="560" height="315" controls>
                    <source src="https://i.imgur.com/tHUWSvj.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='border border-slate-800 shadow-sm m-6 p-1'>
                <video width="560" height="315" controls>
                    <source src="https://i.imgur.com/y3LpCtd.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='border border-slate-800 shadow-sm m-6 p-1'>
                <video width="560" height="315" controls>
                    <source src="https://i.imgur.com/EBkGCQc.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Videos;
