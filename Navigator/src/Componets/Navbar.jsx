import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assests/rnw-logo.jpg"

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}
          <img src={logo} alt="" srcset="" className=" px-5 " style={{width:"330px"}}/>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
                <NavLink
                  className={(e) => {
                    e.isActive ? "Nav" : "";
                  }}
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                 
                 <li className="nav-item mx-5 text-dark " style={{fontSize:"22px"}}>   Home      </li>
                </NavLink>
          
             
                <NavLink
                  className={(e) => {
                    e.isActive ? "kush" : "";
                  }}
                  to="/about"
                  style={{ textDecoration: "none" }}
                >
                   <li className="nav-item mx-5 text-dark" style={{fontSize:"22px"}}> About     </li>
                </NavLink>
            
             
                <NavLink
                  className={(e) => {
                    e.isActive ? "kush" : "";
                  }}
                  to="/Course"
                  style={{ textDecoration: "none" }}
                >
                  <li className="nav-item mx-5 text-dark" style={{fontSize:"22px"}}> Courses   </li>
                </NavLink>
            
           
                <NavLink
                  className={(e) => {
                    e.isActive ? "kush" : "";
                  }}
                  to="/Location"
                  style={{ textDecoration: "none" }}
                >
                    <li className="nav-item mx-5 text-dark" style={{fontSize:"22px"}}>Location</li> 
                </NavLink>
        
            
                <NavLink
                  className={(e) => {
                    e.isActive ? "kush" : "";
                  }}
                  to="/Contact"
                  style={{ textDecoration: "none" }}
                >
                      <li className="nav-item mx-5 text-dark" style={{fontSize:"22px"}}>   Contact-US </li>
                
                </NavLink>
            
             
            </ul>

            <button className="btn btn-outline-success" type="submit">
              login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
