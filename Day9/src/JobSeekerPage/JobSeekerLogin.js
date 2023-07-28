import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setEmail,setName,setPass } from '../JobSeekerPage/act';
import axios from 'axios';
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    background: '#f0f0f0', // Updated background color
  },
  login: {
    width: '400px',
    padding: '40px',
    borderRadius: '8px', // Updated border radius
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Added box shadow
    background: '#fff', // Updated background color
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '28px', // Increased font size
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '18px', // Increased font size
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none', // Removed outline
  },
  button: {
    width: '100%', // Button now takes full width
    padding: '12px', // Increased padding
    fontSize: '18px', // Increased font size
    background: '#33bbff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px', // Added margin top
  },
  registerLink: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px', // Increased font size
  },
};


function JobSeekerLogin({
  email,
  pass,
  name,
  setEmail,
  setName,
  setPass,
}) {
  const check = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        "http://localhost:8181/api/v1/auth/authenticate",
        {
          
          email: email,
          password: pass,
        }
      );

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.getItem('token'));

      window.alert("Successfully Logged In");

      

      navigate("/jshome");
    } catch (error) {
      console.log(error);
      window.alert("Invalid Credentials");
    }
  };

  const navigate = useNavigate();
  const [checkpass, setCheckPass] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.login}>
        <form onSubmit={check}>
          <h2 style={styles.title}>Login</h2>
         
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <input
              style={styles.input}
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button style={styles.button} type="submit">
            Login
          </button>

          {checkpass && alert('Successful login ' + name)}
          {checkpass && navigate('/home')}
          <Link to="/re" style={styles.registerLink}>
            Don't have an account? Register
          </Link>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name: state.login.name,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobSeekerLogin);