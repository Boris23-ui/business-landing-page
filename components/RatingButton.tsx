import Button  from '@mui/material/Button';
import React from 'react';

interface Props {
    rating: number;
    setSelected: (arg1: number) => void;
    selectedRating: number;
}

const RatingButton = ({ rating, setSelected, selectedRating }: Props) => {
  return <Button 
    sx={{ 
        backgroundColor: rating === selectedRating ? "#FFFFFF" : "#262E38", 
        color: rating === selectedRating ? "#262E38" : "#969FAD", 
        width: "3.1875rem",
        height: "3.1875rem",
        borderRadius: "50%",
        fontWeight: 600,

        "&:hover": {
            backgroundColor: "#FC7614",
            color: "#262E38",

        },
    }}
    onClick={() => setSelected(rating)}
    >
        {rating}
    </Button>;
};

export default RatingButton;