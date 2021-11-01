import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import appReducer from "./appReducer ";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;
