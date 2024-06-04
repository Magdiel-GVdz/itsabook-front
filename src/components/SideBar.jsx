import React from "react";
import {
  Avatar,
  Box,
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookIcon from "@mui/icons-material/Book";
import Settings from "@mui/icons-material/Settings";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <Box
      // bgcolor={"skyblue"}

      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed" top={60} bottom={0} >
        <List justifyItems={"center"}>
          <Link
            to={"/feed"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </Link>          
          <Link
            to={"/books"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="Books" />
            </ListItemButton>
          </Link>
        </List>
        <Box
          display="flex"
          justifyContent="left"
          position="fixed"
          bottom={16} // Adjust as needed
          width="100%"
          zIndex={1000} // Adjust as needed
        >
          <Fab
            variant="extended"
            color="primary"
            aria-label="add"
            component={Link}
            to="/compose/post"
          >
            <HistoryEduIcon sx={{ mr: 1 }} />
            Create post
          </Fab>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
