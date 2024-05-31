import React from 'react';
import { Box } from '@mui/material';
import ProfilePicture from './ProfilePicture'; 

function Profile() {
  return (
    <Box flex={5} p={8}>
      <ProfilePicture /> 
    </Box>
  );
}

export default Profile;
