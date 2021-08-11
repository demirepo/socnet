import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "./redux/redux-store";

export function renderAll(state) {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

renderAll(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderAll(state);
});
