// src/components/RightBar.jsx

import { Box, Typography } from "@mui/material";
import React from "react";
import UserRecommendationCard from "../rightCards/UserRecommendationCard";
import UserData from "../rightCards/UserData";

const RightBar = () => {
  const users = UserData(); // Obtener los datos de los usuarios

  return (
    <Box
      bgcolor={"lightblue"}
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed" top={80} bottom={10}>
        <Typography variant="h6" mb={2}>
          Users you may like
        </Typography>
        {users.map((user, index) => (
          <UserRecommendationCard key={index} user={user} />
        ))}
      </Box>
    </Box>
  );
};

export default RightBar;
