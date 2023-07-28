import React from 'react'
import '../CompanyPage/C_Home.css';
import { Padding } from '@mui/icons-material';
import { Typography } from '@mui/material';
import CompanyAppBar from './CompanyNavBar';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
const C_Home = () => {
  return (
    <div>
    <CompanyAppBar/>
    <div className='Home'>

      <div className='Home1'>
      <div className='head1'>
        <h2 style={{fontSize:'60px' ,paddingTop:'120px' ,color:'Blue'}}> Minato Job Searching Portal</h2><br></br>
        <p>Access 100% Hand-Screened Jobs & Find a Better Way to Work</p>
      </div>
      <div>
      <img className='homeimage'  src='/images/home_hero.png'></img>
      </div>
      </div>

    <div className='Home2'>
    <div>
    <img src='/images/Home2.jpeg' style={{height:'250px'}}></img>
    </div>
    <div style={{padding:'30px 30px 0 40px'}}>
    <h1 style={{color:'blue'}}>Best Remote Job Listings</h1>
    <Typography >
    Only legit jobs. No ads, scams, or junk to sift through.
Our team spends 200+ hours/day verifying every job and writing
company descriptions, so you'll know who's hiring.
    </Typography>
    </div>
    </div>

    <div className='Home3'>
    <div style={{padding:'60px 30px 0 40px'}}>
    <h1 style={{color:'blue'}}>Personalized Tools</h1>
    <Typography >
    Save and apply to jobs, track with activity logs and checklists.
    Get alerts for new jobs of interest.
    </Typography>
    </div>
    <div>
    <img src='/images/Home3.jpeg' style={{height:'250px'}}></img>
    </div>
    </div>

    <div className='Home4'>
    <div>
    <img src='/images/Home2.jpeg' style={{height:'250px'}}></img>
    </div>
    <div style={{padding:'60px 30px 0 40px'}}>
    <h1 style={{color:'blue'}}>Advanced Remote Search Filters</h1>
    <Typography >
    Find remote jobs near you or anywhere in the world.
    Part-time or full-time. Entry level to executive.
    Startups to Fortune 500.
    </Typography>
    </div>
    </div>


    <div className='Home5'>
    <Typography style={{textAlign:'center',padding:'50px 70px 40px 70px' ,fontSize:'45px',color:'white'}}>
    There's No Better Remote Job Site
Get A Faster, Easier & Better Job Post Today
    </Typography>
    <div>
    <nav>
    <Link to={'/but1PostJob'}>
    <center><button className='but1'  style={{backgroundColor:'white',color:'blue',borderRadius:'25px',width:'130px',justifyContent:'center',height:'50px',padding:'8px'}}>PostJob</button></center>
    </Link>
    </nav>
    </div>
    </div>

    </div>
    </div>
  )
}

export default C_Home;
