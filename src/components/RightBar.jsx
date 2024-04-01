import { Box } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      bgcolor={"green"}
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed" top={80} bottom={0}>

      RightBar
      </Box>
    </Box>
  );
};

export default RightBar;
