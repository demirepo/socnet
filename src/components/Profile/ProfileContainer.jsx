import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  addPost,
  setProfileThunkCreator,
  getStatusFromServer,
  updateStatusOnServer,
  updateAvatar,
} from "../../redux/profileReducer";
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
  refreshProfile() {
    let userId = this.props.match.params.userId || this.props.authorizedUserId;
    this.props.getStatusFromServer(userId); // в стор пишем полученное с сервера значение статуса
    this.props.setProfileThunkCreator(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.refreshProfile();
    }
  }

  onSubmit(message, dispatch) {
    dispatch(addPost(message.newMessage));
  }

  updateAvatarHandler(file) {
    updateAvatar(file);
  }

  render() {
    return (
      <Profile
        onSubmit={this.onSubmit}
        updateAvatarHandler={this.updateAvatarHandler}
        updateStatusOnServer={this.props.updateStatusOnServer}
        statusText={this.props.statusText}
        profileData={this.props.profileData}
        posts={this.props.posts}
        authorizedUserId={this.props.authorizedUserId}
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: (text) => dispatch(addPost(text)),
//     setProfileThunkCreator: (userId) =>
//       dispatch(setProfileThunkCreator(userId)),
//     getStatusFromServer: (userId) => dispatch(getStatusFromServer(userId)),
//     updateStatusOnServer: (text) => dispatch(updateStatusOnServer(text)),
//     updateAvatar: (file) => dispatch(updateAvatar(file)),
//   };
// };

export default compose(
  connect(
    mapStateToProps,
    // mapDispatchToProps
    {
      addPost,
      setProfileThunkCreator,
      getStatusFromServer,
      updateStatusOnServer,
      updateAvatar,
    }
  ),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
