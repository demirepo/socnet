import { connect } from "react-redux";
import {
  setUsers,
  toggleFollow,
  setCurrentPage,
  setPageSize,
  setInProgress,
  toggleDisableFollowButton,
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setInProgress(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((response) => {
        this.props.setUsers(response);
        this.props.setInProgress(false);
      });
  }

  setPageSize = (pageSize) => {
    this.props.setInProgress(true);
    this.props.setPageSize(pageSize);
    usersAPI.getUsers(this.props.currentPage, pageSize).then((response) => {
      this.props.setUsers(response);
      this.props.setInProgress(false);
    });
  };

  toggleFollow = (userId) => {
    let userFollowed = this.props.users.filter((u) => u.id === userId)[0]
      .followed;
    this.props.toggleDisableFollowButton(userId); // disabling button during query
    if (userFollowed) {
      usersAPI.unfollowUser(userId).then((response) => {
        if (response.data.resultCode === 0) {
          this.props.toggleFollow(userId);
        }
        this.props.toggleDisableFollowButton(userId);
      });
    } else {
      usersAPI.followUser(userId).then((response) => {
        if (response.data.resultCode === 0) this.props.toggleFollow(userId);
        this.props.toggleDisableFollowButton(userId);
      });
    }
  };

  setCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    usersAPI.getUsers(currentPage, this.props.pageSize).then((response) => {
      this.props.setUsers(response);
    });
  };

  render() {
    return (
      <Users
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        pagesCount={this.props.pagesCount}
        setPageSize={this.setPageSize}
        toggleFollow={this.toggleFollow}
        setCurrentPage={this.setCurrentPage}
        inProgress={this.props.inProgress}
        followButtonIsDisabled={this.props.followButtonIsDisabled}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    pagesCount: state.usersPage.pagesCount,
    state: state.usersPage,
    inProgress: state.usersPage.inProgress,
    followButtonIsDisabled: state.usersPage.followButtonIsDisabled,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     toggleFollow: (userId) => dispatch(toggleFollowAC(userId)),
//     setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
//     setPageSize: (pageSize) => dispatch(setPageSizeAC(pageSize)),
//   };
// };

export default connect(mapStateToProps, {
  setUsers,
  toggleFollow,
  setCurrentPage,
  setPageSize,
  setInProgress,
  toggleDisableFollowButton,
})(UsersContainer);
