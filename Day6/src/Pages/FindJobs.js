import React, { useState } from 'react';
import '../css/Dashboard.css';


const FindJobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform the search query using the entered searchQuery value
    // You can make an API call or implement your own search logic here
    const results = performSearch(searchQuery); // Replace performSearch with your actual search logic
    setSearchResults(results);
    setSearchQuery('');
  };

  const performSearch = (query) => {
    // Implement your search logic here
    // Return the search results
    // For demonstration purposes, returning dummy data
    const dummyData = [
      { id: 1, title: 'Hr', company: 'Amazon' ,location:'Chennai',salary:'20000-30000'},
      { id: 2, title: 'Manager', company: 'zoho' ,location:'Coimbatore',salary:'100000-200000'},
      { id: 3, title: 'Developer', company: 'Flipcart' ,location:'Bangalore',salary:'20000-80000'},
    ];

    // Find the specific result matching the query
    const specificResult = dummyData.find(
      (result) => result.title.toLowerCase() === query.toLowerCase()
    );

    return specificResult ? [specificResult] : [];
  };

  return (
    <div className="dashboard-container">

      <div className="main-content">

        <div className="dashboard">
          <h1>Job Search Dashboard</h1>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Enter job title, keywords, or company"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
          </form>
  
          {searchResults.length > 0 ? (
            <div>
              <h2>Search Results</h2>
              <ul>
                {searchResults.map((result) => (
                  <li key={result.id}>
                    <h3>{result.title}</h3>
                    <p>{"Company : "+result.company}</p>
                    <p>{"Location : "+result.location}</p>
                    <p>{"Salatry : "+result.salary}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No search results yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};



export default FindJobs;