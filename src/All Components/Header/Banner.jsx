import React from 'react';
import banner1 from "../../assets/headerImg/banner1.jpg"
import banner2 from "../../assets/headerImg/banner2.jpg"
import banner3 from "../../assets/headerImg/banner3.jpg"
import banner4 from "../../assets/headerImg/banner4.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={banner1}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4">❮</a>
            <a href="#slide2">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={banner2}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1">❮</a>
            <a href="#slide3">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
           src={banner3}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2">❮</a>
            <a href="#slide4">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
           src={banner4}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3">❮</a>
            <a href="#slide1">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;