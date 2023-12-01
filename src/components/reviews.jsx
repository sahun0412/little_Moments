import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import StarRating from './starRate';

const Review = ({ name, location, rating, heading, reviewText, date }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      marginBottom: "50px" }}>

      <Grid container lg={10}
        spacing={1}
        sx={{
          borderBottom: '2px solid black',
          padding: '20px',
          borderTop: '2px solid black',
        }}>

        <Grid item xs={3}>
          <Typography variant="h6">{name}</Typography>
          <Typography>{location}</Typography>
        </Grid>

        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StarRating rating={rating} />
            <Typography variant="h6" sx={{ marginLeft: 2, marginBottom: 1 }}>{heading}</Typography>
          </div>
          <Typography>{reviewText}</Typography>
        </Grid>

        <Grid item xs={3} sx={{ textAlign: 'right' }}>
          <Typography sx={{ color: '#888' }}>{date}</Typography>
        </Grid>

      </Grid>
    </div>
  );
};

export default Review;
