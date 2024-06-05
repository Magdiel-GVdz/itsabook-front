import React, { useState } from "react";
import { Box } from "@mui/material";
import UserInfo from "./UserInfo";
import ReviewContent from "./ReviewContent";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import LikesCounter from "./LikesCounter";
import CommentSection from "./CommentSection";

const FeedPostCard = ({ post, userNickname }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [commenting, setCommenting] = useState(false);
  const [comment, setComment] = useState("");

  const handleLikeClick = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  const handleCommentClick = () => {
    setCommenting(true);
  };

  const handleCommentSubmit = () => {
    // Lógica para enviar el comentario
    console.log("Comentario enviado:", comment);
    setComment("");
  };

  return (
    <Box sx={{ marginTop: '30px', backgroundColor: '#111111', color: 'white', p: 2, borderRadius: 2, mb: 2, boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)' }}>
      <UserInfo userProfilePicture={post.userProfilePicture} userNickname={userNickname} ratingValue={post.ratingValue} />
      <ReviewContent reviewText={post.reviewText} selectedBook={post.selectedBook} sx={{ backgroundColor: '#1e1e1e', color: 'white', borderRadius: 2, p: 2, mb: 1 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LikeButton liked={liked} likesCount={likesCount} handleLikeClick={handleLikeClick} />
          <CommentButton handleCommentClick={handleCommentClick} />
        </Box>
        <LikesCounter likesCount={likesCount} />
      </Box>
      <CommentSection commenting={commenting} comment={comment} handleCommentSubmit={handleCommentSubmit} setComment={setComment} />
    </Box>
  );
};

export default FeedPostCard;
