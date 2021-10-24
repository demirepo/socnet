import {
  addPost,
  updateProfileState,
  setProfileThunkCreator,
} from "../../redux/profileReducer";
import { connect } from "react-redux";
import Profile from "./Profile";
import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || 19090;
    this.props.setProfileThunkCreator(userId);
  }

  render() {
    console.log(this.props.isAuthed);

    if (!this.props.isAuthed) return <Redirect to={"/login"} />;
    return <Profile {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    profileInputState: state.profilePage.profileInputText,
    posts: state.profilePage.posts,
    profileData: state.profilePage.profileData,
    isAuthed: state.auth.authorized,
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    updateProfileState,
    setProfileThunkCreator,
  }),
  withRouter
)(ProfileContainer);
