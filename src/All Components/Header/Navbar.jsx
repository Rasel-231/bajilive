




import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { MdLogout } from "react-icons/md";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const Alllink = [
    <>
      <Link to="/"><li><a>HOME</a></li></Link>
      <li><a href="https://nihon11.github.io/Bajilive/" target="_blank">BAJILIVE</a></li>
      <Link to="/userdata"><li><a>USER ENTRY</a></li></Link>
      <Link to="/username"><li><a>USER NAME</a></li></Link>
      <Link to='/promotion'><li><a>PROMOTIONS</a></li></Link>
      <Link to='/about'><li><a>ABOUT US</a></li></Link>
    </>
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar fixed z-30 bg-opacity-20 bg-black text-white max-w-screen">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-600 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Alllink}
          </ul>
        </div>
        <a className="btn btn-ghost text-md sm:text-xl">
          <img src="https://i.ibb.co.com/21BWGKYc/brandlogo.png" alt="404" className="sm:h-8 h-4" />|| BAJILIVE
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Alllink}</ul>
      </div>
      <div className="navbar-end">
        {
          user
            ? <button onClick={handleLogout} className="flex gap-2"><MdLogout className="mt-1" /></button>
            : <Link to="/login" className="sm:btn sm:btn-outline">LOGIN</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;

