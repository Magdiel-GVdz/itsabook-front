import React, { useState } from 'react';
import { Box, TextField, Button, Typography, CircularProgress, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import useGoogleBooks from '../../hooks/useGoogleBooks';
import BookCard from './BookCard';
import BookDialog from './BookDialog';

function Books() {
  const [query, setQuery] = useState("Brandon Sanderson");
  const [category, setCategory] = useState(0); // 0 para título, 1 para autor
  const [data, loading, error] = useGoogleBooks(query, category);
  const [selectedBook, setSelectedBook] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSearch = () => {
    setQuery(query); // Esto dispara el useEffect en el hook para buscar libros
  };

  const handleClickOpen = (book) => {
    setSelectedBook(book);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBook(null);
  };

  return (
    <Box flex={4} p={2}>
      <Typography  variant="h4" gutterBottom>
        Search for Books
      </Typography>
      <Box display="flex" mb={2}>
        <TextField
          variant="outlined"
          label="Search for books"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          fullWidth
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{ style: { color: 'white' } }}
        />
        <FormControl variant="outlined" sx={{ ml: 2, minWidth: 120 }}>
          <InputLabel sx={{ color: 'white' }}>Category</InputLabel>
          <Select
          sx={{ color: 'white' }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
          >
            <MenuItem value={0}>Title</MenuItem>
            <MenuItem value={1}>Author</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleSearch} sx={{ ml: 2, bgcolor: 'white', color: 'black', '&:hover': { bgcolor: '#f5f5f5' } }}>
          Search
        </Button>
      </Box>
      {loading && <CircularProgress />}
      {error && <Typography color="error">Error fetching books: {error.message}</Typography>}
      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
        {data && data.data.map((book) => (
          <BookCard key={book.id} book={book} onClickOpen={handleClickOpen} />
        ))}
      </Box>

      <BookDialog open={open} book={selectedBook} onClose={handleClose} />
    </Box>
  );
}

export default Books;
