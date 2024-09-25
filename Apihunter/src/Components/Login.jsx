import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login({ setUser, toggleLogin }) {
  const [password, setPassword] = useState('');
  
  const [email, setEmail] = useState('');



  
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios.get('http://localhost:4040/data')
      .then((response) => {
        const users = response.data;
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
          setUser(user);
          alert("Login Successful!");
        } else {
          alert("SignUp First");
        }

        toggleLogin(!navigate('/signup'));
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        alert("Error fetching user data.");
      });
  }

  function handlesignup() {
    navigate("/signup");
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light animate__animated animate__fadeIn">
      <div className="card shadow-lg p-4 w-100 animate__animated animate__zoomIn" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h2 className="text-center mb-4 animate__animated animate__bounceInDown">Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 animate__animated animate__fadeInUp">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>
            <div className="mb-3 animate__animated animate__fadeInUp animate__delay-1s">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 animate__animated animate__pulse animate__infinite">
              Login
            </button>
            <button type="button" className="btn btn-secondary w-100 mt-2 animate__animated animate__fadeInUp animate__delay-2s" onClick={handlesignup}>
              SignUp
            </button>
          </form>
          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none animate__animated animate__fadeInUp animate__delay-3s">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
