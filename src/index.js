import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "./redux/state";

export function renderAll(state) {
  ReactDOM.render(
    <React.StrictMode>
      <App data={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

renderAll(store.getState());

store.subscribe(renderAll);
