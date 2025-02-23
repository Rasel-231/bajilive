import React from "react";

const SubAdmin = ({dataTransfer}) => {
    const{username,password}=dataTransfer;
    console.log(dataTransfer)
  return (
    <div>
      <div>
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="https://t4.ftcdn.net/jpg/04/04/25/33/360_F_404253393_PFHsPALQU06RaNodR73yVyu0HpqiSNQi.jpg"
              alt="Casinos"
            />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title">UserName:{username}</h2>
            <h2 className="card-title">Password:{password}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubAdmin;
