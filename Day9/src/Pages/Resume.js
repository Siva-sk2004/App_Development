import React, { useState } from 'react';
import '../css/Resume.css';
import { LinearProgress } from '@mui/material';

const ResumeUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      alert('Uploaded Succesfully');
      

    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className='Res'>
      <h2>Resume Uploader</h2>
      <br></br>
      <input type="file" onChange={handleFileSelect} accept=".pdf,.doc,.docx" />
      <button onClick={handleUpload}>Upload</button>

    </div>
  );
};

export default ResumeUploader;
