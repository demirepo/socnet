import { connect } from "react-redux";
import Users from "./Users";
import {
  setUsersAC,
  toggleFollowAC,
  setCurrentPageAC,
  setPageSizeAC,
} from "../../redux/usersReducer";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
