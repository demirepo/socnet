import { connect } from "react-redux";
import {
  setUsers,
  toggleFollow,
  setCurrentPage,
  setPageSize,
  setInProgress,
} from "../../redux/usersReducer";
import axios from "axios";
import React from "react";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setInProgress(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
          headers: { "API-KEY": "2347c37c-5c55-40d1-89f1-48177d8cbf03" },
        }
      )
      .then((response) => {
        this.props.setUsers(response.data);
        this.props.setInProgress(false);
      });
  }

  setPageSize = (pageSize) => {
    this.props.setInProgress(true);
    this.props.setPageSize(pageSize);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${pageSize}`,
        {
          withCredentials: true,
          headers: { "API-KEY": "2347c37c-5c55-40d1-89f1-48177d8cbf03" },
        }
      )
      .then((response) => {
        this.props.setUsers(response.data);
        this.props.setInProgress(false);
      });
  };
  //=====================================================================================================

  toggleFollow = (userId) => {
    let userFollowed = this.props.users.filter((u) => u.id === userId)[0]
      .followed;
    console.log(userFollowed);
    if (userFollowed) {
      axios
        .delete(
          `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
          {
            withCredentials: true,
            headers: { "API-KEY": "2347c37c-5c55-40d1-89f1-48177d8cbf03" },
          }
        )
        .then((response) => {
          if (response.data.resultCode === 0) this.props.toggleFollow(userId);
        });
    } else {
      axios
        .post(
          `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
          null,
          {
            withCredentials: true,
            headers: { "API-KEY": "2347c37c-5c55-40d1-89f1-48177d8cbf03" },
          }
        )
        .then((response) => {
          if (response.data.resultCode === 0) this.props.toggleFollow(userId);
        });
    }
  };
  //=====================================================================================================

  setCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
          headers: { "API-KEY": "2347c37c-5c55-40d1-89f1-48177d8cbf03" },
        }
      )
      .then((response) => {
        this.props.setUsers(response.data);
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
})(UsersContainer);
