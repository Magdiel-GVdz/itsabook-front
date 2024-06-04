import React from "react";
import { Box, Typography } from "@mui/material";
import BookDetails from "../newPost/BookDetails.jsx";

const ReviewContent = ({ reviewText, selectedBook }) => (
  <>
    <BookDetails book={selectedBook} />
    <Typography variant="body1" mt={2}>
      {reviewText}
    </Typography>
  </>
);

export default ReviewContent;
