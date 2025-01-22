import Button  from '@mui/material/Button';
import React from 'react';

interface Props {
    label: number;
}

const RatingButton = ({ label }: Props) => {
  return <Button 
    sx={{ 
        backgroundColor: "#262E38", 
        color: "#969FAD", 
        width: "3.1875rem",
        height: "3.1875rem",
        borderRadius: "50%",
    }}
    >
        {label}
    </Button>;
};

export default RatingButton;