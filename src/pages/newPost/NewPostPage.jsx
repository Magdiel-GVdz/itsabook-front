import { Box, Stack } from "@mui/material";
import Navbar from "../../components/Navbar";
import NewPost from "./NewPost";
import RightBar from "../../components/RightBar";
import SideBar from "../../components/SideBar";
import NewPostButton from "../../components/NewPostButton";

export default function NewPostPage() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <SideBar />
        <NewPost />
        <RightBar />
        <NewPostButton />
      </Stack>
    </Box>
  );
}
