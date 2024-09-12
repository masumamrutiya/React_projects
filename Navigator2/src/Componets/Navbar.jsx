import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
                <NavLink
                  className={(e) => {
                    e.isActive ? "kush" : "";
                  }}
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                 
                 <li className="nav-item mx-5 " style={{fontSize:"22px",color:"whitesmoke"}}>   Home      </li>
                </NavLink>
          
             
                <NavLink
                  className={(e) => {
                    e.isActive ? "kush" : "";
                  }}
                  to="/list"
                  style={{ textDecoration: "none" }}
                >
                   <li className="nav-item mx-5 " style={{fontSize:"22px",color:"whitesmoke"}}> list     </li>
                </NavLink>

                <NavLink
                  className={(e) => {
                    e.isActive ? "kush" : "";
                  }}
                  to="/counter"
                  style={{ textDecoration: "none" }}
                >
                   <li className="nav-item mx-5 " style={{fontSize:"22px",color:"whitesmoke"}}> Counter     </li>
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