import { child, get, getDatabase, ref, remove } from "firebase/database";
import React, { useState } from "react";
import { app } from "../firbase";
import { useNavigate } from "react-router-dom";
import "animate.css"; 

function Read() {
  const [userArray, setUserArray] = useState([]);
  const navigate = useNavigate();

  const dispData = async () => {
    const dbRef = ref(getDatabase(app));
    await get(child(dbRef, `details/users`)).then((snapshot) => {
      if (snapshot.exists()) {
        setUserArray(Object.entries(snapshot.val()));
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  };

  const handleEdit = (userId) => {
    navigate(`/edit-user/${userId}`);
  };

  const handleDelete = async (userId) => {
    const db = getDatabase(app);
    const userRef = ref(db, `details/users/${userId}`);

    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await remove(userRef); 
        setUserArray((prev) => prev.filter(([id]) => id !== userId)); 
        console.log(`User with ID: ${userId} deleted successfully`);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className="container animate__animated animate__fadeIn" style={{ padding: '20px', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', backgroundColor: '#f8f9fa' }}>
      <h1 className="text-center text-primary animate__animated animate__bounceIn">User List</h1>
      <button className="btn btn-primary mb-3 animate__animated animate__zoomIn" onClick={dispData}>
        Display Data
      </button>
      <ul className="list-group">
        {userArray.map(([userId, user], index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeInUp" style={{ transition: 'transform 0.3s', cursor: 'pointer' }}>
            <span>{user.firstName} {user.lastName}</span>
            <div>
              <button
                className="btn btn-success me-2"
                onClick={() => handleEdit(userId)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(userId)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Read;
