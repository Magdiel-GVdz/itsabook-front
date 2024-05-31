import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

function CancelConfirmationDialog({ isOpen, onClose, onCancel }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Confirm Cancel</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to cancel editing? 
            Your changes will be discarded.</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Continue Editing
        </Button>
        <Button onClick={onCancel} color="error" autoFocus>
          Cancel Editing
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CancelConfirmationDialog;
