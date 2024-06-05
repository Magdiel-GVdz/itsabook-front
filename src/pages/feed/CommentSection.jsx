import React, { useState, useContext } from "react";
import { Box, TextField, Button, Avatar, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { AccountContext } from '../../context/Account'; 

const CommentSection = ({ commenting, comment, handleCommentSubmit, setComment }) => {
  const [submittedComments, setSubmittedComments] = useState([]);
  const { userAttributes } = useContext(AccountContext);
  const userNickname = userAttributes ? userAttributes.nickname : "Usuario"; // Obtener el nombre de usuario

  const handleSubmitComment = () => {
    if (comment.trim() !== "") {
      setSubmittedComments([...submittedComments, { userNickname, comment }]);
      handleCommentSubmit();
    }
  };

  return (
    <>
      {submittedComments.map((submittedComment, index) => (
        <Box
          key={index}
          mt={1}
          display="flex"
          flexDirection="column"
          bgcolor="#111111" // Cambiar el color de fondo del comentario publicado a #111111
          p={1} // Padding interno del comentario
          sx={{ borderRadius: '15px' }} // Añadir borde redondeado al comentario
        >
          <Typography variant="body1" mb={1}></Typography>
          <Box display="flex" alignItems="center">
            <Avatar src="https://unavatar.io/jfgjorge" alt="User Avatar" sx={{ mr: 1, marginTop: '30px' }} />
            <Box display="flex" flexDirection="column" flex="1">
              <Typography variant="body1" mb={1} sx={{ color: 'white' }}>{submittedComment.userNickname}</Typography>
              <Typography bgcolor={"#4d4d4d"} variant="body2" sx={{borderRadius: '15px' , color: 'white', padding:'10px' }}>{submittedComment.comment}</Typography>
            </Box>
          </Box>
        </Box>
      ))}

      {commenting && (
        <Box mt={1}>
          <TextField
            id="comment"
            label="Write a comment"
            variant="outlined"
            fullWidth
            value={`${comment}`} 
            onChange={(e) => setComment(e.target.value)}
            sx={{
              borderRadius: '15px', 
              backgroundColor: 'white', 
              '& label.Mui-focused': { color: '#4d4d4d' }, // Cambiar el color del texto a #4d4d4d cuando está enfocado
              '& .MuiOutlinedInput-root': { 
                '&.Mui-focused fieldset': { 
                  borderColor: 'white'  // Aquí se establece el borde blanco cuando está enfocado
                } 
              } 
            }}
            InputLabelProps={{ sx: { color: '#4d4d4d' } }} // Cambiar el color del texto a #4d4d4d
            InputProps={{ sx: {borderRadius: '15px' , color: 'black' } }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<SendIcon />}
              onClick={handleSubmitComment}
              sx={{
                backgroundColor: 'transparent',
                color: 'white',
                boxShadow: 'none',
                '&:hover': { 
                  backgroundColor: '#f5f5f5',
                  color: 'black'
                },
                '&:hover svg': {
                  color: 'black'
                }
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CommentSection;
