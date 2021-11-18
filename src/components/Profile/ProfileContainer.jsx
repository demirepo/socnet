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
import {
  getProfileData,
  getStatusText,
  getPostsReselector,
} from "../../redux/profileSelectors";
import {
  getAuthorizedUserId,
  getIsAuthorized,
} from "../../redux/authSelectors.js";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.authorizedUserId;
    this.props.getStatusFromServer(userId); // в стор пишем полученное с сервера значение статуса
    this.props.setProfileThunkCreator(userId);
  }
  onSubmit(message, dispatch) {
    dispatch(addPost(message.newMessage));
  }
  render() {
    return (
      <Profile
        onSubmit={this.onSubmit}
        updateStatusOnServer={updateStatusOnServer}
        statusText={this.props.statusText}
        profileData={this.props.profileData}
        posts={this.props.posts}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: getPostsReselector(state),
    profileData: getProfileData(state),
    statusText: getStatusText(state),
    isAuthed: getIsAuthorized(state),
    authorizedUserId: getAuthorizedUserId(state),
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
