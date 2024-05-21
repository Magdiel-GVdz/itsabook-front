import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { AccountContext } from "../../context/Account";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Settings() {
  const { getUserAttributes } = useContext(AccountContext);
  const [userAttributes, setUserAttributes] = useState({
    email: 'angeldragneel100172@gmail.com',
    name: 'Angel Carranza',
    username: 'Shiro',
    password: '********' // Just security
  });
  const [editedUserAttributes, setEditedUserAttributes] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    getUserAttributes().then(attributes => {
      setUserAttributes(attributes);
    }).catch(error => {
      console.error('Failed to fetch user attributes:', error);
    });
  }, [getUserAttributes]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    // Reiniciar los cambios editados
    setEditedUserAttributes({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualizar los cambios editados
    setEditedUserAttributes(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveClick = () => {
    setIsConfirmDialogOpen(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Reiniciar los cambios editados
    setEditedUserAttributes({});
  };

  const handleConfirmDialogClose = () => {
    setIsConfirmDialogOpen(false);
    setIsEditing(false);
    // Reiniciar los cambios editados
    setEditedUserAttributes({});
  };

  const handleConfirmSave = () => {
    // Aplicar los cambios editados al estado principal de los atributos del usuario
    setUserAttributes(prevState => ({
      ...prevState,
      ...editedUserAttributes
    }));
    setIsConfirmDialogOpen(false);
    setIsEditing(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Box bgcolor={"white"} flex={4} p={5}>
      <h1>Account Settings</h1>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar src="https://unavatar.io/holamundo" sx={{ width: 200, height: 200 }} />
        <Fab size="small" color="primary" aria-label="edit-image">
          <EditIcon />
        </Fab>
      </Stack>
      <Box mt={2}>
        {isEditing ? (
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={editedUserAttributes.email || userAttributes.email}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
        ) : (
          <Typography variant="h6" sx={{ fontWeight: 'normal', marginBottom: 2 }}>Email: {userAttributes.email}</Typography>
        )}
        {isEditing ? (
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={editedUserAttributes.name || userAttributes.name}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
        ) : (
          <Typography variant="h6" sx={{ fontWeight: 'normal', marginBottom: 2 }}>Name: {userAttributes.name}</Typography>
        )}
        {isEditing ? (
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={editedUserAttributes.username || userAttributes.username}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
        ) : (
          <Typography variant="h6" sx={{ fontWeight: 'normal', marginBottom: 2 }}>Username: {userAttributes.username}</Typography>
        )}
        {isEditing ? (
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"} // Set type to password for password field
                label="Password"
                name="password"
                value={editedUserAttributes.password || ""}
                onChange={handleChange} // Allow editing
              />
              <Button onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <TextField
                fullWidth
                type={showConfirmPassword ? "text" : "password"} // Set type to password for confirm password field
                label="Confirm Password"
                name="confirmPassword"
                value={editedUserAttributes.confirmPassword || ""}
                onChange={handleChange} // Allow editing
              />
              <Button onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </Button>
            </Box>
          </Box>
        ) : (
          <Typography variant="h6" sx={{ fontWeight: 'normal', marginBottom: 2 }}>Password: ********</Typography>
        )}
      </Box>
      <Box mt={4} textAlign="right">
        {isEditing && (
          <Button variant="contained" color="error" onClick={handleCancelClick} sx={{ marginRight: 2 }}>
            Cancel
          </Button>
        )}
        <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={isEditing ? handleSaveClick : handleEditClick}>
          {isEditing ? 'Save' : 'Edit'}
        </Button>
      </Box>
      <Dialog open={isConfirmDialogOpen} onClose={handleConfirmDialogClose}>
        <DialogTitle>Confirm Save</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to save the changes?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmSave} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Settings