import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const posts = [
  { id: 1, text: "какой-то текст поста №1", likes: 10 },
  { id: 2, text: "какой-то текст поста №2", likes: 44 },
  { id: 3, text: "какой-то текст поста №3", likes: 5 },
];

const dialogs = [
  { id: 1, name: "Sergei" },
  { id: 2, name: "Anton" },
  { id: 3, name: "Evgen" },
];

const messages = [
  { id: 1, text: "Превед" },
  { id: 2, text: "Каг дела?" },
  { id: 3, text: "Ой все!" },
];

const dataObj = { posts, dialogs, messages };

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App data={dataObj} />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
