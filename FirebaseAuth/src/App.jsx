import React, { useEffect, useState } from "react";
import UserSignup from "./Components/UserSignup";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "animate.css"; // Import Animate.css for animations
import './App.css'; // Custom styles

const auth = getAuth();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("User Logout");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="container text-center p-5 animate__animated animate__fadeIn">
        <h3 className="mb-5 animate__animated animate__zoomIn animate__delay-1s">Create an account to get started</h3>
        <UserSignup />
      </div>
    );
  }

  return (
    <div
      className="container auth-container text-center p-5 rounded shadow-lg animate__animated animate__fadeIn animate__faster"
      style={{
        backgroundColor: "#f0f4f7",
        maxWidth: "600px",
        marginTop: "50px",
      }}
    >
      <h1 className="display-4 mb-4 animate__animated animate__bounceInDown text-info">Welcome!</h1>
      <h2 className=" mb-4 animate__animated animate__fadeInUp text-secondary">नमस्ते, {user.email}</h2>
      <p className=" animate__animated animate__fadeIn animate__delay-1s text-secondary">
        You are now logged in using Google Auth.
      </p>
      <button
        className="btn btn-secondary mt-4 animate__animated animate__pulse"
   
        onClick={() => signOut(auth)}
      >
        Logout
      </button>
    </div>
  );
}

export default App;
