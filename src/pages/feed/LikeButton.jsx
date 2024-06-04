// LikeButton.jsx
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
    sx={{ backgroundColor: 'transparent', color: liked ? 'red' : 'black', boxShadow: 'none', '&:hover': { backgroundColor: '#f5f5f5' } }}
  >
    {liked ? 'Dislike' : 'Like'}
  </Button>
);

export default LikeButton;
