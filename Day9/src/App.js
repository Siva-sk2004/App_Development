import { useState } from "react";
import React from "react";
import './App.css';
import ResponsiveAppBar from "./Pages/Navbar";
import RegisterFormValidation from "./Pages/Register";
import SignInFormValidation from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import FindJobs from "./Pages/FindJobs";
import ResumeUploader from "./Pages/Resume";
import PostJobs from "./Pages/PostJobs";
function App() {
  return (
    <div className="App">
    <ResponsiveAppBar/>
    <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path="SignIn" element={<SignInFormValidation/>}/>
    <Route path="Register" element={<RegisterFormValidation/>}/>
    <Route path="FindJobs" element={<FindJobs/>}/>
    <Route path="PostJobs" element={<PostJobs/>}/>
    <Route path="Resume" element={<ResumeUploader/>}/>
    <Route path="Sign-in" element={<Dashboard/>}/>
    <Route path="reg" element={<FindJobs/>}/>
    </Routes>

    </div>
  );
}

export default App;
