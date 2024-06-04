import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';

function BookCard({ book, onClickOpen }) {
  return (
    <Card sx={{ width: 200, mb: 2 }}>
      {book.image && (
        <CardMedia
          component="img"
          height="300"
          image={book.image}
          alt={book.title}
        />
      )}
      <CardContent>
        <Typography variant="h6" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.authors.length > 0 ? book.authors.join(", ") : "No author"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => onClickOpen(book)}>
          Preview
        </Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;
