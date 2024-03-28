import { Box, Stack } from "@mui/material";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import Notifications from "./Notifications";
import RightBar from "../../components/RightBar";
import NewPostButton from "../../components/NewPostButton";

export default function NotificationsPage() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <SideBar />
        <Notifications />
        <RightBar />
        <NewPostButton />
      </Stack>
    </Box>
  );
}
