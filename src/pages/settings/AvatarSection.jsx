import React from 'react';
import { Avatar, Fab, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

function AvatarSection() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar src="https://unavatar.io/pikachu" sx={{ width: 200, height: 200 }} />
      <Fab size="small" color="primary" aria-label="edit-image">
        <EditIcon />
      </Fab>
    </Stack>
  );
}

export default AvatarSection;
