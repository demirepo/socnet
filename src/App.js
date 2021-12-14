import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Spinner from "./components/common/Spinner/Spinner.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/appReducer ";
import Nav from "./components/Nav/Nav";
import Settings from "./components/Settings/Settings";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function App() {
  console.log("render");
  const dispatch = useDispatch();
  const isInit = useSelector((state) => state.app.isInitialized);

  useEffect(() => dispatch(initializeApp()), [dispatch]);

  if (!isInit) return <Spinner />;

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <div className="wrapper-content">
          <Route path="/profile/:userId?" component={ProfileContainer} />
          <Route path="/dialogs" component={DialogsContainer} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    </BrowserRouter>
  );
}
