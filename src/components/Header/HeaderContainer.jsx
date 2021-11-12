import React from "react";
import { connect } from "react-redux";
import { logoutThunk } from "../../redux/authReducer";
import Header from "./Header";
import { getIsAuthorized, getLogin } from "../../redux/authSelectors";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}
//========================CONNECT========================================

const mapStateToProps = (state) => {
  return {
    isAuthorized: getIsAuthorized(state),
    login: getLogin(state),
  };
};

export default connect(mapStateToProps, {
  logoutThunk,
})(HeaderContainer);
