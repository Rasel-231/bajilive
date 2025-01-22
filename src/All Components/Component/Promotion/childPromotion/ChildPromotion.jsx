import React from "react";

const ChildPromotion = ({ send }) => {
  const { title, img, description } = send;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl mx-auto my-4">
      <figure>
      <img src={img} alt="404" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary"><a href="https://112233bj.live/af/B9MaYXo6/Vip">PlayNow</a></button>
        </div>
      </div>
    </div>
  );
};

export default ChildPromotion;
