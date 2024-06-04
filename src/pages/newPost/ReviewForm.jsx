import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function ReviewForm({ selectedBook, value, onSubmit }) {
  const [review, setReview] = useState("");

  const handleReviewSubmit = () => {
    onSubmit(selectedBook, value, review);
  };

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
        style={{ marginBottom: "32px" }}
      >
        Publish review
      </Button>
    </Box>
  );
}

export default ReviewForm;
