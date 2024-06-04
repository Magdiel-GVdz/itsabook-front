// LikesCounter.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

const LikesCounter = ({ likesCount }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
    <FavoriteIcon color="error" sx={{ fontSize: 'small', marginRight: 0.5, verticalAlign: 'middle', color: 'red' }} />
    <Typography variant="body1">
      {likesCount}
    </Typography>
  </Box>
);

export default LikesCounter;
