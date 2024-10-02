import React, { useState } from 'react';
import 'animate.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import logo from '../Assets/ms.png'

function Signup() {
  const [data, setData] = useState({ name: "", email: "", password: "" });


  
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`http://localhost:4040/data`, data).then((res) => {
      console.log(res.data);

      navigate("/login");
    });


  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow-lg p-4 w-100 animate__animated animate__fadeInDown animate__faster" style={{ maxWidth: "400px" }}>
          <div className="card-body">
            <h2 className="text-center mb-4 animate__animated animate__bounceIn animate__delay-1s">Sign-Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 animate__animated animate__fadeIn animate__delay-2s">
                <label htmlFor="email" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter your Name"
                  value={data.name}
                  onChange={(e)=>{
                   setData({...data,name:e.target.value})
                  }}
                />
              
              </div>
              <div className="mb-3 animate__animated animate__fadeIn animate__delay-2s">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={data.email}
                  onChange={(e)=>{
                   setData({...data,email:e.target.value})
                  }}
                />
              
              </div>
              <div className="mb-3 animate__animated animate__fadeIn animate__delay-3s">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={data.password}
                  onChange={(e)=>{
                   setData({...data,password:e.target.value})
                  }}
                />
              </div>

              <button
                className="btn btn-primary w-100 animate__animated animate__pulse animate__infinite"
              >
                Sign Up
              </button>
            </form>
       
          </div>
        </div>
      </div>

      {/* <img src={logo} alt="" srcset="" /> */}

    </>
  );
}

export default Signup;
