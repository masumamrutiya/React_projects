import { useState } from "react";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Singup from "./Components/Singup";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);


  
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {" "}
          <Navbar user={user}
          //  onLogout={handleLogout}
            />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Navbar user={user}
            />
          <Singup toggleLogin={toggleLogin} />{" "}
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar user={user}
           />{" "}
          <Login setUser={setUser} toggleLogin={toggleLogin} />{" "}
        </>
      ),
    },
  ]);

  return (
    <>
      {/* <Navbar/> */}

      <RouterProvider router={router} />
    </>
  );
}

export default App;
