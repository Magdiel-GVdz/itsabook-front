import { useState } from 'react';
import axios from 'axios';

const useReviewPosting = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const postReview = async (postData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formattedData = {
      user_sub: postData.sub,
      selectedBook: postData.selectedBook,
      ratingValue: postData.ratingValue,
      reviewText: postData.reviewText
    };

    try {
      const response = await axios.post("https://f7yok7cfx6.execute-api.us-east-1.amazonaws.com/prod/POST/api/v1/post", formattedData);
      console.log("Response:", response.data);
      setSuccess(true);
    } catch (error) {
      console.error("Failed to post:", error.message);
      console.error("Error details:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, postReview };
};

export default useReviewPosting;
