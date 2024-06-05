import React from "react";
import {
  Box,
  Fab,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <Box
      bgcolor={"#1e1e1e"}
      color={"white"}
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed" top={60} bottom={0}>
        <List justifyItems={"center"}>
          <Link
            to={"/feed"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton sx={styles.listItem}>
              <ListItemIcon sx={styles.icon}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" sx={styles.text} />
            </ListItemButton>
          </Link>
          <Link
            to={"/books"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton sx={styles.listItem}>
              <ListItemIcon sx={styles.icon}>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="Books" sx={styles.text} />
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
            sx={styles.fab}
          >
            <HistoryEduIcon sx={styles.fabIcon} />
            Create post
          </Fab>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  listItem: {
    "&:hover": {
      backgroundColor: "#4d4d4d",
      borderRadius: "30px",
    },
  },
  icon: {
    color: "white",
  },
  text: {
    color: "white",
  },
  fab: {
    backgroundColor: "white",
    color: "black",
    "&:hover": {
      backgroundColor: "lightgray",
    },
    borderRadius: "30px",
  },
  fabIcon: {
    color: "black",
    marginRight: "30px",
  },
};

export default SideBar;
