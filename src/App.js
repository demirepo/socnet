import "./App.css";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import { Route } from "react-router-dom";

export default function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <div className="wrapper-content">
        {/* <Route
          path="/profile"
          component={() => <Profile data={props.data} />}
        />
        <Route
          path="/dialogs"
          component={() => <Dialogs data={props.data} />}
        /> */}
        <Route path="/profile" render={() => <Profile data={props.data} />} />
        <Route path="/dialogs" render={() => <Dialogs data={props.data} />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}
