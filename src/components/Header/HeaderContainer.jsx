import React from "react";
import { connect } from "react-redux";
import { setUserAuthData } from "../../redux/authReducer";
import Header from "./Header";
import { usersAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.authMe().then((response) => {
      if (response.status === 200) {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          let authorized = true;
          this.props.setUserAuthData(id, login, email, authorized);
        }
      } else {
        console.log("Ошибка сервера:", response.status);
      }
    });
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

export default connect(mapStateToProps, { setUserAuthData })(HeaderContainer);
