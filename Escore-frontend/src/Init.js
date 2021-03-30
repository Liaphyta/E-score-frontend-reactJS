import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';


function InitContainer() {
  return (
        <Grid container>
          <Grid md={1} sm={1}></Grid>
          <Grid md={4} sm={4}>

          </Grid>
          <Grid md={1} sm={1}></Grid>
          <Grid md={4} sm={4}>

          </Grid>
          <Grid md={1} sm={1}></Grid>
        </Grid>
  );
}

export default InitContainer;
