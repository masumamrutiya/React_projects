// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Home from './Componets/Home'
import Navbar from "./Componets/Navbar";
import About from "./Componets/About";
import Courses from "./Componets/Courses";
import Locat from "./Componets/Locat";
import Contact from "./Componets/Contact";
import Cours from "./Componets/Cours";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:  <>  <Navbar/> <Home/> </>,
    },
    {
      path: "/about",
      element:  <>  <Navbar/> <About/> </>,
    },
    {
      path: "/Course",
      element:  <>  <Navbar/>  <Cours/></>,
    },
    {
      path: "/location",
      element : <>  <Navbar/> <Locat/></>
    },
    {
     path:"/Contact",
     element:<>  <Navbar/> <Contact/></>
    }
  ]);



  return (
    <>
      {/* <h1>App.......</h1> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
