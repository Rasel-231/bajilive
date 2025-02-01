import React from 'react';
import Title from "../../Component/Title/Title"
const DownBanner = () => {
    return (
       <div className="text-white">
         <section className='bg-fixed  pt-8 my-20' style={{
            backgroundImage: "url('https://i.ibb.co/Tq1488dB/mainbanner.jpg')",
            backgroundPosition:"center",
            backgroundSize:"cover",
            justifyContent:"center",
            alignItems:"center",
        }}>
            <Title subHeading={"Take your own risk"} heading={"Play with smart Betting"}/>

            <div className='sm:flex justify-center items-center pt-10 pb-20 sm:px-36'>
            <div><img src="https://i.ibb.co.com/RG6rVWhS/banner.jpg" alt="404" className='w-[100%] h-[300px] shadow-md rounded-md'/></div>
            <div className='text-center text-white sm:text-left mx-20'>
            <h2 className='uppercase'>Where can i get some</h2>
             <span>Don’t miss out on the best online gaming and betting platform in Bangladesh.</span> <br />
              <button className="bg-green-300 p-2 rounded-md my-3 text-black">SignUp</button>
            </div>
            </div>
        </section>
       </div>
    );
};

export default DownBanner;

