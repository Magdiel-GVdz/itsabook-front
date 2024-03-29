import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import useGoogleBooks from "../../hooks/useGoogleBooks";
import { FormContainer, useForm } from "react-hook-form-mui";

const FeedPosts = () => {
  const [query, setQuery] = useState("brandon sanderson");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(0);
  const [data, loading, error] = useGoogleBooks(query, category);
  const categoryOptions = ["Title", "Author", "Publisher", "Subject", "ISBN"]; // Cambiado a un array


  const handleCategoryChange = (event) => {
    setCategory(parseInt(event.target.value)); // Convertir el valor a entero
    setCategory((prevState) => prevState);
    console.log(category); // Esto imprimirá el valor anterior, porque setState es asíncrono
  };
  const { handleSubmit, control, watch } = useForm();
  
  const onSubmit = handleSubmit((e) => {
    setQuery(search);
    setCategory((prevState) => prevState);
  })

  const handleOnClick = () => {
    
  };

  return (
    <Box flex={4} p={2}>
      <FormContainer onSuccess={onSubmit} onError={console.log("error")} component="fieldset">
        <Typography variant="h5">Buscar Libro</Typography>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
          placeholder="Buscar por título, autor, editor o ISBN"
        />
        <FormLabel component="legend">Seleccione la categoría</FormLabel>
        <RadioGroup
          row
          aria-label="category"
          name="category"
          value={category.toString()}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categoryOptions.map((option, index) => (
            <FormControlLabel
              key={index}
              value={index}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
        <Button type={"submit"}>Search</Button>
      </FormContainer>
      {loading && <CircularProgress />}
      {error && (
        <Typography variant="body1" color="error">
          Error: {error.message}
        </Typography>
      )}
      {data && (
        <Box mt={2}>
          {data.data.map((book) => (
            <Box key={book.id} mb={2}>
              <Typography variant="h6">{book.title}</Typography>
              {book.subtitle && (
                <Typography variant="subtitle1">{book.subtitle}</Typography>
              )}
              <Typography variant="body1">
                Autor: {book.authors.join(", ")}
              </Typography>
              <Typography variant="body1">Editor: {book.publisher}</Typography>
              <Typography variant="body1">
                Fecha de Publicación: {book.publishedDate}
              </Typography>
              <Typography variant="body1">Páginas: {book.pageCount}</Typography>
              <Typography variant="body1">Idioma: {book.language}</Typography>
              <Typography variant="body1">
                Rating Promedio: {book.averageRating}
              </Typography>
              <Typography variant="body1">
                Cantidad de Ratings: {book.ratingsCount}
              </Typography>
              <Typography variant="body1">
                Categorías: {book.categories.join(", ")}
              </Typography>
              <Typography variant="body1">ISBN: {book.isbn}</Typography>
              <Typography variant="body1">ISBN13: {book.isbn13}</Typography>
              {/* <Typography variant="body1">
                Descripción: {book.description}
              </Typography> */}
              <a
                href={book.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Vista Previa
              </a>
              <br />
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                Más Información
              </a>
              <br />
              {book.image && (
                <img
                  src={book.image}
                  alt="Portada del libro"
                  style={{ maxWidth: "100px", maxHeight: "150px" }}
                />
              )}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FeedPosts;
