import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

function LogoutButton() {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((res) => {
      console.log("Session: ", res);
      setStatus(true);
    });
  }, []);

  return <div>{status ? (<Button startIcon={<LogoutIcon />} variant="contained" color="error" onClick={logout}> Cerrar sesion</Button>) : "Please login"}</div>;
}

export default LogoutButton;
