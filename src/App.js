import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Music from "./components/Music/Music";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";

export default function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <Nav />
        <div className="wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
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
