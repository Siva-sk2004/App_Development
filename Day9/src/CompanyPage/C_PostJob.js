import React, { useState } from 'react';
import CompanyAppBar from './CompanyNavBar';
import '../CompanyPage/C_PostJob.css';
import VerticalLinearStepper from './VerticalLinearStepper';
import { Label } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const C_PostJob = () => {
  const [jobData, setJobData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    email: '',
    contactNo: '',
    salary: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setJobData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!jobData.jobTitle.trim()) {
      errors.jobTitle = 'Job title is required';
    }
    if (!jobData.companyName.trim()) {
      errors.companyName = 'Company name is required';
    }
    if (!jobData.location.trim()) {
      errors.location = 'Location is required';
    }
    if (!jobData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(jobData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!jobData.contactNo.trim()) {
      errors.contactNo = 'Contact number is required';
    }
    if (!jobData.salary.trim()) {
      errors.salary = 'Salary is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Form data is valid, you can submit it to the server here
      console.log('Form data:', jobData);
      // Clear the form after successful submission if needed
      setJobData({
        jobTitle: '',
        companyName: '',
        location: '',
        email: '',
        contactNo: '',
        salary: '',
      });
    }
  };

  return (
    <div>
      <CompanyAppBar />
      <div>
      <div className='p1'>
      <center>
        <h5 style={{ padding: '15px 0 15px 0px' }}>Post your job - It only takes a few seconds</h5>
      </center>
    </div>

    <div className='Stepper'>
      <div style={{ padding: '50px' }}>
        <VerticalLinearStepper />
      </div>
      <div>
        <img src='images/5-2-jobs-picture-thumb.png' style={{ width: '430px' }}></img>
      </div>
    </div>
        <div className='Jbpostform'>
          <div>
            <h2 style={{ textAlign: 'center', color: 'blue' }}>Job Posting Form</h2>
          </div>
          <div className='TextField' style={{ padding: '20px 90px 20px 90px' }}>
            <form onSubmit={handleSubmit}>
              <Box
                component="div"
                sx={{
                  padding: '30px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '20px',
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="jobTitle"
                  label="Job Title"
                  variant="outlined"
                  required
                  value={jobData.jobTitle}
                  onChange={handleInputChange}
                  error={!!formErrors.jobTitle}
                  helperText={formErrors.jobTitle}
                />

                <TextField id="companyName" label="CompanyName" variant="outlined" required 
                value={jobData.companyName}
                onChange={handleInputChange}
                error={!!formErrors.companyName}
                helperText={formErrors.companyName}/>



              <TextField id="location" label="Location" variant="outlined" required
              value={jobData.location}
                  onChange={handleInputChange}
                  error={!!formErrors.location}
                  helperText={formErrors.location}/>


              <TextField id="email" label="Email" variant="outlined" required
              value={jobData.email}
                  onChange={handleInputChange}
                  error={!!formErrors.email}
                  helperText={formErrors.email}/>


              <TextField id="contactNo" label="Contact No" variant="outlined" required
              value={jobData.contactNo}
                  onChange={handleInputChange}
                  error={!!formErrors.contactNo}
                  helperText={formErrors.contactNo}/>

                  <TextField id="salary" label="Salary" variant="outlined" required
                  value={jobData.salary}
                      onChange={handleInputChange}
                      error={!!formErrors.salary}
                      helperText={formErrors.salary}/>

              </Box>
              <center><Button type="submit" style={{ width: '120px', height: '42px' ,backgroundColor:'blue',color:'white',borderRadius:'20px',marginBottom:'30px'}}>
                Post Job
              </Button></center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C_PostJob;











             