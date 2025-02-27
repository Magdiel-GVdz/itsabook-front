import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
  styled,
  Badge,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Box,
} from "@mui/material";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";

import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { AccountContext } from "../context/Account";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled("div")(({ theme }) => ({
  display: "none",
  alignItems: "center", // Alinea verticalmente los elementos al centro
  gap: theme.spacing(2), // Espacio entre los iconos
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export default function Navbar() {
  const { logout } = useContext(AccountContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar position="fixed" sx={{ backgroundColor: "#000000", boxShadow: "0px 4px 10px rgba(0,0,0,0.5)" }}>
        <StyledToolbar>
          <Link to="/feed" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<LocalLibraryRoundedIcon fontSize="large" />}
              sx={{ color: "white" }}
            >
              <Typography
                variant="h6"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                It's a Book!
              </Typography>{" "}
            </Button>
          </Link>
          <Icons>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar src="https://unavatar.io/jfgjorge" />
              </IconButton>
            </Tooltip>
          </Icons>

          <UserBox>
            <Button
              sx={{ color: "white", ml: 2 }}
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar src="https://unavatar.io/jfgjorge" />
            </Button>
          </UserBox>
        </StyledToolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            backgroundColor: "#3c3c3c",
            color: "white",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "#3c3c3c",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem component={Link} to="/profile/1" onClick={handleClose}>
          <Avatar src="https://unavatar.io/jfgjorge" /> Profile
        </MenuItem>

        <Divider />

        <MenuItem component={Link} to="/settings/account" onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>

        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
