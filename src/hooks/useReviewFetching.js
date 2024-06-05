// useReviewFetching.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useReviewFetching = (postId) => {
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://f7yok7cfx6.execute-api.us-east-1.amazonaws.com/prod/api/v1/post/${postId}`);
        setReview(response.data);
      } catch (error) {
        console.error("Failed to fetch review:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, [postId]);

  return { review, loading, error };
};

export default useReviewFetching;
