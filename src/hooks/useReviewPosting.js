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
      ratingValue: postData.ratingValue,
      reviewText: postData.reviewText,
      selectedBook: {
        id: postData.selectedBook.id,
        publisher: postData.selectedBook.publisher ?? "Publisher not available",
        publishedDate: postData.selectedBook.publishedDate ?? "Date not available",
        authors: postData.selectedBook.authors ?? [],
        averageRating: postData.selectedBook.averageRating ?? 0,
        categories: postData.selectedBook.categories ?? [],
        description: postData.selectedBook.description ?? "Description not available",
        image: postData.selectedBook.image ?? "",
        isbn: postData.selectedBook.isbn ?? "",
        isbn13: postData.selectedBook.isbn13 ?? "",
        language: postData.selectedBook.language ?? "Language not available",
        link: postData.selectedBook.link ?? "",
        pageCount: postData.selectedBook.pageCount ?? 0,
        previewLink: postData.selectedBook.previewLink ?? ""
      },
      sub: postData.sub
    };

    try {
      const response = await axios.post("https://f7yok7cfx6.execute-api.us-east-1.amazonaws.com/prod/api/v1/post", formattedData);
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
