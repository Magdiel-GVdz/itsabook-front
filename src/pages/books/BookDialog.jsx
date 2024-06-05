import React from 'react';
import { Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function BookDialog({ open, book, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ backgroundColor: '#111111', color: 'white' }}>
        {book?.title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'white',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ backgroundColor: '#111111', color: 'white' }}>
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
            <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
              Authors: {book.authors.join(", ")}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
              Publisher: {book.publisher}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
              Published Date: {book.publishedDate}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
              Page Count: {book.pageCount}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
              Average Rating: {book.averageRating}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
              Ratings Count: {book.ratingsCount}
            </Typography>
          </Box>
        )}
      </DialogContent>
      <DialogActions sx={{ backgroundColor: '#111111', color: 'white' }}>
        <Button onClick={onClose} color="primary" sx={{ color: 'white' }}>
          Cancel
        </Button>
        <Button 
          onClick={() => window.open(book.link, "_blank")} 
          color="primary"
          sx={{ color: 'white', '&:hover': { bgcolor: '#f5f5f5', color: 'black' } }}
        >
          More Details
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default BookDialog;
