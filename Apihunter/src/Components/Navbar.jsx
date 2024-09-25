import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm animate__animated animate__fadeInDown animate__faster">
        <div className="container">
   
          <a className="navbar-brand fw-bold" href="#">
            <i className="bi bi-box-seam animate__animated animate__rubberBand"></i>{" "}
            Navbar
          </a>

       

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/signup"
                  className="nav-link text-white active fs-5 animate__animated animate__fadeInLeft"
                  aria-current="page"
                >
                  <i className="bi bi-person-plus"></i> SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link text-white active fs-5 animate__animated animate__fadeInLeft animate__delay-1s"
                  aria-current="page"
                >
                  <i className="bi bi-box-arrow-in-right"></i> Login
                </Link>
              </li>
            </ul>

            {/*  Logout Button */}
            {user && (
              <div className="d-flex align-items-center ms-3 animate__animated animate__fadeInRight">
                <span className="navbar-text me-3">Welcome {user.name}</span>
                <span className="navbar-text me-3">Email : {user.email}</span>
                {/* <button
                  className="btn btn-outline-danger animate__animated animate__heartBeat"
                  onClick={onLogout}
                >
                  Logout
                </button> */}
              </div>
            )  }
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
