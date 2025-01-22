import Box from '@mui/material/Box';
import React from 'react';
import Image from 'next/image';
import Typography  from '@mui/material/Typography';


const RatingsContainer = () => {
  return (
    <Box sx={{ 
        backgroundColor: "#181E27",
        padding: "2rem",
        width: "25.75rem",
        height: "26rem",
        borderRadius: "30px"
    }}>
        <Box sx={{ 
            backgroundColor: "#262E38", 
            borderRadius: "50%", 
            padding: "1rem",
            height: "3rem",
            width: "3rem",
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            }}>

          <Image 
            src="\images\icon-star.svg" 
            alt="star-logo" 
            height={16} 
            width={16}  
          />

        </Box>
        <Typography sx={{ fontSize: "2rem", fontWeight: 600, color: "#FFFFFF" }} >How did we do?</Typography>
        <Typography sx={{ color: "#969FAD" }} >
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </Typography>
    </Box>
  );
};

export default RatingsContainer;