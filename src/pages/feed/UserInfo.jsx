import React from "react";
import { Box, Typography, Rating, Avatar } from "@mui/material";

const UserInfo = ({ userProfilePicture, userNickname, ratingValue }) => (
  <Box display="flex" alignItems="center">
    <Avatar src={userProfilePicture} alt={userNickname} />
    <Typography variant="h6" ml={2}>
      {userNickname}
    </Typography>
    <Box ml="auto"> {/* Esto mueve el rating al final de la línea */}
      <Rating name="read-only" value={ratingValue} readOnly />
    </Box>
  </Box>
);

export default UserInfo;
