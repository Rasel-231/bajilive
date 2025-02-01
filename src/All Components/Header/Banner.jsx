import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/wNjhTKRC/banner1.jpg"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4">❮</a>
            <a href="#slide2">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/NMrPw7Qh/banner2.jpg"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1">❮</a>
            <a href="#slide3">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
           src="https://i.postimg.cc/5ydK9YtX/banner3.jpg"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2">❮</a>
            <a href="#slide4">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
           src="https://i.ibb.co.com/Nnr9wJRH/banner4.jpg"
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