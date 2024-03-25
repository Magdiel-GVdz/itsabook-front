import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { Account } from "./components/Account";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Account>
      <App />
    </Account>
  </div>
);
