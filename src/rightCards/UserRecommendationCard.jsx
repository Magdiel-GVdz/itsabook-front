// src/components/UserRecommendationCard.jsx

import React, { useState } from "react";
import { Box, Avatar, Typography, Button } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const UserRecommendationCard = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <Box
      boxShadow={2}
      borderRadius={5}
      p={2}
      bgcolor="white"
      position="relative"
      width={230}
      height={80}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      mb={2}
    >
      <Avatar src={user.profilePicture} alt={user.username} sx={{ position: 'absolute', top: 15, left: 15 }} />
      <Typography sx={{ position: 'absolute', left: 65, top: 20 }} variant="h6" color="textPrimary">
        {user.username}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={isFollowing ? <PersonRemoveIcon /> : <PersonAddIcon />}
        sx={{ position: 'absolute', bottom: 8, right: 20 }}
        onClick={handleFollowClick}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
    </Box>
  );
};

export default UserRecommendationCard;
