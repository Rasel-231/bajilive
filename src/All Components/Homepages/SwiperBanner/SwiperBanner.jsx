import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Title from "../../Component/Title/Title";
import slide1 from "../../../assets/SwiperBanner/slide1.jpg"
import slide2 from "../../../assets/SwiperBanner/slide2.jpg"
import slide3 from "../../../assets/SwiperBanner/slide3.jpg"
import slide4 from "../../../assets/SwiperBanner/slide4.jpg"
import slide5 from "../../../assets/SwiperBanner/slide5.jpg"
import slide6 from "../../../assets/SwiperBanner/slide6.png"
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
        <SwiperSlide><img src={slide1} alt="404" className="h-[120px] sm:h-[220px]  rounded-md shadow-sm"/><p className="font-bold -mt-16 text-center text-white text-xl pb-3">Sicbo</p></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="404" className="h-[120px] sm:h-[220px]  rounded-md shadow-sm"/><p className="font-bold -mt-16 text-center text-white text-xl pb-3">Evolution</p></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="404" className="h-[120px] sm:h-[220px]  rounded-md shadow-sm"/><p className="font-bold -mt-16 text-center text-white text-xl pb-3">Casino</p></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="404" className="h-[120px] sm:h-[220px]  rounded-md shadow-sm"/><p className="font-bold -mt-16 text-center text-white text-xl pb-3">Roulette</p></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="404" className="h-[120px] sm:h-[220px]  rounded-md shadow-sm"/><p className="font-bold -mt-16 text-center text-white text-xl pb-3">Pokker</p></SwiperSlide>
        <SwiperSlide><img src={slide6} alt="404" className="h-[120px] sm:h-[220px]  rounded-md shadow-sm"/><p className="font-bold -mt-16 text-center text-white text-xl pb-3">Exchange</p></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperBanner;
