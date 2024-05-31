import React from 'react';
import { Box, Stack } from "@mui/material";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import Settings from "./Settings";
import NewPostButton from "../../components/NewPostButton";

export default function SettingsAccountPage() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <SideBar />
        <Settings />
        <NewPostButton />
      </Stack>
    </Box>
  );
}
