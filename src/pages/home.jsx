import React from 'react'
import SideBar from '../Components/SideBar/SideBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack  from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import '../Dashboard.css'
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDashboard from '../Components/AccordionDashboard';
import BarChart from '../charts/BarCharts';
import CountUp from 'react-countup';

function Home() {
  return (
    <>
    <div className="bgcolor">
    <Box sx={{ display: 'flex' }}>
        <SideBar></SideBar>
        
        <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, }}
        >
        <Box height={80} />
        <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack direction='row' spacing={2}>
                <Card sx={{ minWidth: 49 + '%', height: 140 }} className="gradient">
                  <CardContent>
                    <div className='icon-style'>
                      <CreditCardIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#fff"}}>
                      $<CountUp delay={0.5} end={500} duration={0.5} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                      Total Earnings
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 49 + '%', height: 140 }} className="gradientLight">
                  <CardContent>
                  <div className='icon-style'>
                      <ShoppingBagIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#fff"}}>
                      $<CountUp delay={0.5} end={500} duration={0.5} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                      Total Orders
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 345 }} className="gradientLight">
                    <Stack direction='row' spacing={2}>
                      <div className='icon-style'>
                        <StorefrontIcon />
                      </div>
                      <div>
                        <span><b>$450K</b></span>
                        <br />
                        <span>Total Income</span>
                      </div>
                    </Stack>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <Stack direction='row' spacing={2}>
                      <div className='icon-style-black'>
                        <StorefrontIcon />
                      </div>
                      <div>
                        <span><b>$450K</b></span>
                        <br />
                        <span>Total Income</span>
                      </div>
                    </Stack>
                </Card>
              </Stack>
            </Grid>
        </Grid>

        <Box height={20} />
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Card sx={{ height: 60 + 'vh' }}>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card sx={{ height: 60 + 'vh' }}>
                  <CardContent>
                    <div>
                      <span><b>Popular Products</b></span>
                    </div>
                    <AccordionDashboard />
                  </CardContent>
                </Card>
            </Grid>
        </Grid>
      </Box>
    </Box>
    </div>
   
    </>
    
  )
}

export default Home