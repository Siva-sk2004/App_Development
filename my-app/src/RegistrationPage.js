import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationPage.css';   

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform registration logic here, e.g., sending data to a server

    // Reset form fields
    setName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} required />
        </div>
        <div>
          <label>Address:</label>
          <textarea value={address} onChange={handleAddressChange} required />
        </div>
        {/* <button type="submit">Register</button> */}

        <nav>
          <Link to="Login">
               <button type="submit" >Register</button>
        </Link>
        </nav>
        
      </form>
    </div>
  );
};

export default RegistrationPage;






