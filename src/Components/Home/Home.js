import React from 'react'
import classes from './Home.module.css'
import Card from '../Card/Card'


import { Grid } from '@mui/material';
const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.grids}>
      <Grid container spacing={2}>
  <Grid item xs={4}>
    <Card>xs=8</Card>
  </Grid>
  <Grid item xs={4}>
    <Card>xs=8</Card>
  </Grid>
  <Grid item xs={4}>
    <Card>xs=8</Card>
  </Grid>
  <Grid item xs={4}>
    <Card>xs=8</Card>
  </Grid>
  <Grid item xs={4}>
    <Card>xs=8</Card>
  </Grid>
  <Grid item xs={4}>
    <Card>xs=8</Card>
  </Grid>
  

</Grid>
         
      </div>
    </div>
  )
}

export default Home