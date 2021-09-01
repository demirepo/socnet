import {
  addPost,
  updateProfileState,
  setProfileData,
} from "../../redux/profileReducer";
import { connect } from "react-redux";
import Profile from "./Profile";
import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || 19090;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setProfileData(response.data);
      });
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
  };
};

export default connect(mapStateToProps, {
  addPost,
  updateProfileState,
  setProfileData,
})(withRouter(ProfileContainer));
