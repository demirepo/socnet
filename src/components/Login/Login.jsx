import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { loginThunk, logoutThunk } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router";

function Login(props) {
  const onSubmit = (data) => {
    const credentials = {
      email: data.login,
      password: data.password,
      rememberMe: data.rememberMe,
    };
    props.login(credentials);
    // authAPI.login(credentials).then((response) => {
    //   if (response.data.resultCode === 0) {
    //     console.log("Логин прошел удачно");
    //   } else {
    //     console.log(response.data.messages);
    //   }
    // });
  };
  if (props.isAuth) return <Redirect to={"/profile"} />;

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(loginThunk(credentials));
    },
    logout: () => {
      dispatch(logoutThunk());
    },
  };
};
const mapStateToProps = (state) => {
  return { isAuth: state.auth.authorized };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
