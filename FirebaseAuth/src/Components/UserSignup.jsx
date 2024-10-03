import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import "animate.css"; // Import Animate.css

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("User Signed Up Successfully"))
      .catch((error) => alert(error.message));
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).catch((error) => alert(error.message));
  };

  return (
    <div
      className="signup-container p-4 my-4 rounded shadow-lg bg-light animate__animated animate__fadeIn"
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1 className="text-center mb-4 animate__animated animate__zoomIn">Create an Account</h1>

      <div className="form-group mb-3">
        <label className="form-label">Email Address</label>
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="form-control animate__animated animate__fadeInLeft animate__delay-1s"
          style={{
            transition: "all 0.3s ease", 
            border: "2px solid #ced4da",
          }}
          onFocus={(e) => (e.target.style.border = "2px solid #34A853")}
          onBlur={(e) => (e.target.style.border = "2px solid #ced4da")} 
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group mb-4">
        <label className="form-label">Password</label>
        <input
          type="password"
          required
          placeholder="Enter your password"
          className="form-control animate__animated animate__fadeInRight animate__delay-1s"
          style={{
            transition: "all 0.3s ease",
            border: "2px solid #ced4da",
          }}
          onFocus={(e) => (e.target.style.border = "2px solid #34A853")}
          onBlur={(e) => (e.target.style.border = "2px solid #ced4da")}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid gap-2">
        <button
          className="btn mb-2 animate__animated animate__pulse animate__infinite"
          style={{
            backgroundColor: "#4285F4",
            color: "#fff",
            height: "45px", 
          }}
          onClick={signInWithGoogle}
        >
          Sign In with Google
        </button>

        <button
          className="btn btn-primary animate__animated animate__tada"
          style={{
            backgroundColor: "#34A853",
            borderColor: "#34A853",
            height: "45px", 
          }}
          onClick={signupUser}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default UserSignup;
