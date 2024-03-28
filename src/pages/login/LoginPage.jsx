import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AccountContext } from "../../context/Account";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <>
      <LoginForm />
    </>
  );
}

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [error, setError] = useState();

// const { authenticate, setUserLoggedIn } = useContext(AccountContext);

// const onSubmit = (e) => {
//   e.preventDefault();
//   authenticate(email, password)
//     .then((data) => {
//       setUserLoggedIn(true);
//       console.log("Logged in!", data);
//     })
//     .catch((err) => {
//       setError("El usuario o la contraseña son incorrectos.");
//     });
// };

// return (
//   <div>
//     <form onSubmit={onSubmit}>
//       <label htmlFor="email">Correo</label>
//       <input
//         type="email"
//         id="email"
//         name="email"

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [error, setError] = useState();

// const { authenticate, setUserLoggedIn } = useContext(AccountContext);

// const onSubmit = (e) => {
//   e.preventDefault();
//   authenticate(email, password)
//     .then((data) => {
//       setUserLoggedIn(true);
//       console.log("Logged in!", data);
//     })
//     .catch((err) => {
//       setError("El usuario o la contraseña son incorrectos.");
//     });
// };

// return (
//   <div>
//     <form onSubmit={onSubmit}>
//       <label htmlFor="email">Correo</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={email}
//         onChange={(event) => setEmail(event.target.value)}
//       />

//       <label htmlFor="password">Contraseña</label>
//       <input
//         type="password"
//         id="password"
//         name="password"
//         value={password}
//         onChange={(event) => setPassword(event.target.value)}
//       />

//       {error && <span>{error}</span>}

//       <Button startIcon={<LoginIcon />} variant="contained" type="submit">Iniciar sesion</Button>

//       <Link to="/register">Todavia no tengo cuenta</Link>
//     </form>
//   </div>
// );
