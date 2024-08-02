import React, { useState } from "react";

function Taskform() {
  const [formdata, setform] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    gender: "",
    Dob: "",
    SetUser: "",
    que: "",
    pass: "",
  });
  //   console.log(email.fname)

  function FirstNamehandle(e) {
    setform({
      ...formdata,
      fname: e.target.value,
    });
  }

  function LastNamehandle(e) {
    setform({
      ...formdata,
      lname: e.target.value,
    });
  }
  function Emailhandler(e) {
    setform({
      ...formdata,
      email: e.target.value,
    });
  }
  function Phonehandler(e) {
    setform({
      ...formdata,
      phone: e.target.value,
    });
  }
  function genderhandler(e) {
    setform({
      ...formdata,
      gender: e.target.value,
    });
  }

  function Dobhandler(e) {
    setform({
      ...formdata,
      Dob: e.target.value,
    });
  }

  function Setusernamehandle(e) {
    setform({
      ...formdata,
      SetUser: e.target.value,
    });
  }

  function Quelificationhandle(e) {
    setform({
      ...formdata,
      que: e.target.value,
    });
  }

  function Setpasswordhandle(e) {
    setform({
      ...formdata,
      pass: e.target.value,
    });
  }

  return (
    <>
      <div className="container mt-5 w-75 p-5 ">
        <h1 className="text-center mb-4">
          <i>
            <mark>Registration Form</mark>
          </i>
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ backgroundColor: "#89ABE3FF" }}
          className="p-5"
        >
          <div className="row mb-3">
            <div className="col-md-6">
              <label
                className="form-label   m-1"
                style={{ color: "black", fontSize: "20px" }}
              >
                <b> First Name :</b>
              </label>
              <input
                type="text"
                placeholder="Enter your First-Name"
                value={formdata.fname}
                onChange={FirstNamehandle}
              />
            </div>

            <div className="col-md-6">
              <label
                className="form-label m-1"
                style={{ color: "black", fontSize: "20px" }}
              >
                <b> Last Name :</b>
              </label>
              <input
                type="text"
                placeholder="Enter your Last-Name"
                value={formdata.lname}
                onChange={LastNamehandle}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div class="col-md-6">
              <label
                for="exampleInputEmail1"
                class="form-label  m-1"
                style={{ color: "black", fontSize: "20px" }}
              >
                <b> Email :</b>
              </label>
              <input
                type="email"
                placeholder="Enter your Mail"
                aria-describedby="emailHelp"
                value={formdata.email}
                onChange={Emailhandler}
              />
            </div>

            <div className="col-md-6">
              <label
                className="form-label m-1"
                style={{ color: "black", fontSize: "20px" }}
              >
                <b>Phone Number : </b>
              </label>
              <input
                type="tel"
                placeholder="Enter your Number"
                value={formdata.phone}
                onChange={Phonehandler}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label
                className="form-label m-1"
                style={{ color: "black", fontSize: "20px" }}
              >
                <b> Gender :</b>
              </label>
              <input
                type="radio"
                name="gender"
                value={formdata.gender}
                onChange={genderhandler}
                style={{ color: "whitesmoke" }}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value={formdata.gender}
                onChange={genderhandler}
              />{" "}
              Female
            </div>

            <div className="col-md-6">
              <label
                className="form-label  m-1"
                style={{ color: "black", fontSize: "20px" }}
              >
                <b>Date-of-birth : </b>
              </label>
              <input type="date" value={formdata.Dob} onChange={Dobhandler} />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label
                className="form-label  m-1"
                style={{ color: "black", fontSize: "20px" }}
              >
                <b> Address :</b>
              </label>
              <input
                type="text"
                placeholder="Enter your Address"
                value={formdata.SetUser}
                onChange={Setusernamehandle}
              />
            </div>

            <div className="col-md-6">
              <label
                className="form-label m-1"
                style={{ color: "black", fontSize: "20px" }}
              >
                <b> Quelification : </b>
              </label>
              <input
                type="text"
                placeholder="Enter your Quelification"
                value={formdata.que}
                onChange={Quelificationhandle}
              />
            </div>
          </div>

          <div className="col-md-6">
            <label
              className="form-label m-1"
              style={{ color: "black", fontSize: "20px" }}
            >
              {" "}
              <b> Password : </b>
            </label>
            <input
              type="password"
              placeholder="Enter The Password"
              value={formdata.pass}
              onChange={Setpasswordhandle}
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary w-5"
            style={{ marginLeft: "62%" }}
          >
            Register
          </button>
        </form>

        <div className="mt-5 p-4 bg-dark text-white border border-primary rounded  ">
          <h3 className="text-center">
            <i>
              <u>
                <mark>Student Information</mark>
              </u>
            </i>
          </h3>
          <div className="text-center">
            <p>
              <b>
                <u>First Name : {formdata.fname}</u>
              </b>
            </p>
            <p>
              <b>
                <u>Last Name : {formdata.lname}</u>
              </b>
            </p>
            <p>
              <b>
                <u>Email : {formdata.email}</u>
              </b>
            </p>
            <p>
              <b>
                <u>Phone Number : {formdata.phone}</u>
              </b>
            </p>
            <p>
              <b>
                <u>Date of Birth : {formdata.Dob}</u>
              </b>
            </p>
            <p>
              <b>
                <u>Address : {formdata.SetUser}</u>
              </b>
            </p>
            <p>
              <b>
                <u>Qualification : {formdata.que}</u>
              </b>
            </p>
            <p>
              <b>
                <u>Password : {formdata.pass}</u>
              </b>
            </p>
            <p>
              <b>
                <u>Gender : {formdata.gender}</u>
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Taskform;
