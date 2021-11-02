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
  getIsAuthed,
  getProfileData,
  getStatusText,
  getAuthorizedUserId,
  getPostsReselector,
} from "../../redux/selectors";

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
    posts: getPostsReselector(state),
    profileData: getProfileData(state),
    isAuthed: getIsAuthed(state),
    statusText: getStatusText(state),
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
