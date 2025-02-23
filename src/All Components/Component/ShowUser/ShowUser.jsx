import { Link, useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { MdLibraryAddCheck } from "react-icons/md";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

const ShowUser = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Searching for:", search); // Check the search value
    fetch(`${import.meta.env.VITE_BASE_URL}/UserData?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched users:", data); // Check the data returned from the server
        setUsers(data);
      });
  }, [search]);

  const DeleteData = (_id) => {
    fetch(`${import.meta.env.VITE_BASE_URL}/UserData/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Data Deleted successfully");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  return (
    <>
      <div className="space-y-4 p-4 text-white font-bold shadow-sm">
        <div className="flex space-x-5 mx-3">
          <form
            className="flex gap-4 items-center w-full"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              placeholder="Search"
              name="search"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 text-black"
            />
            <input
              type="submit"
              value="submit"
              className="bg-green-500 py-1 px-3 rounded-md"
            />
          </form>
        </div>

        {users && users.length > 0 ? (
          users.map((user, index) => (
            <section
              key={user._id}
              className="bg-pink-900 p-4 border border-gray-300 shadow-md justify-center bg-no-repeat bg-cover bg-center rounded-lg relative"
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
                      </button>
                    </span>
                  </Link>
                  <br />
                  <span>
                    <button
                      onClick={() => DeleteData(user._id)}
                      className="flex items-center justify-center space-x-2 p-2 bg-red-500 hover:bg-red-900 text-white rounded"
                    >
                      <MdDeleteForever className="h-7 w-7" />
                      Delete
                    </button>
                  </span>
                </div>
              </div>
            </section>
          ))
        ) : (
          <p>No users Found</p>
        )}
      </div>
      <span className="flex justify-center my-4 bg-yellow-600 text-white">
        <a href="/">Go Home</a>
      </span>
    </>
  );
};

export default ShowUser;
