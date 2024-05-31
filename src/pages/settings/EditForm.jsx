import React from 'react';
import { Box, TextField } from '@mui/material';

function EditForm({ userAttributes, editedUserAttributes, isEditing, handleChange }) {
  return (
    <Box mt={2}>
      {/* Email field */}
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={editedUserAttributes.email !== undefined ? editedUserAttributes.email : userAttributes.email}
        onChange={handleChange}
        disabled={!isEditing}
        sx={{ marginBottom: 2 }}
      />
      {/* Nickname field */}
      <TextField
        fullWidth
        label="Nickname"
        name="nickname"
        value={editedUserAttributes.nickname !== undefined ? editedUserAttributes.nickname : userAttributes.nickname}
        onChange={handleChange}
        disabled={!isEditing}
        sx={{ marginBottom: 2 }}
      />
    </Box>
  );
}

export default EditForm;
