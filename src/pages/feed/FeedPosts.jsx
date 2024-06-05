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
        previewLink: "http://books.google.com.mx/books?id=Y3OypwAACAAJ&dq=El+nombre+del+viento+intitle&hl=&cd=2&source=gbs_api",
        averageRating: 4.5,
        ratingsCount: 3456,
        categories: ["Fantasy"],
        description: "An epic fantasy novel...",
        image: "http://books.google.com/books/content?id=Y3OypwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "https://books.google.com.mx/books?id=Y3OypwAACAAJ&dq=El+nombre+del+viento+intitle&hl=&source=gbs_api"
      },
      ratingValue: 4,
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
        previewLink: "http://books.google.com.mx/books?id=UbSipwAACAAJ&dq=El+temor+de+un+hombre+sabio+intitle&hl=&cd=2&source=gbs_api",
        averageRating: 4.6,
        ratingsCount: 5678,
        categories: ["Fantasy"],
        description: "The continuation of Kvothe's epic story...",
        image: "http://books.google.com/books/content?id=UbSipwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
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
