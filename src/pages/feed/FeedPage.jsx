import FeedPosts from "./FeedPosts";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import { Box, Stack } from "@mui/material";
import RightBar from "../../components/RightBar";

export default function FeedPage() {
  return (
    <Box>
        <Navbar />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <SideBar />
        <FeedPosts />
        <RightBar />
      </Stack>
    </Box>
  );
}
