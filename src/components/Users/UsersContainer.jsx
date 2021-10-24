import { connect } from "react-redux";
import {
  setUsers,
  toggleFollow,
  setCurrentPage,
  setPageSize,
  setInProgress,
  toggleDisableFollowButton,
  getUsersThunkCreator,
  toggleFollowThunkCreator,
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  setPageSize = (currentPage, pageSize) => {
    this.props.setPageSize(pageSize);
    this.props.getUsersThunkCreator(currentPage, pageSize);
  };

  toggleFollow = (userId) => {
    this.props.toggleFollowThunkCreator(userId);
  };

  setCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.getUsersThunkCreator(currentPage, this.props.pageSize);
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
  getUsersThunkCreator,
  toggleFollowThunkCreator,
})(UsersContainer);
