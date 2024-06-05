import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import FeedPostCard from "./FeedPostCard";
import { AccountContext } from '../../context/Account'; 

const FeedPosts = () => {
  const { userAttributes } = useContext(AccountContext);
  const userNickname = userAttributes ? userAttributes.nickname : "Usuario";

  // Datos de prueba
  const testPosts = [
    {
      userNickname: userNickname,
      userProfilePicture: "https://unavatar.io/jfgjorge",
      selectedBook: {
        title: "The Name of the Wind",
        authors: ["Patrick Rothfuss"],
        publisher: "DAW Books",
        publishedDate: "2007-03-27",
        pageCount: 662,
        language: "es",
        previewLink: "http://books.google.com/books?id=The_name_of_the_wind",
        averageRating: 4.5,
        ratingsCount: 3456,
        categories: ["Fantasy"],
        description: "An epic fantasy novel...",
        image: "http://books.google.com/cover_image.jpg",
        link: "http://books.google.com/books?id=The_name_of_the_wind"
      },
      ratingValue: 5,
      reviewText: "Waos"
    },
    {
      userNickname: userNickname,
      userProfilePicture: "https://unavatar.io/jfgjorge",
      selectedBook: {
        title: "The Wise Man's Fear",
        authors: ["Patrick Rothfuss"],
        publisher: "DAW Books",
        publishedDate: "2011-03-01",
        pageCount: 1008,
        language: "es",
        previewLink: "http://books.google.com/books?id=The_wise_mans_fear",
        averageRating: 4.6,
        ratingsCount: 5678,
        categories: ["Fantasy"],
        description: "The continuation of Kvothe's epic story...",
        image: "http://books.google.com/cover_image_temor.jpg",
        link: "http://books.google.com/books?id=The_wise_mans_fear"
      },
      ratingValue: 5,
      reviewText: "Double Waos"
    }
  ];

  return (
    <Box flex={4} p={5}>
      <Box mt={2}>
        <Typography color={'white'} marginTop={'30px'} variant="h4" gutterBottom>
          Feed Posts
        </Typography>

        {testPosts.map((post, index) => (
          <FeedPostCard key={index} post={post} userNickname={userNickname} />
        ))}
      </Box>
    </Box>
  );
};

export default FeedPosts;
