import { connect } from "react-redux";
import {
  setUsers,
  toggleFollow,
  setCurrentPage,
  setUsersAreFetching,
  toggleFollowButton,
  getUsersThunkCreator,
  toggleFollowThunkCreator,
  setPageSizeAC,
  UserType,
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import {
  getUsers,
  getTotalUsersCount,
  getCurrentPage,
  getPagesCount,
  getisFetching,
  getdisabledFollowButtonList,
  getPageSize,
} from "../../redux/userSelectors";
import { RootState } from "../../redux/redux-store";

type PropTypes = {
  currentPage: number;
  pageSize: number;
  users: Array<UserType>;
  totalUsersCount: number;
  isFetching: boolean;
  disabledFollowButtonList: Array<number>;
  setCurrentPage: (currentPage: number) => void;
  setPageSize: (currentPage: number, pageSize: string) => void;
  toggleFollow: (userId: number) => void;
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void;
  toggleFollowThunkCreator: (userId: number) => void;
};

class UsersContainer extends React.Component<PropTypes> {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  setPageSize = (currentPage: number, pageSize: number) => {
    setPageSizeAC(pageSize);
    this.props.getUsersThunkCreator(currentPage, pageSize);
  };

  toggleFollow = (userId: number) => {
    this.props.toggleFollowThunkCreator(userId);
  };

  setCurrentPage = (currentPage: number) => {
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
        isFetching={this.props.isFetching}
        disabledFollowButtonList={this.props.disabledFollowButtonList}
        setPageSize={this.setPageSize}
        toggleFollow={this.toggleFollow}
        setCurrentPage={this.setCurrentPage}
      />
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    pageSize: getPageSize(state),
    users: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    pagesCount: getPagesCount(state),
    isFetching: getisFetching(state),
    disabledFollowButtonList: getdisabledFollowButtonList(state),
  };
};

export default connect(mapStateToProps, {
  setUsers,
  setPageSizeAC,
  toggleFollow,
  setCurrentPage,
  setUsersAreFetching,
  toggleDisableFollowButton: toggleFollowButton,
  getUsersThunkCreator,
  toggleFollowThunkCreator,
})(UsersContainer);
