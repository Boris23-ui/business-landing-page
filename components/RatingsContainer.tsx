"use client";

import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Image from 'next/image';
import Typography  from '@mui/material/Typography';
import RatingButton from './RatingButton';
import Button from '@mui/material/Button';
import ThanksMessage from './ThanksMessage';


const RatingsContainer = () => {
    const [selected, setSelected] = useState(0);
    const [submitted, setSubmitted] = useState(false)
    const buttons = [1, 2, 3, 4, 5];
    
  return (
    <Box sx={{ 
        backgroundColor: "#232A34",
        padding: "2rem",
        width: "25.75rem",
        height: "26rem",
        borderRadius: "1.875rem",
    }}>
        
        {submitted ? (
            <ThanksMessage selectedRating={selected} />
        ) : (
            <>
            <Box 
          sx={{ 
            backgroundColor: "#262E38", 
            borderRadius: "50%", 
            padding: "1rem",
            height: "3rem",
            width: "3rem",
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1.85rem"
            }}>

          <Image 
            src="\images\icon-star.svg" 
            alt="star-logo" 
            height={16} 
            width={16}  
          />

        </Box>
        <Typography sx={{ fontSize: "2rem", fontWeight: 600, color: "#FFFFFF" }} >How did we do?</Typography>
        <Typography sx={{ color: "#969FAD", margin: "1.5rem 0" }} >
            Please let us know how we did with your support request. 
            All feedback is appreciated to help us improve our offering!
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }} >
        {buttons.map((button: number) =>{
            return (
              <RatingButton 
                key={button} 
                rating={button}
                selectedRating={selected}
                setSelected={setSelected}
              />
            );
        })}
        </Box>;
        <Button 
          sx={{ 
            backgroundColor: "#FC7614", 
            color: "#131518", 
            fontWeight: "600", 
            marginTop: "2rem", 
            width: "100%", 
            borderRadius: "1.4063rem", 
            padding: "0.75rem",

            "&:hover": {
            backgroundColor: "#FFFFFF",

        }
            }}
            onClick={() => setSubmitted(true)}
            >
                SUBMIT
        </Button>
            </>
        )
        
        }
    </Box>
  );
};

export default RatingsContainer;