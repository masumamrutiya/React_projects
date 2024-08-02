import React, { useState } from "react";

function Taskform() {
  const [formdata, setform] = useState({
    fname: "",
    lname: "",
    email: "",
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

  return (
    <>
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              value={formdata.fname}
              onChange={FirstNamehandle}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={formdata.lname}
              onChange={LastNamehandle}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              value={formdata.pass}
              onChange={Emailhandler}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>

        <div className="text-bg-dark border border-4 border-primary-subtle my-5 py-4 fs-3">
          User information is :<h2> {formdata.fname}</h2>
          <h2>{formdata.lname}</h2>
          <h2> {formdata.email}</h2>
        </div>
      </div>
    </>
  );
}

export default Taskform;
