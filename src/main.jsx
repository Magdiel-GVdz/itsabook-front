import React from "react";
import ReactDOM from "react-dom/client";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import App from "./App";
import { Account } from "./context/Account";
import DataAdapter from "./utils/DataAdapter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Account>
      <App />
    </Account>
);
