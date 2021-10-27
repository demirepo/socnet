import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  addPost,
  setProfileThunkCreator,
  getStatusFromServer,
  updateProfileState,
  updateStatusOnServer,
} from "../../redux/profileReducer.js";
import Profile from "./Profile";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || 19090;
    this.props.setProfileThunkCreator(userId);
    this.props.getStatusFromServer(userId); // в стор пишем полученное с сервера значение статуса
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profileInputState: state.profilePage.profileInputText,
    posts: state.profilePage.posts,
    profileData: state.profilePage.profileData,
    isAuthed: state.auth.authorized,
    statusText: state.profilePage.statusText,
    currentUserId: state.auth.id,
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    updateProfileState,
    setProfileThunkCreator,
    getStatusFromServer,
    updateStatusOnServer,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
