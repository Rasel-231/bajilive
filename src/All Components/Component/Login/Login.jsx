// Login.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { loginUser} = useContext(AuthContext);  // Get login method and states
  const Navigate=useNavigate();

  const handleForms = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Call the loginUser function from AuthContext to log the user in
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log('User logged in successfully:', user);
        e.target.reset();
        Navigate("/")
      })
      .catch((error) => {
        console.error('Error logging in:', error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleForms} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>

           
           

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="text-center mb-2">
            <p>Are you a new member? <Link to="/register"><span className="text-orange-400">Register</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
