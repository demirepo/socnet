import { connect } from "react-redux";
import Users from "./Users";
import { setUsersAC, toggleFollowAC } from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: () => dispatch(setUsersAC()),
    toggleFollow: (userId) => dispatch(toggleFollowAC(userId)),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
