import React from 'react';

const Videos = () => {
    return (
        <div className='sm:flex justify-center items-center'>
            <div className='border border-slate-800 shadow-sm m-6 p-1'>
                <iframe
                    width="100%"
                    height="315"
                    src="https://youtu.be/YtpNN0OrKyk?si=f6L8htQVVRd_Mzbf"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className='border border-slate-800 shadow-sm m-6 p-1'>
                <iframe
                    width="100%"
                    height="315"
                    src="https://youtu.be/McMiyNLQHbg?si=yqvlI-1rfTmZQUho"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className='border border-slate-800 shadow-sm m-6 p-1'>
                <iframe
                    width="100%"
                    height="315"
                    src="https://youtu.be/APC16tHt1Dg?si=jDuoovZA63WMAwNO"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Videos;
