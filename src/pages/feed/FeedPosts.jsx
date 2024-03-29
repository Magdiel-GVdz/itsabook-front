import React from "react";
import { Box, Button, Typography } from "@mui/material";
import useGoogleBooks from "../../hooks/useGoogleBooks";

const FeedPosts = () => {
  const [data, loading, error] = useGoogleBooks("brandon sanderson",1);


  return (
    <Box bgcolor={"red"} flex={4} p={2}>
      <Typography>Feed</Typography>
    </Box>
  );
};

export default FeedPosts;
