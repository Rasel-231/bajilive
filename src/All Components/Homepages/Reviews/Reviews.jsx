


import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
import Title from "../../Component/Title/Title";
import { Navigation } from "swiper/modules";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("Reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="my-10">
      <Title
        heading={"Reviews"}
        subHeading={"--What Our Brand Ambassadors Say--"}
      />

      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => {
            return (  // Added return here
              <SwiperSlide key={review._id}>
                <div className="m-6 text-center">
                  <span className="flex text-yellow-400 text-2xl text-center justify-center">
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={review.rating}
                      readOnly
                    />
                  </span>
                  {""} <br />
                  <div className="justify-center mb-4 flex">
                    <span className="text-4xl">
                      <FaQuoteLeft />
                    </span>
                  </div>
                  <p className="text-sm uppercase px-20">{review.details}</p>
                  <div className="avatar flex flex-col items-center mt-4">
                    <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2 mt-2">
                      <img src={review.images} alt={review.name} />
                    </div> 
                    <h3 className="text-2xl text-orange-400">{review.name}</h3>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
