import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { addPost, updateState } from "./Redux/state";

export function renderAll(props) {
  ReactDOM.render(
    <React.StrictMode>
      <App data={props} addPost={addPost} updateState={updateState} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
