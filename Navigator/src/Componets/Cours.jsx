import React from "react";
import Courses from "./Courses";

function Cours() {
  return (
    <>
      <div className="container pt-5">
        <div className="row pb-4">
          <div className="col-3 ">
            <Courses />{" "}
          </div>
          <div className="col-3">
            <Courses />
          </div>
          <div className="col-3">
            <Courses />
          </div>
          <div className="col-3">
            <Courses />
          </div>
        </div>


        <div className="row pb-4">
          <div className="col-3 pb-4">
            <Courses />{" "}
          </div>
          <div className="col-3">
            <Courses />
          </div>
          <div className="col-3">
            <Courses />
          </div>
          <div className="col-3">
            <Courses />
          </div>
        </div>


        <div className="row">
          <div className="col-3">
            <Courses />{" "}
          </div>
          <div className="col-3">
            <Courses />
          </div>
          <div className="col-3">
            <Courses />
          </div>
          <div className="col-3">
            <Courses />
          </div>
        </div>


      </div>
    </>
  );
}

export default Cours;
