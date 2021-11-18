import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Spinner from "./components/common/Spinner/Spinner.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/appReducer ";
import Nav from "./components/Nav/Nav";
import Settings from "./components/Settings/Settings";
import { connect } from "react-redux";
import { getIsInitialized } from "./redux/appSelector";

function App(props) {
  useEffect(() => {
    props.initializeApp();
  });

  if (!props.isInitialized) return <Spinner />;

  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <Nav />
        <div className="wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" component={DialogsContainer} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({ isInitialized: getIsInitialized(state) });

export default connect(mapStateToProps, {
  initializeApp,
})(App);
