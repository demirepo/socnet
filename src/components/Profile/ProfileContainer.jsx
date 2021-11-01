import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  addPost,
  setProfileThunkCreator,
  getStatusFromServer,
  updateStatusOnServer,
} from "../../redux/profileReducer.js";
import Profile from "./Profile";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.authorizedUserId;
    this.props.setProfileThunkCreator(userId);
    this.props.getStatusFromServer(userId); // в стор пишем полученное с сервера значение статуса
  }
  onSubmit(message, dispatch) {
    dispatch(addPost(message.newMessage));
  }
  render() {
    return <Profile {...this.props} onSubmit={this.onSubmit} />;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profileData: state.profilePage.profileData,
    isAuthed: state.auth.authorized,
    statusText: state.profilePage.statusText,
    authorizedUserId: state.auth.id,
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    setProfileThunkCreator,
    getStatusFromServer,
    updateStatusOnServer,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
