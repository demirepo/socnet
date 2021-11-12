import { connect } from "react-redux";
import {
  setUsers,
  toggleFollow,
  setCurrentPage,
  setPageSize,
  setIsFetching,
  toggleDisableFollowButton,
  getUsersThunkCreator,
  toggleFollowThunkCreator,
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getPagesCount,
  getisFetching,
  getdisabledFollowButtonList,
} from "../../redux/userSelectors";

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
        isFetching={this.props.isFetching}
        disabledFollowButtonList={this.props.disabledFollowButtonList}
        setPageSize={this.setPageSize}
        toggleFollow={this.toggleFollow}
        setCurrentPage={this.setCurrentPage}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    pagesCount: getPagesCount(state),
    isFetching: getisFetching(state),
    disabledFollowButtonList: getdisabledFollowButtonList(state),
  };
};

export default connect(mapStateToProps, {
  setUsers,
  toggleFollow,
  setCurrentPage,
  setPageSize,
  setIsFetching,
  toggleDisableFollowButton,
  getUsersThunkCreator,
  toggleFollowThunkCreator,
})(UsersContainer);
