import React from "react";
import { Box, TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const CommentSection = ({ commenting, comment, handleCommentSubmit, setComment }) => (
  <>
    {commenting && (
      <Box mt={2}>
        <TextField
          id="comment"
          label="Write a comment"
          variant="outlined"
          fullWidth
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<SendIcon />}
            onClick={handleCommentSubmit}
            sx={{ backgroundColor: 'transparent', color: 'black', boxShadow: 'none', '&:hover': { backgroundColor: '#f5f5f5' } }}
          >
            Send
          </Button>
        </Box>
      </Box>
    )}
  </>
);

export default CommentSection;
