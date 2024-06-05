import React from "react";
import { Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const LikeButton = ({ liked, likesCount, handleLikeClick }) => (
  <Button 
    variant="contained" 
    color="primary" 
    size="small" 
    startIcon={liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    onClick={handleLikeClick}
    sx={{ 
      backgroundColor: 'transparent', 
      color: 'white', 
      boxShadow: 'none', 
      '&:hover': { 
        backgroundColor: 'white',
        color: 'black'
      },
      '&:hover svg': {
        color: 'black'
      }
    }}
  >
    {liked ? 'Dislike' : 'Like'}
  </Button>
);

export default LikeButton;
