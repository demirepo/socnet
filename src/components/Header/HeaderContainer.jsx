import React from "react";
import { connect } from "react-redux";
import { setUserAuthData, authMeThunkCreator } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMeThunkCreator();
  }

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
})(HeaderContainer);
