// useReviewPosting.js
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

    try {
      const response = await axios.post("https://f7yok7cfx6.execute-api.us-east-1.amazonaws.com/prod/api/v1/post", postData);
      
      console.log("Response:", response.data);
      setSuccess(true);
    } catch (error) {
      console.error("Failed to post:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, postReview };
};

export default useReviewPosting;
