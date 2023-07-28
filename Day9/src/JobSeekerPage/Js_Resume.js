import React, { useState } from 'react';
import { LinearProgress } from '@mui/material';
import SeekerAppBar from './JobSeekerNavBar';

const JsResumeUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      alert('Uploaded Successfully');
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div>
      <SeekerAppBar />
      <div
        className='Res'
        style={{
          textAlign: 'center',
          padding: '60px 0 70px 0',
          backgroundColor: 'rgb(19, 19, 92)',
          color: 'white'
        }}
      >
        <h2>Resume Uploader</h2>
        <br></br>
        <input type="file" onChange={handleFileSelect} accept=".pdf,.doc,.docx" />
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div>
        <h4 style={{ padding: '30px 0 30px 50px' }}> Or else Create Your Own Resume :</h4>
      </div>
      <div>
        <center>
          <a
            href='https://www.resume-now.com/lp/free-templates.aspx?utm_source=google&utm_medium=sem&utm_campaign=174127281&utm_term=free%20resume%20now&network=g&device=c&adposition=&adgroupid=14195414721&placement=&gad=1&gclid=Cj0KCQjwn_OlBhDhARIsAG2y6zOJZvi8mEvCljuKnjF1KQolxR3T_33Lob9chEg2JP7O1mx8swSVcvwaAtasEALw_wcB'
            style={{ fontSize: '25px' }}
            target="_blank" // This opens the link in a new tab
          >
            Create Own Resume
          </a>
          <p>After Resume creation , Upload the file in FileUploader</p>
        </center>
      </div>
    </div>
  );
};

export default JsResumeUploader;
