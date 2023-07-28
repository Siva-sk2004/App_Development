import { useState } from "react";
import React from "react";

// import AdminRegisterForm from "./AdminPage/AdminRegister";
// import AdminSignInForm from "./AdminPage/AdminLogin";
// import loginReducer from "./JobSeekerPage/loginReducer";
import JobSeekerLogin from "./JobSeekerPage/JobSeekerLogin";

import Signup from "./JobSeekerPage/JobSeekerRegister";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SeekerSignInForm from "./JobSeekerPage/JobSeekerLogin";
import SeekerRegisterForm from "./JobSeekerPage/JobSeekerRegister";
import CompanySignInForm from "./CompanyPage/CompanyLogin";
import CompanyRegisterForm from "./CompanyPage/CompanyRegister";
import AdminAppBar from "./AdminPage/AdminNavBar";
import SeekerAppBar from "./JobSeekerPage/JobSeekerNavBar";
import CompanyAppBar from "./CompanyPage/CompanyNavBar";
import C_HelpCentre from "./CompanyPage/C_HelpCentre";
import Js_HelpCentre from "./JobSeekerPage/Js_HelpCentre";
import C_Home from "./CompanyPage/C_Home";
import Js_Home from "./JobSeekerPage/Js_Home";
import JsResumeUploader from "./JobSeekerPage/Js_Resume";
import Js_JobSearch from "./JobSeekerPage/Js_JobSearch";
import C_PostJob from "./CompanyPage/C_PostJob";
import C_JobSearch from "./CompanyPage/C_JobSearch";
import Js_AppliedJobs from "./JobSeekerPage/Js_AppliedJobs";
import C_DataAnalysis from "./CompanyPage/C_DataAnalysis";
import JobSeekers from "./AdminPage/JobSeekers";
import Companys from "./AdminPage/Companys";
import PostedJobs from "./AdminPage/PostedJobs";
import Admins from "./AdminPage/Admins";
import Data_Progress from "./AdminPage/Progress";
import store from "./JobSeekerPage/Store";
import { Provider } from "react-redux";
import FeedForm from "./JobSeekerPage/FeedForm";

function App1() {
    return (
      <div className="App">

      <Provider store = {store}>

      <Routes>
      <Route path="/" element={<Home/>} />

      <Route path="jshome" element={<Js_Home/>} />

      <Route path="re" element={<Signup/>} />
      <Route path="lo" element={<JobSeekerLogin/>} />





      <Route path="Signout" element={<Home/>}/> 
      <Route path="AdminSign" element={<JobSeekers/>}/> 
      <Route path="AdminRegister" element={<JobSeekers/>}/>
      <Route path="AdminLHome" element={<AdminAppBar/>}/>
      <Route path="AdminRHome" element={<AdminAppBar/>}/>

      <Route path="JobSeekers" element={<JobSeekers/>}/>
      <Route path="Companys" element={<Companys/>}/>
      <Route path="PostedJobs" element={<PostedJobs/>}/>
      <Route path="Progress" element={<Data_Progress/>}/>
      <Route path="Admin" element={<Admins/>}/>
      
      
      <Route path="SignOut" element={<Home/>}/> 
      <Route path="SeekerSign" element={<SeekerSignInForm/>}/>
      <Route path="SeekerRegister" element={<SeekerRegisterForm/>}/>
      <Route path="SeekerLHome" element={<Js_Home/>}/>
      <Route path="SeekerRHome" element={<Js_Home/>}/>
      <Route path="Help center" element={<Js_HelpCentre/>}/>
      <Route path="home" element={<Js_Home/>}/>
      <Route path="Resume" element={<JsResumeUploader/>}/>
      <Route path="JobSearch" element={<Js_JobSearch/>}/>
      <Route path="but2SearchJob" element={<Js_JobSearch/>}/>
      <Route path="AppliedJobs" element={<Js_AppliedJobs/>}/>
      <Route path="Feedform" element={<FeedForm/>}/>
      
      <Route path="Logout" element={<Home/>}/>
      <Route path="CompanySign" element={<CompanySignInForm/>}/>
      <Route path="CompanyRegister" element={<CompanyRegisterForm/>}/>
      <Route path="CompanyLHome" element={<C_Home/>}/>
      <Route path="CompanyRHome" element={<C_Home/>}/>
      <Route path="Help Centre?" element={<C_HelpCentre/>}/>
      <Route path="HomePage" element={<C_Home/>}/>
      <Route path="SearchJob" element={<C_JobSearch/>}/>
      <Route path="PostJob" element={<C_PostJob/>}/>
      <Route path="but1PostJob" element={<C_PostJob/>}/>
      <Route path="Data_Analysis" element={<C_DataAnalysis/>}/>


      </Routes>
      </Provider>
  
      </div>
    );
  }
  
  export default App1;
