import React, { useState } from 'react';
import SeekerAppBar from './JobSeekerNavBar';

const Js_JobSearch = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobResults, setJobResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Sample data store for job search results
  const sampleResults = [
    { id: 1, title: 'Software Engineer', company: 'ABC Tech', location: 'New York' },
    { id: 2, title: 'Frontend Developer', company: 'XYZ Solutions', location: 'San Francisco' },
    { id: 3, title: 'Data Scientist', company: 'Data Co.', location: 'Chicago' },
    { id: 4, title: 'Senior Software Engineer', company: 'Tech Solutions', location: 'Los Angeles' },
    { id: 5, title: 'Backend Developer', company: 'Web Services', location: 'Seattle' },
    { id: 6, title: 'Machine Learning Engineer', company: 'AI Innovations', location: 'New York' },
    { id: 7, title: 'Frontend Engineer', company: 'Web Devs', location: 'San Francisco' },
    { id: 8, title: 'Data Analyst', company: 'Analytics Co.', location: 'Chicago' },
    { id: 9, title: 'Product Manager', company: 'Tech Leaders', location: 'San Francisco' },
    { id: 10, title: 'UX Designer', company: 'Design Co.', location: 'Los Angeles' },
    { id: 11, title: 'DevOps Engineer', company: 'Cloud Services', location: 'Seattle' },
    { id: 12, title: 'Backend Software Engineer', company: 'Tech Innovators', location: 'New York' },
    { id: 13, title: 'Full Stack Developer', company: 'Web Wizards', location: 'San Francisco' },
    { id: 14, title: 'Data Engineer', company: 'Data Solutions', location: 'Chicago' },
    { id: 15, title: 'Software Architect', company: 'Software Systems', location: 'Los Angeles' },
    { id: 16, title: 'Frontend Designer', company: 'Web Creators', location: 'Seattle' },
    { id: 17, title: 'AI Research Scientist', company: 'AI Labs', location: 'New York' },
    { id: 18, title: 'Database Administrator', company: 'Data Management', location: 'Chicago' },
    { id: 19, title: 'Mobile App Developer', company: 'Mobile Solutions', location: 'Los Angeles' },
    { id: 20, title: 'Network Engineer', company: 'Network Experts', location: 'Seattle' },
  
  ];

  const handleSearch = async () => {
    setError('');
    setJobResults([]);
    setLoading(true);

    try {
      // Convert the jobTitle and location to lowercase
      const lowercaseJobTitle = jobTitle.toLowerCase();
      const lowercaseLocation = location.toLowerCase();

      // Simulate the search action by filtering the sampleResults based on the search query
      const filteredResults = sampleResults.filter(
        (job) =>
          job.title.toLowerCase().includes(lowercaseJobTitle) && job.location.toLowerCase().includes(lowercaseLocation)
      );

      // Simulate an API delay for 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setJobResults(filteredResults);
    } catch (error) {
      setError('Error fetching job listings. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SeekerAppBar />
      <div style={{ backgroundColor: 'rgb(19, 19, 92)' }}>
        <div className='jb1'>
          <h4 style={{ textAlign: 'center', padding: '30px', color: 'white' }}>Job Searching</h4>
        </div>
        <div
          className='jbsearch'
          style={{ display: 'flex', padding: '0 20px 30px 20px', justifyContent: 'center', gap: '30px' }}
        >
          <div>
            <input
              type='text'
              placeholder='JobTitle'
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <button style={{ marginTop: '2px', borderRadius: '15px', height: '30px' }} onClick={handleSearch}>
              Find Job
            </button>
          </div>
        </div>
        <div>
          <p style={{ textAlign: 'center', fontSize: '18px', paddingBottom: '30px', color: 'white' }}>
            Search - It Takes only a few seconds
          </p>
        </div>
      </div>

      {/* Display loading state */}
      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}

      {/* Display error message */}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

      {/* Display search results */}
      <div style={{ margin: '20px' }}>
        {jobResults.map((job) => (
          <div key={job.id} style={styles.jobResult}>
            <h3 style={styles.jobTitle}>{job.title}</h3>
            <p style={styles.jobInfo}>{`Company: ${job.company} - Location: ${job.location}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  jobResult: {
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  jobTitle: {
    margin: '0',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  jobInfo: {
    margin: '0',
    fontSize: '14px',
    color: '#666',
  },
  input: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
    width: '200px',
  },
};

export default Js_JobSearch;
