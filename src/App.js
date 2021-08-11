import "./App.css";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import { BrowserRouter, Route } from "react-router-dom";

export default function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <div className="wrapper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                state={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                state={props.state.messagesPage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          {/* <Route
            exact
            path="/"
            render={() => (
              <Profile
                addPost={props.addPost}
                data={props.data.profilePage}
                updateState={props.updateState}
              />
            )}
          /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}
