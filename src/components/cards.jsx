import React from 'react';
import { Card, CardContent, CardMedia, Typography, Container, Grid, Box } from '@mui/material';
import card1 from "../images/card-1.jpg";
import card2 from "../images/card-2.jpg";
import card3 from "../images/card-3.jpg";
import { LocationOn, Phone, Star } from '@mui/icons-material';

const cardsdata = [
  {
    id: 1,
    title: 'Tsukishima Monja Street',
    price: "$22.00",
    location: "New York, United States",
    contact: "+216 1234 5655",
    image: card1,
    rating: "4.9 stars",
    date: "November 2, 2023"
  },
  {
    id: 2,
    title: 'Sea Monkeys',
    price: "$$$",
    location: "Texas, United States",
    contact: "+216 1234 5655",
    image: card2,
    rating: "5.0 stars",
    date: "October 4, 2021"
  },
  {
    id: 3,
    title: 'Big Bottom Borders',
    price: "$$$$",
    location: "New York, United States",
    contact: "+216 1234 5655",
    image: card3,
    rating: "4.2 stars",
    date: "November 4, 2021"
  },
];

const Cards = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        {cardsdata.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4} lg={4}>
            <Card style={{ 
              margin: 20,
            boxShadow: '5px 5px 0px 2px rgba(0,0,0,1), 0px 5px 5px 0px rgba(0,0,0,0.22)'
          }}>
              <CardMedia
                component="img"
                alt={card.title}
                height="269"
                image={card.image}
                style={{ width: '100%', padding: 0, borderRadius: "0px" }}
              />
              <CardContent>
                <Box sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center"
                }}>
                  <Typography  sx={{ fontWeight: 'bold', fontFamily: 'Oswald, sans-serif', marginTop: '10px' }}><Star sx={{ color: "yellow" }} /> {card.rating}</Typography>
                  <Typography  sx={{ fontWeight: 'bold', fontFamily: 'Oswald, sans-serif', marginTop: '10px' }}>{card.date}</Typography>
                </Box>
                <Typography variant="h6" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
                <Typography sx={{ fontWeight: 'bold', fontFamily: 'Oswald, sans-serif', marginTop: '10px' }}>{card.price}</Typography>
                <Typography sx={{ fontWeight: 'bold', fontFamily: 'Oswald, sans-serif', marginTop: '10px' }}><LocationOn />{card.location}</Typography>
                <Typography sx={{ fontWeight: 'bold', fontFamily: 'Oswald, sans-serif', marginTop: '10px' }}><Phone/>{card.contact}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
