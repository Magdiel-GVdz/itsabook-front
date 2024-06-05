import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Rating,
  Typography,
  CircularProgress
} from "@mui/material";
import SearchBook from "../../components/SearchBook";
import { SelectedBookContext } from "../../context/SelectedBookProvider";
import { AccountContext } from "../../context/Account";
import BookDetails from "./BookDetails.jsx";
import ReviewForm from "./ReviewForm.jsx";
import { StyledModal, StyledModalContent } from "./StyledComponents.jsx";
import useReviewPosting from "../../hooks/useReviewPosting";

function NewPost() {
  const { userAttributes } = useContext(AccountContext);
  const [value, setValue] = useState(0);
  const { selectedBook, handleClose, handleOpen, open } = useContext(SelectedBookContext);
  const { loading, error, success, postReview } = useReviewPosting();

  const handleReviewSubmit = async (selectedBook, value, review) => {
    if (!selectedBook) {
      alert("Please select a book first.");
      return;
    }
    if (value === 0 || value === null) {
      alert("Please rate the book first.");
      return;
    }
    const postData = {
      sub: userAttributes.sub,
      selectedBook: selectedBook,
      ratingValue: value,
      reviewText: review,
    };

    await postReview(postData);
  };

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
          <Typography color={"white"} variant="h6">CREATE POST</Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleOpen} 
            sx={{ bgcolor: 'white', color: 'black', '&:hover': { bgcolor: '#f5f5f5' } }}
          >
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
          <ReviewForm
            selectedBook={selectedBook}
            value={value}
            onSubmit={handleReviewSubmit}
          />
          {loading && <CircularProgress />}
          {error && <Typography color="error">Failed to post review: {error}</Typography>}
          {success && <Typography color="primary">Review posted successfully!</Typography>}
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
