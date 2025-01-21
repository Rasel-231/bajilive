import React, { useEffect, useState } from "react";

const ShowUser = () => {
    const[users,setUsers]=useState(null);
    useEffect(()=>{
        fetch("user.json")
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
        })
    },[])
  return (
    <div className="space-y-4 p-4">
        {
            users && users.length > 0 ?(
                users.map((user,index)=>(
                <section className="p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
                <p>SI:{index+1}</p>
                <p>User Name:{user.User_Name}</p>
                <p>Password:{user.Password}</p>
                <p>Email:{user.Email}</p>
                <p>Full Name:{user.Full_Name}</p>
                <p>BirthDay:{user.BirthDay}</p>
              </section>
                ))):(
                <p>No users Found </p>)
        }
  
    </div>
  );
};

export default ShowUser;
