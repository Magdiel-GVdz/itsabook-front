import { Box, Stack } from "@mui/material";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import SearchBook from "./SearchBook";
import RightBar from "../../components/RightBar";
import NewPostButton from "../../components/NewPostButton";

export default function SearchPage() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <SideBar />
        <SearchBook />
        <RightBar />
        <NewPostButton />
      </Stack>
    </Box>
  );
}
