import React from 'react'
import Layout from '../Components/Layout';
import SideBar from '../Components/SideBar/SideBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import {Grid, Card, CardContent, Divider } from '@mui/material';
import PostList from './posts/postListing';

function Tips() {
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
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <PostList />
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

export default Tips