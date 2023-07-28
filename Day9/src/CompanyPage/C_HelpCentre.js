import React from 'react';
import '../CompanyPage/C_HelpCenter.css';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CompanyAppBar from './CompanyNavBar';

const C_HelpCentre = () => {
  return (
    <div>
    <CompanyAppBar/>
      <div className='topbar'>
      <div className='bluebar'>
      <a href='http://localhost:3000/CompanyLHome'>
      <ArrowBackIosIcon className="search-icon" />
      </a>
      <h6 style={{ textAlign: 'center' }}>Company Help Centre ?</h6>
      <h1 style={{ textAlign: 'center' }}>How can we Help Today?</h1>
      <br />
      <div className="search-box">
      <input
      type="text"
      placeholder="      Search..."
      />
      </div>
        {/*<SearchIcon className="search-icon" />  Using only the SearchIcon component */}
        </div>
      </div>
      <div className='topics'>
      <h4 style={{padding:'30px 0px 30px 65px'}}> Popular Topics</h4>
        <div className='topicsTitle'>
        <div className='PostJob'>
        <h6>Posting Job</h6>
        <div>
        <a class="small" href="#">How to Post a job?</a><br>
        </br>
        <a class="small" href="#">What do I need to post a job?</a>
        <br></br>
        <a class="small" href="#">How to edit your job</a>
        </div>
        </div>


        <div className='Account'>
        <h6>My Account</h6>
        <div>
        <a class="small" href="#">How to reset my Password</a><br>
        </br>
        <a class="small" href="#">TroubleShooting Issues</a>
        <br></br>
        <a class="small" href="#">How to Change a Account Type?</a>
        </div>
        </div>

        <div className='Report'>
        <h6>Send Report</h6>
        <div>
        <a class="small" href="#">Report any Trouble you have by using this Application?</a><br>
        </br>
        <a class="small" href="#">How To Avoid Fake Companies?</a>
        <br></br>
        <a class="small" href="#">Is the Jobs are Real?</a>
        <br></br>
        <a class="small" href="#">Report about Company</a>
        </div>
        </div>

        <div className='policies'>
        <h6>Policies</h6>
        <div>
        <a class="small" href="#">My job is not shown on Minato
        General product policies</a><br>
        </br>
        <a class="small" href="#">Job posting standards</a>
        <br></br>
        </div>
        </div>
        
        </div>


      </div>


      <div>
      <p style={{padding:'10px' ,backgroundColor:'rgb(19, 19, 92)'}}></p>
      </div>

      <div className='Minato'>
      <Typography style={{textAlign:'center',padding:'80px 0 40px 0'}}>
      @2023 Minato -<a  href="#">Cookies</a><a  href="#">Privacy And Terms  </a><a  href="#">Your Privacy Policy</a><a  href="#">-About Us</a>
      </Typography>
      
      </div>
    </div>
  );
};

export default C_HelpCentre;
