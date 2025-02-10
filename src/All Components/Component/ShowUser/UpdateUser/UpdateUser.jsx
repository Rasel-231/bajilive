import React from "react";
import { useLoaderData, useLocation, useNavigate, useNavigation } from "react-router-dom";

const UpdateUser = () => {
  const loadedUsers = useLoaderData();
  const location=useLocation()
  const navigate=useNavigation()

  const updateData = (e) => {
    e.preventDefault();
    const form = e.target;
    const UserName = form.UserName.value;
    const password = form.password.value;
    const email = form.email.value;
    const fullname = form.fullname.value;
    const date = form.date.value;
    const userInformation = { UserName, password, email, fullname, date };
    form.reset()

    fetch(`${import.meta.env.VITE_BASE_URL}/UserData/${loadedUsers._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.error("error this page", data);
        if (data.modifiedCount > 0) {
          alert("Data updated Successfully..!");
          navigate("/username",{state: {from:location}})
        }
      });
  };
  return (
  

    
    <div className="hero bg-base-200 min-h-screen ">
      
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={updateData} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="UserName"
              defaultValue={loadedUsers?.UserName}
              className="input input-bordered"
              required
             
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              /*  */
              name="password"
              defaultValue={loadedUsers?.password}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={loadedUsers?.email}
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullname"
              defaultValue={loadedUsers?.fullname}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date Of Birth</span>
            </label>
            <input
              type="date"
              defaultValue={loadedUsers?.date}
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
