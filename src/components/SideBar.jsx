import React from "react";
import {
  Avatar,
  Box,
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
      <List>
        <Link to={"/feed"}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </Link>
        <Link to={"/explore"}>
          <ListItemButton>
            <ListItemIcon>
              <SearchRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItemButton>
        </Link>
        <Link to={"/books"}>
          <ListItemButton>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Books" />
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );
};

export default SideBar;
