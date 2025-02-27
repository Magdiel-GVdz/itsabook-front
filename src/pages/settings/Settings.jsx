import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import { AccountContext } from "../../context/Account";
import EditIcon from '@mui/icons-material/Edit';
import EditForm from './EditForm';
import ConfirmDialog from './ConfirmDialog';
import CancelConfirmationDialog from './CancelConfirmationDialog';
import ChangePasswordDialog from './ChangePasswordDialog';

function Settings() {
  const { getUserAttributes, updateUserAttributes, userAttributes, changePassword } = useContext(AccountContext);
  const [editedUserAttributes, setEditedUserAttributes] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [isCancelConfirmationOpen, setIsCancelConfirmationOpen] = useState(false);
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false); // Nuevo estado
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    getUserAttributes()
      .then(attributes => {
        setEditedUserAttributes(attributes);
      })
      .catch(error => {
        console.error('Failed to fetch user attributes:', error);
      });
  }, [getUserAttributes]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setErrorMessage('');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserAttributes(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveClick = () => {
    const isFieldsValid = validateFields();
    if (isFieldsValid) {
      setIsConfirmDialogOpen(true);
      setErrorMessage('');
    } else {
      setErrorMessage('*Please fill every field!*');
    }
  };

  const validateFields = () => {
    return editedUserAttributes.email !== '' && editedUserAttributes.nickname !== '';
  };

  const handleCancelClick = () => {
    if (isEditing && Object.keys(editedUserAttributes).length > 0) {
      setIsCancelConfirmationOpen(true);
    } else {
      handleCancelEditing();
    }
  };

  const handleConfirmCancel = () => {
    handleCancelEditing();
    setIsCancelConfirmationOpen(false);
  };

  const handleCancelEditing = () => {
    setIsEditing(false);
    setEditedUserAttributes(userAttributes); // Restablecer a los atributos originales
    setErrorMessage('');
  };

  const handleConfirmDialogClose = () => {
    setIsConfirmDialogOpen(false);
    setIsEditing(true);
  };

  const handleConfirmSave = () => {
    updateUserAttributes(editedUserAttributes)
      .then(() => {
        setSuccessMessage('Changes saved successfully!');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      })
      .catch(error => {
        console.error('Error updating user attributes:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error:', error.message);
        }
        setErrorMessage('Failed to save changes.');
      })
      .finally(() => {
        setIsConfirmDialogOpen(false);
        setIsEditing(false);
      });
  };

  const handleOpenPasswordDialog = () => {
    setIsPasswordDialogOpen(true);
  };

  const handleClosePasswordDialog = () => {
    setIsPasswordDialogOpen(false);
  };

  const handleChangePassword = (currentPassword, newPassword) => {
    changePassword(userAttributes.email, currentPassword, newPassword)
      .then(() => {
        setSuccessMessage('Password changed successfully!');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
        handleClosePasswordDialog();
      })
      .catch(error => {
        console.error('Error changing password:', error);
        setErrorMessage('Failed to change password.');
      });
  };

  return (
    <Box bgcolor={"gray"} flex={4} p={5}>
      <h1 style={{ color: 'white' }}>Account Settings</h1>
      <EditForm
        userAttributes={userAttributes}
        editedUserAttributes={editedUserAttributes}
        isEditing={isEditing}
        handleChange={handleChange}
      />
      <Typography color="error">{errorMessage}</Typography>
      <Typography color="success">{successMessage}</Typography>
      <Box mt={4} textAlign="right">
        {isEditing && (
          <Button variant="contained" color="error" onClick={handleCancelClick} sx={{ color: 'white', bgcolor: 'black', marginRight: 2 }}>
            Cancel
          </Button>
        )}
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<EditIcon />} 
          onClick={isEditing ? handleSaveClick : handleEditClick} 
          sx={{ color: 'black', bgcolor: 'white', '&:hover': { bgcolor: '#f5f5f5' } }}
        >
          {isEditing ? 'Save' : 'Edit'}
        </Button>
      </Box>

      <Typography mt={4} style={{ color: 'white', cursor: 'pointer' }} onClick={handleOpenPasswordDialog}>
        Change Password
      </Typography>

      <ChangePasswordDialog
        isOpen={isPasswordDialogOpen}
        onClose={handleClosePasswordDialog}
        onChangePassword={handleChangePassword}
      />

      <ConfirmDialog
        isOpen={isConfirmDialogOpen}
        onClose={handleConfirmDialogClose}
        onConfirm={handleConfirmSave}
      />
      <CancelConfirmationDialog
        isOpen={isCancelConfirmationOpen}
        onClose={() => setIsCancelConfirmationOpen(false)}
        onCancel={handleConfirmCancel}
      />
    </Box>
  );
}

export default Settings;
