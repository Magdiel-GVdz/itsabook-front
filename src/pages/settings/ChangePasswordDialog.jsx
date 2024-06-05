import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function ChangePasswordDialog({ isOpen, onClose, onChangePassword }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCurrentPasswordChange = (e) => setCurrentPassword(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSave = () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage('*New passwords do not match!*');
      return;
    }
    onChangePassword(currentPassword, newPassword);
  };

  const toggleShowCurrentPassword = () => setShowCurrentPassword(!showCurrentPassword);
  const toggleShowNewPassword = () => setShowNewPassword(!showNewPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Change Password</DialogTitle>
      <DialogContent>
        <TextField
          label="Current Password"
          type={showCurrentPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
          InputProps={{
            endAdornment: (
              <Button onClick={toggleShowCurrentPassword}>
                {showCurrentPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </Button>
            )
          }}
        />
        <TextField
          label="New Password"
          type={showNewPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          value={newPassword}
          onChange={handleNewPasswordChange}
          InputProps={{
            endAdornment: (
              <Button onClick={toggleShowNewPassword}>
                {showNewPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </Button>
            )
          }}
        />
        <TextField
          label="Confirm New Password"
          type={showConfirmPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          InputProps={{
            endAdornment: (
              <Button onClick={toggleShowConfirmPassword}>
                {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </Button>
            )
          }}
        />
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleSave} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ChangePasswordDialog;
