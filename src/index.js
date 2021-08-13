import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

// export function renderAll(state) {
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// }

// renderAll(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   renderAll(state);
// });
