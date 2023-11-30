import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Star, FavoriteBorder, Share, Phone, LocationOn } from '@mui/icons-material';

const Contact = () => {
    return (
        <div className="contact" style={{
            border: '2px solid black',
            borderRadius: '10px',
            margin: "20px",
            padding: "10px",
            position: 'relative',
            boxShadow: '5px 5px 0px 2px rgba(0,0,0,1), 0px 5px 5px 0px rgba(0,0,0,0.22)'
        }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={8} md={8} lg={10}>
                    <Box>
                        <Typography sx={{
                            fontWeight: 'bold',
                            fontFamily: 'Oswald, sans-serif',
                        }}>
                            <Star sx={{
                                color: 'yellow',
                            }} /> 4.9 stars
                            &nbsp;
                            <Typography variant="text"
                                sx={{
                                    color: '#F2F2F2',
                                    mx: 1,
                                }}>(231 Review)</Typography>
                        </Typography>
                    </Box>

                    <Box sx={{
                        m:4
                    }}>
                        <Typography variant="p"
                            sx={{
                                letterSpacing: '-5px',
                                wordSpacing: '5px',
                                lineHeight: '-1px',
                                fontWeight: 'bold',
                                fontSize: { xs: '40px', sm: '60px', md: '60px', lg: "60px" },
                                mt: 8
                            }}>
                            TSUKISHIMA MONJA STREET
                        </Typography>

                        <Typography sx={{
                            fontWeight: 'bold'
                        }}>Users can easily find the perfect experiences to suit their interests. Users can easily find the perfect experiences to suit their interests</Typography>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        m: 4
                    }}>

                        <Box sx={{
                            fontWeight: 'bold',
                            mr: 2
                        }}>
                            <LocationOn /> Texas, United States
                        </Box>
                        <a href="tel:+21612345655"
                            style={{
                                textDecoration: "none",
                                color: "black",
                                fontWeight: "bold"
                            }}><Phone /> +216 1234 5655</a>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={2}>
                    <Box>
                        <Button
                            className="btn"
                            sx={{
                                width: { xs: '50px', sm: '50px', md: '60px' },
                                height: { xs: '50px', sm: '50px', md: '60px' },
                                position: 'absolute',
                                top: 10,
                                right: 90,
                                bottom: 10,
                                border: '2px solid black',
                                borderRadius: '5px',
                                boxShadow: '5px 5px 0px 2px rgba(0,0,0,1), 0px 5px 5px 0px rgba(0,0,0,0.22)',
                                backgroundColor: '#F2EDD0',
                            }}
                        >
                            <a href="#favourite" style={{ textDecoration: 'none', color: 'black' }}>
                                <FavoriteBorder />
                            </a>
                        </Button>

                        <Button
                            className="btn"
                            sx={{
                                width: { xs: '50px', sm: '50px', md: '60px' },
                                height: { xs: '50px', sm: '50px', md: '60px' },
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                bottom: 10,
                                border: '2px solid black',
                                borderRadius: '5px',
                                boxShadow: '5px 5px 0px 2px rgba(0,0,0,1), 0px 5px 5px 0px rgba(0,0,0,0.22)',
                                backgroundColor: '#F2EDD0',
                            }}
                        >
                            <a href="#share" style={{ textDecoration: 'none', color: 'black' }}>
                                <Share />
                            </a>
                        </Button>
                    </Box>
                    <Box sx={{ ml: 5, mt: 10 }}>
                        <Typography sx={{
                            fontFamily: "Oswald, sans-serif",
                            fontWeight: "bold",
                            fontSize: "14px"
                        }}>October 4, 2021</Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Contact;
