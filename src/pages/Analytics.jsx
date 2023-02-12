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
import GeoChart from '../charts/GeoCharts';
import PieChart from '../charts/PieCharts';
import HorizontalBarChart from '../charts/HBarCharts'
import CountUp from 'react-countup';

export default function Analytics() {
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
            <Grid item xs={4}>
              <Stack direction="row" spacing={2}>
              <Card sx={{ minWidth: 49 + '%', height: 140 }} className="gradient">
                    <CardContent>
                      <div className='icon-style'>
                        <CreditCardIcon />
                      </div>
                      <Typography gutterBottom variant="h5" component="div" sx={{color: "#fff"}}>
                        <CountUp delay={0.5} end={800} duration={0.5} />
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                        Total Visitors
                      </Typography>
                    </CardContent>
              </Card>
              <Card sx={{ minWidth: 49 + '%', height: 140 }} className="gradientLight">
                  <CardContent>
                    <div className='icon-style'>
                      <CreditCardIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#fff"}}>
                    <CountUp delay={0.5} end={800} duration={0.5} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                      Total Visitors
                    </Typography>
                  </CardContent>
              </Card>
              </Stack>
              <Box height={20} />
              <Stack direction="row" spacing={2}>
              <Card sx={{ minWidth: 49 + '%', height: 140 }} className="gradient">
                    <CardContent>
                      <div className='icon-style'>
                        <CreditCardIcon />
                      </div>
                      <Typography gutterBottom variant="h5" component="div" sx={{color: "#fff"}}>
                        <CountUp delay={0.5} end={800} duration={0.5} />
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                        Total Visitors
                      </Typography>
                    </CardContent>
              </Card>
              <Card sx={{ minWidth: 49 + '%', height: 140 }} className="gradientLight">
                  <CardContent>
                    <div className='icon-style'>
                      <CreditCardIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#fff"}}>
                      <CountUp delay={0.5} end={800} duration={0.5} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                      Total Visitors
                    </Typography>
                  </CardContent>
              </Card>
              </Stack>
            </Grid>

            <Grid item xs={8}>
              <Card sx={{height: 300}}>
                <CardContent>
                  <HorizontalBarChart />
                </CardContent>
              </Card>
            </Grid>
        </Grid>

        <Box height={20} />

        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Card>
                  <CardContent>
                    <GeoChart />
                  </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card>
                  <CardContent>
                    <PieChart />
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
