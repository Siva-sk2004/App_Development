import React, { useState } from "react";
import axios from "axios";
import '../css/PostJob.css';

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    salary: "",
    contactNo: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'your-api-endpoint' with the actual API endpoint for job postings
    axios.post("your-api-endpoint", formData)
      .then((response) => {
        // Handle success, e.g., show a success message or redirect to another page
        console.log("Job posting submitted successfully!");
      })
      .catch((error) => {
        // Handle error, e.g., show an error message to the user
        console.error("Error submitting job posting:", error);
      });
  };

  return (
    <div className="pb">
    <h2>Job Posting Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Salary:
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Contact No:
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        
        <label>
          Email :
          <br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobPostingForm;
