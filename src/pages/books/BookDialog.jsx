import React from 'react';
import { Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function BookDialog({ open, book, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {book?.title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {book && (
          <Box display="flex" flexDirection="column" alignItems="center">
            {book.image && (
              <Box mb={2}>
                <img src={book.image} alt={book.title} style={{ maxWidth: '100%' }} />
              </Box>
            )}
            <Typography variant="body1" gutterBottom>
              {book.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Authors: {book.authors.join(", ")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Publisher: {book.publisher}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Published Date: {book.publishedDate}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Page Count: {book.pageCount}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Average Rating: {book.averageRating}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ratings Count: {book.ratingsCount}
            </Typography>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button 
          onClick={() => window.open(book.link, "_blank")} 
          color="primary"
        >
          More Details
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default BookDialog;
