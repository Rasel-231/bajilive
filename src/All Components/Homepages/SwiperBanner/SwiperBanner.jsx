import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Title from "../../Component/Title/Title";
import { Autoplay, Pagination } from "swiper/modules";


const SwiperBanner = () => {
  return (
    <div>
        <div>
            <Title heading={"Popular Games"} subHeading={"--Win more money--"}/>
        </div>
      <Swiper 
      slidesPerView={4}
      spaceBetween={10}
      centeredSlides={true}
      pagination={{clickable:true}}
      autoplay={{delay:1000,disableOnInteraction:false }}
      modules={[Autoplay,Pagination]}
      className="mySwiper mb-20"

      
      >
        <SwiperSlide><img src="https://i.ibb.co.com/V00G54rZ/slide1.jpg" alt="404" className="h-[120px] sm:h-[220px]  rounded-md shadow-sm"/><p className="font-bold -mt-16 text-center text-white text-xl pb-3">Sicbo</p></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/Cp8cLgQV/slide2.jpg" alt="404" className="h-[120px] sm:h-[220px]  rounded-md shadow-sm"/><p className="font-bold -mt-16 text-center text-white text-xl pb-3">Evolution</p></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/GvKGTTMd/slide3.jpg" alt="404" className="h-[120px] sm:h-[220px]  rounded-md shadow-sm"/><p className="font-bold -mt-16 text-center text-white text-xl pb-3">Casino</p></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/0V2TGB7D/slide4.jpg" alt="404" className="h-[120px] sm:h-[220px]  rounded-md shadow-sm"/><p className="font-bold -mt-16 text-center text-white text-xl pb-3">Roulette</p></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/j91H94bw/slide5.jpg" alt="404" className="h-[120px] sm:h-[220px]  rounded-md shadow-sm"/><p className="font-bold -mt-16 text-center text-white text-xl pb-3">Pokker</p></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/FkBWhF9X/slide6.png" alt="404" className="h-[120px] sm:h-[220px]  rounded-md shadow-sm"/><p className="font-bold -mt-16 text-center text-white text-xl pb-3">Exchange</p></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperBanner;
