import React from 'react';
import { Grid, Typography } from '@mui/material';
import StarRating from './starRate';

const Review = ({ name, location, rating, heading, reviewText, date }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      marginBottom: "50px" }}>

      <Grid container spacing={1} sx={{ padding: '20px', borderBottom: '2px solid black', borderTop: '2px solid black' }}>
        
        <Grid item xs={12} md={4}>
          <Typography variant="h6">{name}</Typography>
          <Typography>{location}</Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StarRating rating={rating} />
            <Typography variant="h6" sx={{ marginLeft: 2, marginBottom: 1 }}>{heading}</Typography>
          </div>
          <Typography>{reviewText}</Typography>
        </Grid>

        <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
          <Typography sx={{ color: '#888' }}>{date}</Typography>
        </Grid>

      </Grid>
    </div>
  );
};

export default Review;
