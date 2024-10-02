import React, { useState } from "react";
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { app } from "../firbase";
import "animate.css"; 

function WriteData() {
  const navigate = useNavigate();
  const [inpData1, setInpData1] = useState("");
  const [inpData2, setInpData2] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'details/users');
    const newDbRef = push(dbRef);
    set(newDbRef, {
      firstName: inpData1,
      lastName: inpData2,
    })
      .then(() => {
        alert("Data Saved Successfully");
        navigate("/read");
      })
      .catch(() => alert("Error saving data!"));
  };

  return (
    <>
      <div
        className="container animate__animated animate__fadeIn"
        style={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
          maxWidth: "500px",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <h1 className="text-center animate__animated animate__bounceInDown" style={{ color: "#333", marginBottom: "30px", fontWeight: "bold" }}>
          Write Data
        </h1>

        <div className="card p-4" style={{ borderRadius: '15px', border: 'none', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
          <div className="col mb-3">
            <input
              type="text"
              className="form-control animate__animated animate__pulse animate__infinite"
              placeholder="Enter First Name"
              value={inpData1}
              onChange={(e) => setInpData1(e.target.value)}
              style={{
                borderRadius: '10px',
                padding: "15px",
                border: "2px solid #007bff",
                boxShadow: "0 5px 10px rgba(0, 123, 255, 0.1)",
              }}
            />
          </div>

          <div className="col mb-3">
            <input
              type="text"
              className="form-control animate__animated animate__pulse animate__infinite"
              placeholder="Enter Last Name"
              value={inpData2}
              onChange={(e) => setInpData2(e.target.value)}
              style={{
                borderRadius: '10px',
                padding: "15px",
                border: "2px solid #28a745",
                boxShadow: "0 5px 10px rgba(40, 167, 69, 0.1)",
              }}
            />
          </div>

          <div className="col text-center">
            <button
              className="btn btn-primary animate__animated animate__rubberBand"
              onClick={saveData}
              style={{
                background: "linear-gradient(90deg, #007bff 0%, #00c3ff 100%)",
                padding: '12px 25px',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                fontWeight: 'bold',
                boxShadow: '0 5px 10px rgba(0, 123, 255, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.boxShadow = '0 7px 15px rgba(0, 123, 255, 0.5)')}
              onMouseOut={(e) => (e.target.style.boxShadow = '0 5px 10px rgba(0, 123, 255, 0.3)')}
            >
              Save Data
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WriteData;
