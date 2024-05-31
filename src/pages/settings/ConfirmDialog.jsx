import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

function ConfirmDialog({ isOpen, onClose, onConfirm }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Confirm Save</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to save the changes?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary" autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
