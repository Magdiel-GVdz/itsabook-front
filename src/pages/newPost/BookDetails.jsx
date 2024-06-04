import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

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

export default BookDetails;
