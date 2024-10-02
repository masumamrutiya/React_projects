import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDatabase, ref, child, get, update } from "firebase/database";
import { app } from "../firbase";
import "animate.css";

function Updateuser() {
  const { userId } = useParams(); 
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });

  useEffect(() => {
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, `details/users/${userId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        setUserData(snapshot.val());
      } else {
        console.log("No data available");
      }
    });
  }, [userId]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const updates = {};
    updates[`details/users/${userId}`] = userData;

    update(ref(db), updates)
      .then(() => {
        console.log("Data updated successfully");
        navigate("/read"); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container animate__animated animate__fadeIn" style={{ maxWidth: '600px', marginTop: '20px', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', padding: '30px', backgroundColor: '#f8f9fa' }}>
      <h1 className="text-center text-primary animate__animated animate__bounceIn">Update User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            className="form-control"
            style={{ border: '2px solid #007bff', borderRadius: '8px' }}
          />
        </div>
        <div className="form-group mb-3">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            className="form-control"
            style={{ border: '2px solid #28a745', borderRadius: '8px' }}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 animate__animated animate__pulse animate__infinite" style={{ borderRadius: '8px' }}>
          Update
        </button>
      </form>
    </div>
  );
}

export default Updateuser;
