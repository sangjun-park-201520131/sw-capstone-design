import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const LoggedInUser = { name: "자까", id: uuidv4(), novelList: [] };
localStorage.setItem("UserData", JSON.stringify(LoggedInUser));

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
