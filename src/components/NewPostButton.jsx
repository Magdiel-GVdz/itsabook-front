import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Fab } from "@mui/material";
import { Link } from "react-router-dom";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const NewPostButton = () => {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {/* Contenedor relativo necesario para el posicionamiento del FAB */}
      <Box
        sx={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          zIndex: 1000,
          display: { xs: "block", sm: "none" },
        }}
      >
        <Fab variant="extended" color="primary" aria-label="add" component={Link} to="/compose/post">
          <HistoryEduIcon sx={{ mr: 1 }}  />
          Post
        </Fab>
      </Box>
      {/* Contenido de tu aplicación */}
    </Box>
  );
};

export default NewPostButton;
