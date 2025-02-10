const User = () => {
  const uploadData = (e) => {
    e.preventDefault();
    form.reset()
    const form = e.target;
    const UserName = form.UserName.value;
    const password = form.password.value;
    const email = form.email.value;
    const fullname = form.fullname.value;
    const date = form.date.value;
    const userInfo = { UserName, password, email, fullname, date };

    fetch("https://server-one-mocha.vercel.app/UserData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // Check for successful response
        if (data.message === "Username already exists.") {
          alert("This username is already taken. Please try again with a different username.");
        } else if (data && data.insertedId) {
          alert("Data uploaded successfully!");
        } else {
          alert("Something went wrong, please try again.");
        }
      })
      .catch((err) => {
        // Handle errors like network issues
        console.error("Error:", err);
        alert("Error uploading data, please try again.");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={uploadData} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder="UserName"
              name="UserName"
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
              placeholder="password"
              name="password"
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
              name="email"
              placeholder="email"
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
              placeholder="Full Name"
              name="fullname"
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

export default User;
