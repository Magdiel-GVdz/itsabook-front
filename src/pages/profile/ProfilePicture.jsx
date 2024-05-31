import React, { useContext } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { AccountContext } from '../../context/Account'; // Ajusta el path según la ubicación de tu archivo Account.js

function ProfilePicture() {
  const { userAttributes } = useContext(AccountContext);

  const username = userAttributes ? userAttributes['name'] || 'Usuario' : 'Usuario'; 

  return (
    <Box sx={{ backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)', p: 2, position: 'relative', height: '200px' }}>
      <Box sx={{ position: 'absolute', bottom: '-100px', left: '16px', textAlign: 'center' }}>
        <Avatar src="https://unavatar.io/jfgjorge" sx={{ width: 200, height: 200 }} />
        <Typography variant="h4" sx={{ mt: 2 }}>{username}</Typography>
      </Box>
    </Box>
  );
}

export default ProfilePicture;
