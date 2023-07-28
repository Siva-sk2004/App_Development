import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../css/Home.css';
import { Transform } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='lp'>
    
    <div className='CardContainer'>
      {/* Admin Card */}
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="180"
            image="/images/admin1.jpeg"
            alt="Admin"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" style={{ textAlign: 'center' ,fontFamily:'inherit'}} >
              Admin
            </Typography>
            <div className='but1'>
            <nav>
            <Link to={'/AdminSign'}>
            <Button variant="contained" size="medium" >SignIn</Button>
            </Link>
            </nav>
            <nav>
            <Link to={'/AdminRegister'}>
            <Button variant="contained" size="medium" > Register</Button>
            </Link>
            </nav>
            </div>
          </CardContent>
      </Card>

      {/* Job Card */}
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="180"
            image="/images/job.jpeg"
            alt="Job"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" style={{ textAlign: 'center' ,fontFamily:'inherit'}}>
              JobSeeker
            </Typography>
            <div className='but2'>
            <nav>
            <Link to={'/SeekerSign'}>
            <Button variant="contained" size="medium" >
            SignIn
            </Button>
            </Link>
            </nav>
            <nav>
            <Link to={'/SeekerRegister'}>
            <Button variant="contained" size="medium" >
            Register
            </Button>
            </Link>
            </nav>
            </div>
          </CardContent>
      </Card>

      {/* Company Card */}
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="180"
            image="/images/comp1.jpg"
            alt="Company"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" style={{ textAlign: 'center' ,fontFamily:'inherit'}}>
              Company
            </Typography>
            <div className='but3'>
            <nav>
            <Link to={'/CompanySign'}>

            <Button variant="contained" size="medium" >
            SignIn
            </Button>
            </Link>
            </nav>
            <nav>
            <Link to={'/CompanyRegister'}>
            <Button variant="contained" size="medium" >
            Register
            </Button>
            </Link>
            </nav>
            </div>
          </CardContent>
      </Card>
    </div>
    </div>
  );
}
