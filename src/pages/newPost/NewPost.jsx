import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Modal,
  Rating,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useContext, useState } from "react";
import SearchBook from "../../components/SearchBook";
import { SelectedBookContext } from "../../context/SelectedBookProvider";

// Estilo para el modal
const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Estilo para el contenido del modal
const StyledModalContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Alinea el contenido al principio del modal */
  width: 90%; /* Ajusta el ancho para que sea más grande */
  max-width: 600px;
  height: 70vh; /* Reducimos la altura para dejar espacio para el botón de cierre */
  background-color: white;
  border: 2px solid black;
  padding: 20px;
  overflow-y: auto; /* Habilita el scroll vertical */
`;

function BookDetails({ book }) {
  return (
    <Box mt={2}>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              {book.image && (
                <img
                  src={book.image}
                  alt="Book cover"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              )}
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6">{book.title}</Typography>
              {book.subtitle && (
                <Typography variant="subtitle1">{book.subtitle}</Typography>
              )}
              <Typography variant="body1">
                Author: {book.authors.join(", ")}
              </Typography>
              <Typography variant="body1">
                Publisher: {book.publisher}
              </Typography>
              <Typography variant="body1">
                Published Date: {book.publishedDate}
              </Typography>
              <Typography variant="body1">Pages: {book.pageCount}</Typography>
              <Typography variant="body1">Language: {book.language}</Typography>

              {book.categories.length > 0 && (
                <Typography variant="body1">
                  Categories: {book.categories.join(", ")}
                </Typography>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

function ReviwForm() {
  const [review, setReview] = useState('');
  const handleReviewSubmit = () => {
    // Aquí puedes manejar la lógica para enviar la reseña
    console.log('Reseña:', review);
  }

  return (
    <Box mt={2}>
      <Typography variant="h6">Write a review</Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        label="Write a review"
        value={review}
        onChange={(event) => setReview(event.target.value)}
        sx={{ mt: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleReviewSubmit}
        sx={{ mt: 2 }}
        style={{ marginBottom: '32px' }}
      >
        Publish review
      </Button>
    </Box>
  );
}

function NewPost() {
  const [value, setValue] = useState(0);
  const { selectedBook, handleClose, handleOpen, open } =
    useContext(SelectedBookContext);

  return (
    <>
      <Box
        flex={4}
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflowY="auto"
        height="100vh"
      >
        <Box position="relative" top={80}>
          <Typography variant="h6">CREATE POST</Typography>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Select book
          </Button>
          {selectedBook && <BookDetails book={selectedBook} />}
          {selectedBook && (
            <Box>
              <Typography variant="h6" mt={2}>
                Rate this book!
              </Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          )}
          <ReviwForm/>
        </Box>
      </Box>

      <StyledModal open={open} onClose={handleClose}>
        <StyledModalContent>
          <SearchBook />
        </StyledModalContent>
      </StyledModal>
    </>
  );
}

export default NewPost;
