import React, { useState } from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      background: '#f2f2f2',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '400px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      background: '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      textTransform: 'uppercase',
      fontFamily: 'Verdana, sans-serif',
    },
    inputContainer: {
      marginBottom: '20px',
      display: 'flex', // Use flexbox to align labels and inputs side by side
      flexDirection: 'column', // Stack label and input vertically
    },
    label: {
      marginBottom: '5px',
      fontSize: '16px',
      color: '#333',
      alignSelf: 'flex-start', // Align the label to the left
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#33bbff',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      width: '100%',
      marginTop: '20px',
      borderRadius: '4px',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
      fontSize: '14px',
      textAlign: 'center',
      fontStyle: 'italic',
      fontWeight: 'bold',
      backgroundColor: '#FBE3E4',
      padding: '8px',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    loginLink: {
      textAlign: 'center',
      marginTop: '10px',
    },
    loginLinkText: {
      color: '#333',
      textDecoration: 'none',
    },
  };



  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmit(true);

    // Check if the passwords match
    if (password !== confirmPassword) {
      window.alert('Passwords do not match');
      setIsSubmit(false);
      return;
    }

    // Validate the email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setError('Invalid email address');
      setIsSubmit(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
        name: name,
        email: email,
        password: password,
      });

      console.log(response.status);
      if (response.status === 200) {
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError(''); // Clear any previous error messages
        navigate('/jshome');
      }
    } catch (error) {
      alert(error);
      setIsSubmit(false);
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Signup</h2>
        {error && <div style={styles.error}>{error}</div>}
        <div style={styles.inputContainer}>
          <label style={styles.label}>First Name:</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Email:</label>
          <input
            style={styles.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Password:</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Confirm Password:</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={styles.button} type="submit">
          Sign Up
        </button>
        </div>
        <p>
          Already have an account? <Link to="/lo">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;