import { connect } from "react-redux";
import {
  setUsersAC,
  toggleFollowAC,
  setCurrentPageAC,
  setPageSizeAC,
} from "../../redux/usersReducer";
import axios from "axios";
import React from "react";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data);
      });
  }

  setPageSize = (pageSize) => {
    this.props.setPageSize(pageSize);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${pageSize}`
        // `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data);
      });
  };

  toggleFollow = (userId) => {
    this.props.toggleFollow(userId);
  };

  setCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`
        // `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => dispatch(setUsersAC(users)),
    toggleFollow: (userId) => dispatch(toggleFollowAC(userId)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    setPageSize: (pageSize) => dispatch(setPageSizeAC(pageSize)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
