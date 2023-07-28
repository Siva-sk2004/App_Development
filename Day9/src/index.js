import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RegisterFormValidation from './Pages/Register';
import SignInFormValidation from './Pages/SignIn';
import Dashboard from './Pages/Dashboard';
import ResponsiveAppBar from './Pages/Navbar';
import { BrowserRouter } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';
import JobPostingForm from './Pages/PostJobs';
import User from './Pages/User';
import Home from './Pages/Home';
import App1 from './App1';
import AdminAppBar from './AdminPage/AdminNavBar';
import C_HelpCentre from './CompanyPage/C_HelpCentre';
import C_Home from './CompanyPage/C_Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <App1/>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
