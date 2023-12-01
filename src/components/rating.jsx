import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import StarRating from './starRate';
import { ArrowRightAltSharp } from '@mui/icons-material';

const Rating = () => {
  return (
    <div className="rating" style={{
      marginLeft:"50px",
    }}>
      <Box sx={{ m: 2, p: 2 }}>
        <Typography sx={{ fontFamily: 'Oswald, sans-serif', fontWeight: 'bolder', letterSpacing: '-5px', fontSize: '80px' }}>
          REVIEWS
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography sx={{ fontFamily: 'Oswald, sans-serif', fontWeight: 'bolder', fontSize: '40px' }}>
              5.0
            </Typography>
          </Grid>
          <Grid item>
            <StarRating />
            <Typography sx={{
              color: "#404040",
              fontWeight: "bold",
              fontSize: "15px",
              fontFamily: 'Oswald, sans-serif',
            }}>1,289 reviews</Typography>
          </Grid>

          <Grid item sx={{ marginLeft: 'auto', marginRight:"80px" }}>
            <Button sx={{
              color: "white",
              bgcolor: "blue",
              fontFamily: 'Oswald,sans-serif',
              textTransform: "capitalize",
              '&:hover': {
                color: 'white',
                bgcolor: 'blue',
              },
              boxShadow: '2px 2px 0px 2px rgba(0,0,0,1), 0px 5px 5px 0px rgba(0,0,0,0.22)'
            }}>Write a review <ArrowRightAltSharp /></Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Rating;
