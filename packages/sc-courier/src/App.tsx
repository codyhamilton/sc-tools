import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavBar from './components/NavBar';
import Setup from './components/Setup';
import Route from './components/Route';
import Status from './components/Status';

const Item = styled(Paper)(({ theme }) => ({
  // default
}));

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar></NavBar>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} sm={6} lg={4}>
          <Item><Setup/></Item>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Item><Route/></Item>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Item><Status/></Item>
        </Grid>
      </Grid>
    </Box>


  );
}

export default App;
