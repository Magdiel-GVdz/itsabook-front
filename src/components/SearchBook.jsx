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
import useGoogleBooks from "../hooks/useGoogleBooks";
import { FormContainer, useForm } from "react-hook-form-mui";
import { Card, CardContent, Grid } from "@mui/material";
import { SelectedBookContext } from "../context/SelectedBookProvider";
import React, { useState, useContext } from "react";


const SearchBook = () => {
  const { setSelectedBook } = useContext(SelectedBookContext);
  const [query, setQuery] = useState("brandon sanderson");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(0);
  const [data, loading, error] = useGoogleBooks(query, category);
  
  const [hoveredCard, setHoveredCard] = useState(null);
  const categoryOptions = ["Title", "Author", "Publisher", "Subject", "ISBN"]; // Changed to an array

  const { handleSubmit, watch } = useForm();

  const onSubmit = handleSubmit((e) => {
    setQuery(search);
    setCategory((prevState) => prevState);
  });

  const handleCardClick = (book) => {
    setSelectedBook(book);
    console.log(book);
  };

  return (
    <Box flex={4} p={2}>
      <FormContainer onSuccess={onSubmit} component="fieldset">
        <Typography variant="h5">Search Book</Typography>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
          placeholder="Search by title, author, publisher, or ISBN"
        />
        <FormLabel component="legend">Select category</FormLabel>
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
        <Button
          variant="contained"
          color="primary"
          fullWidth
          margin="normal"
          onClick={onSubmit}
          disabled={loading}
          type={"submit"}
        >
          Search
        </Button>
      </FormContainer>

      <Box mt={2} display="flex" justifyContent="center">
        {loading && <CircularProgress />}
        {!loading && error && (
          <Typography variant="body1" color="error">
            Error: {error.message}
          </Typography>
        )}
        {!loading && !error && data && (
          <Box mt={2}>
            {data.data.map((book) => (
              <div
                key={book.id}
                onClick={() => handleCardClick(book)}
                onMouseEnter={() => setHoveredCard(book.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  boxShadow:
                    hoveredCard === book.id
                      ? "0px 0px 10px 5px rgba(0,0,0,0.2)"
                      : "none",
                  transition: "box-shadow 0.3s ease",
                  marginBottom: "20px",
                }}
              >
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
                          <Typography variant="subtitle1">
                            {book.subtitle}
                          </Typography>
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
                        <Typography variant="body1">
                          Pages: {book.pageCount}
                        </Typography>
                        <Typography variant="body1">
                          Language: {book.language}
                        </Typography>

                        {book.categories.length > 0 && (
                          <Typography variant="body1">
                            Categories: {book.categories.join(", ")}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Box>
        )}
      </Box> 
      {/* {selectedBook && (
        <Box mt={2}>
          <Typography variant="h6">Selected Book:</Typography>
          <Typography variant="body1">Title: {selectedBook.title}</Typography>
          <Typography variant="body1">
            Author: {selectedBook.authors.join(", ")}
          </Typography>
          
        </Box>
      )} */}
    </Box>
  );
};

export default SearchBook;
