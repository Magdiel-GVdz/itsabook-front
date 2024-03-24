import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Status from "../components/Status";

import { AccountContext, Account } from "../components/Account";

import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (e) => {
    e.preventDefault();
    authenticate(email, password)
      .then((data) => {
        console.log("Logged in!", data);
      })
      .catch((err) => {
        console.error("Failed to login", data);
      });
  };

  return (
    <div>
      <Status />
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Correo</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {error && <span>{error}</span>}

        <button type="submit">Iniciar sesion</button>

        <Link to="/register">Todavia no tengo cuenta</Link>
      </form>
    </div>
  );
}
