import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import banner1 from '../images/banner-1.jpg';
import banner2 from '../images/banner-2.jpg';
import banner3 from '../images/banner-3.jpg';
import banner4 from '../images/banner-4.jpg';
import banner5 from '../images/banner-5.jpg';
import '../styles/banner.css';

const Banner = () => {
  return (
    <Box sx={{
      px: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Grid container spacing={2} justifyContent="center">
        {/* Left Banner */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box sx={{
            position: 'relative',
          }}>
            <figure className='figure'>
              <img
                src={banner1}
                alt="banner-1"
                className="figure-img img-fluid"
              />

              <Button
                variant="contained"
                color='warning'
                sx={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  border: '2px solid black',
                  borderRadius: '20px',
                  bgcolor: '#ffea00',
                  fontWeight: 'bold',
                }}
              >
                <a
                  href="#popular"
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  Popular
                </a>
              </Button>

              <Typography
                variant="p"
                sx={{
                  position: 'absolute',
                  bottom: 30,
                  left: 30,
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '50px',
                  fontFamily: 'Oswald, sans-serif',
                  letterSpacing: '-3px',
                  lineHeight: '1.8',
                }}
              >
                PLACE
              </Typography>
            </figure>
          </Box>
        </Grid>

        {/* Right Banners */}
        <Grid
          container
          item
          spacing={2}
          xs={12}
          sm={6}
          md={6}
          lg={6}
            >
          {/* First Row */}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}

          >
            <figure>
              <img
                src={banner2}
                alt="banner-2"
                className='figure-img img-fluid banner-right'
              />
            </figure>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
          >
            <figure>
              <img
                src={banner3}
                alt="banner-3"
                className='figure-img img-fluid banner-right'
              />
            </figure>
          </Grid>

          {/* Second Row */}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
          >
            <figure>
              <img
                src={banner4}
                alt="banner-4"
                className='figure-img img-fluid banner-right'
              />
            </figure>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
          >
            <figure>
              <img
                src={banner5}
                alt="banner-5"
                className='figure-img img-fluid banner-right'
              />
            </figure>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
