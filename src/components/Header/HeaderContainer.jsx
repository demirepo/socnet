import React from "react";
import { connect } from "react-redux";
import {
  setUserAuthData,
  authMeThunkCreator,
  logoutThunk,
} from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}
//========================CONNECT========================================

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  setUserAuthData,
  authMeThunkCreator,
  logoutThunk,
})(HeaderContainer);
