import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { AccountContext } from "../../context/Account";
import EditIcon from '@mui/icons-material/Edit';
import EditForm from './EditForm';
import ConfirmDialog from './ConfirmDialog';
import AvatarSection from './AvatarSection';
import CancelConfirmationDialog from './CancelConfirmationDialog';

function Settings() {
  const { getUserAttributes } = useContext(AccountContext);
  const [userAttributes, setUserAttributes] = useState({
    email: 'angeldragneel100172@gmail.com',
    nickname: 'Shiro',
  });
  const [editedUserAttributes, setEditedUserAttributes] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [isCancelConfirmationOpen, setIsCancelConfirmationOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch user attributes when component mounts
  useEffect(() => {
    getUserAttributes().then(attributes => {
      setUserAttributes(attributes);
    }).catch(error => {
      console.error('Failed to fetch user attributes:', error);
    });
  }, [getUserAttributes]);

  // Toggle editing mode
  const handleEditClick = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setEditedUserAttributes({});
      setErrorMessage('');
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserAttributes(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Validate fields before saving
  const handleSaveClick = () => {
    const isFieldsValid = validateFields();
    if (isFieldsValid) {
      setIsConfirmDialogOpen(true);
      setErrorMessage('');
    } else {
      setErrorMessage('*Please fill every field!*');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000); // Clear error message after 3 seconds
    }
  };

  const validateFields = () => {
    return editedUserAttributes.email !== '' && editedUserAttributes.nickname !== '';
  };

  // Handle cancel button click
  const handleCancelClick = () => {
    if (isEditing && Object.keys(editedUserAttributes).length > 0) {
      setIsCancelConfirmationOpen(true);
    } else {
      handleCancelEditing();
    }
  };

  // Confirm cancel and discard changes
  const handleConfirmCancel = () => {
    handleCancelEditing();
    setIsCancelConfirmationOpen(false);
  };

  // Cancel editing and discard changes
  const handleCancelEditing = () => {
    setIsEditing(false);
    setEditedUserAttributes({});
    setErrorMessage('');
  };

  // Handle confirmation dialog close
  const handleConfirmDialogClose = () => {
    setIsConfirmDialogOpen(false);
    setIsEditing(true);
  };

  // Confirm and save changes
  const handleConfirmSave = () => {
    setUserAttributes(prevState => ({
      ...prevState,
      ...editedUserAttributes
    }));
    setIsConfirmDialogOpen(false);
    setIsEditing(false);
    setSuccessMessage('Changes saved successfully!');
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <Box bgcolor={"white"} flex={4} p={5}>
      <h1>Account Settings</h1>
      <AvatarSection />
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
          <Button variant="contained" color="error" onClick={handleCancelClick} sx={{ marginRight: 2 }}>
            Cancel
          </Button>
        )}
        <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={isEditing ? handleSaveClick : handleEditClick}>
          {isEditing ? 'Save' : 'Edit'}
        </Button>
      </Box>
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