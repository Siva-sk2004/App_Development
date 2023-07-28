import React, { useState } from 'react';
import CompanyAppBar from './CompanyNavBar';

const C_JobSearch = () => {
  // State variables to hold the search query for JobTitle and Location
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  // Function to handle the form submission and perform the search action
  const handleSearch = () => {
    // Here, you can use the jobTitle and location state variables to perform the search action.
    // For demonstration purposes, let's just log the search query to the console.
    console.log('Search Query:', jobTitle, location);
  };

  return (
    <div>
      <CompanyAppBar />

      <div style={{ backgroundColor: 'rgb(19, 19, 92)' }}>
        <div className='jb1'>
          <h4 style={{ textAlign: 'center', padding: '30px', color: 'white' }}>Job Searching</h4>
        </div>
        <div className='jbsearch' style={{ display: 'flex', padding: '0 20px 30px 20px', justifyContent: 'center', gap: '30px' }}>
          <div>
            <input type='text' placeholder='JobTitle' value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          </div>
          <div>
            <input type='text' placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>

          <div>
            <button style={{ marginTop: '2px', borderRadius: '15px', height: '30px' }} onClick={handleSearch}>
              Find Job
            </button>
          </div>

        </div>
        <div>
          <p style={{ textAlign: 'center', fontSize: '18px', paddingBottom: '30px', color: 'white' }}> Search - It Takes only a few seconds</p>
        </div>
      </div>

    </div>
  );
};

export default C_JobSearch;
