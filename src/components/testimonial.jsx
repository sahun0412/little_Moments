import React, { useState } from 'react';
import Review from '../components/reviews.jsx';
import { Button } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

const Testimonial = () => {
  const reviewsData = [
    
    {
      name: "LAILA JOHN",
      location: "MUMBAI",
      rating: 4,
      heading: "The best out there!",
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum, nunc nec fermentum malesuada, libero libero placerat erat.",
      date: "2023-01-15",
    },
    {
      name: "MATT DAMON",
      location: "DELHI",
      rating: 4,
      heading: "A Must-Have for Event Enthusiasts!",
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum, nunc nec fermentum malesuada, libero libero placerat erat.",
      date: "2023-01-15",
    },
    {
      name: "MELLISA DUNBAR",
      location: "Banglore",
      rating: 5,
      heading: "Local Events at Your Fingertips",
      reviewText: "Pellentesque nec leo vel dolor fermentum semper quis ac justo. Donec eu ligula vel libero ultricies tempor.",
      date: "2023-01-20",
    },
    
    {
      name: "ROHIT",
      location: "PEDAPALLI",
      rating: 3,
      heading: "Average Experience",
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum, nunc nec fermentum malesuada, libero libero placerat erat.",
      date: "2023-02-01",
    },
    {
      name: "SHUBHAM",
      location: "BANDA",
      rating: 5,
      heading: "Fantastic Service",
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum, nunc nec fermentum malesuada, libero libero placerat erat.",
      date: "2023-02-05",
    },
    {
      name: "BRIJESH",
      location: "CHANDRAPUR",
      rating: 4,
      heading: "Great Events!",
      reviewText: "Pellentesque nec leo vel dolor fermentum semper quis ac justo. Donec eu ligula vel libero ultricies tempor.",
      date: "2023-02-10",
    },
  ];

  const reviewsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewsData.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {currentReviews.map((review, index) => (
        <Review
          key={index}
          name={review.name}
          location={review.location}
          rating={review.rating}
          heading={review.heading}
          reviewText={review.reviewText}
          date={review.date}
        />
      ))}

      {/* Pagination Buttons */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Button
          variant="contained"
         
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          sx={{
            bgcolor:"yellow",
            borderRadius:'50px',
            margin:"20px",
            padding:"20px"
          }}
        >
          <ArrowLeft/>
        </Button>
        <Button
          variant="contained"
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastReview >= reviewsData.length}
          sx={{ margin: '20px',
          padding:"20px", 
          borderRadius:"50px",
          bgcolor:"yellow",
         }}
        >
          <ArrowRight/>
        </Button>
      </div>
    </div>
  );
};

export default Testimonial;
