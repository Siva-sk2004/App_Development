import { useState } from "react";
import React from "react";
import AdminRegisterForm from "./AdminPage/AdminRegister";
import AdminSignInForm from "./AdminPage/AdminLogin";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SeekerSignInForm from "./JobSeekerPage/JobSeekerLogin";
import SeekerRegisterForm from "./JobSeekerPage/JobSeekerRegister";

function App1() {
    return (
      <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="SeekerSign" element={<SeekerSignInForm/>}/>
      <Route path="SeekerRegister" element={<SeekerRegisterForm/>}/>
      </Routes>
  
      </div>
    );
  }
  
  export default App1;
