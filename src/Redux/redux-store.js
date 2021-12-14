import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import appReducer from "./appReducer ";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

let composeEnhancers;

if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    }) || compose;
} else {
  composeEnhancers = compose;
}

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
