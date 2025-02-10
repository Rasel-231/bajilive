import { Link, useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { MdLibraryAddCheck } from "react-icons/md";
import { useState } from "react";

const ShowUser = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const DeleteData = (_id) => {
    fetch(`https://server-j567ib6mn-halifaxs-projects.vercel.app/userData/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json(res))
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Data Deleted successfully");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };

  return (
    <>


      <div className="flex space-y-4 p-4 text-white font-bold shadow-sm">
        {users && users.length > 0 ? (
          users.map((user, index) => (
            <section
              className="p-4 border border-gray-300 shadow-md  justify-center bg-no-repeat  bg-cover bg-center rounded-lg relative"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co.com/R40Ks2yG/maxresdefault.jpg)",
              }}
            >
              <p>SI:{index + 1}</p>
              <div className="grid grid-cols-2">
                <div>
                  <p>User Name:{user.UserName}</p>
                  <p>Password:{user.password}</p>
                  <p>Email:{user.email}</p>
                  <p>Full Name:{user.fullname}</p>
                  <p>BirthDay:{user.date}</p>
                </div>
                <div className="mx-auto mr-6">
                  <Link to={`/update/${user._id}`}>
                    <span>
                      <button className="flex items-center space-x-2 p-2 bg-indigo-500 hover:bg-fuchsia-500 text-white rounded">
                        <MdLibraryAddCheck className="h-6 w-6" />
                        Update
                      </button>{" "}
                    </span>
                  </Link>
                  <br />
                  <span>
                    <button
                      onClick={() => DeleteData(user._id)}
                      className="flex items-center justify-center space-x-2 p-2 bg-red-500 hover:bg-red-900 text-white rounded"
                    >
                      {" "}
                      <MdDeleteForever className="h-7 w-7" />
                      Delete
                    </button>
                  </span>
                </div>
              </div>
            </section>
          ))
        ) : (
          <p>No users Found </p>
        )}
      </div>
      <span className="flex justify-center my-4">
        <a href="/">Go Home</a>
      </span>
    </>
  );
};

export default ShowUser;
