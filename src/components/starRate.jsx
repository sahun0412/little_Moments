import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const StarRating = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={handleChange}
        precision={1}
      />
    </Box>
  );
};

export default StarRating;
