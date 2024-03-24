import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";

function Status() {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((res) => {
      console.log("Session: ", res);
      setStatus(true);
    });
  }, []);

  return <div>{status ? (<button onClick={logout}>Logout</button>) : "Please login"}</div>;
}

export default Status;
