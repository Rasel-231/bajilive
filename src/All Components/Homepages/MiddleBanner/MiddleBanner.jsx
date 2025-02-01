import React from "react";
import Title from "../../Component/Title/Title";
const MiddleBanner = () => {
  return (
    <>
      <Title subHeading={"--Responsible Gaming--"} heading={"BajiNews"} />
      <section
        className="text-center sm:px-20 px-10 h-[300px] sm:h-[460px] z-1"
        style={{
            backgroundImage: "url('https://i.ibb.co.com/MDVr6Gvy/banner.jpg')",
            backgroundSize: "cover",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundPosition: "center",
          
           
          }}
      >
       <div className="container text-white bg-slate-400  sm:p-20 p-5 rounded-md shadow-lg  backdrop-filter backdrop-blur-lg bg-opacity-10 text-center">
       <h2 className="uppercase text-2xl font-bold">Bajilive</h2> 
        <p>
          Elevate your online cricket betting with BAJI Casino. Endless live
          sports and thrilling casino games await. Join us for unmatched
          excitement!
        </p>
       </div>
      </section>
    </>
  );
};

export default MiddleBanner;
