  "use client";

import RatingsContainer from "@/components/RatingsContainer";
import Box from "@mui/material/Box";
import React, { useState } from "react";

const Home = () => {

  const [submitted, setSubmitted] = useState(false);
  return (
    <Box sx={{ 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "98vh"
      }} >
      <RatingsContainer />
    </Box>
  );
};

export default Home;
