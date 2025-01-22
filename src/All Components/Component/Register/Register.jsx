// Register.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';  // Import context

const Register = () => {
  const { creatUser} = useContext(AuthContext);
  const Navaigate=useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Call creatUser to register the user
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log('User created successfully:', user);
        e.target.reset();
        Navaigate("/username")
      })
      .catch((error) => {
        console.error('Error creating user:', error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleForm} className="card-body">
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="text-center mb-2">
            <p>Already have an account? <Link to="/login"><span className="text-orange-400">Login</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
