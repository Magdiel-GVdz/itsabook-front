import React from "react";
import { Button } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';

const CommentButton = ({ handleCommentClick }) => (
  <Button 
    variant="contained" 
    color="primary" 
    size="small" 
    startIcon={<ChatIcon />}
    onClick={handleCommentClick}
    sx={{ 
      ml: 1, 
      backgroundColor: 'transparent', 
      color: 'white', 
      boxShadow: 'none', 
      '&:hover': { 
        backgroundColor: '#f5f5f5', 
        color: 'black' 
      },
      '&:hover svg': {
        color: 'black'
      }
    }}
  >
    Comment
  </Button>
);

export default CommentButton;
