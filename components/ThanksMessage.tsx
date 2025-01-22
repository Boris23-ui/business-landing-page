import Box from '@mui/material/Box';
import React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

interface Props {
  selectedRating: number;
}

const ThanksMessage = ({ selectedRating }:  Props) => {
  return (
    <Box  >
       <Box 
         sx={{ 
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
           justifyContent: "center"
           }} 
       >
         <Image 
           src="\images\illustration-thank-you.svg" 
           alt="receipt"
           height={108}
           width={162}
         />
         <Typography sx={{ color: "#FC7614", marginTop: "2rem", backgroundColor: "#262E38" }} >
           You selected {selectedRating} out of 5
         </Typography>
         <Typography sx={{ fontSize: "2rem", color: "#FFFFFF", fontWeight: 600, marginTop: "3rem" }} >
          Thank You!
         </Typography>
         <Typography sx={{ color: "#969FAD", textAlign: "center", marginTop: "1rem", fontWeight: "400", fontSize: "1.200rem" }} >
            We appreciate you taking the time to give a rating. 
            If you ever need more support, don't hesitate to get in touch!
         </Typography>
       </Box>
    </Box>
  );
};

export default ThanksMessage;