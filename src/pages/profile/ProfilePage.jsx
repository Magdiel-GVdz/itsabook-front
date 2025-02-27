import { Box, Stack } from "@mui/material";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import Profile from "./Profile";
import RightBar from "../../components/RightBar";
import NewPostButton from "../../components/NewPostButton";

export default function ProfilePage() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <SideBar />
        <Profile />
        <RightBar />
        <NewPostButton />
      </Stack>
    </Box>
  );
}
