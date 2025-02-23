import React, { useEffect, useState } from "react";
import SubAdmin from "./SubAdmin/SubAdmin";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Admin = () => {
  const loadedData = useLoaderData();
  const [info, setInfo] = useState(loadedData);
  const admin = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    const admininfo = { username, password };
    form.reset();
    
    fetch(`${import.meta.env.VITE_BASE_URL}/admin`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(admininfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Admin Inforamtion added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <>
      <div className="justify-center w-full">
        <div className="hero bg-base-200 py-20 ">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={admin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="username"
                  name="username"
                  placeholder="Username"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
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
        <br />

        <h1 className="text-3xl text-center font-bold">Admin Data </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 justify-center items-center m-2 p-2">
          {Array.isArray(info) && info.length > 0 ? (
            info.map((dataTransfer) => (
              <div className="m-2" key={dataTransfer._id}>
                <SubAdmin dataTransfer={dataTransfer} />
              </div>
            ))
          ) : (
            <p>No admin data available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
