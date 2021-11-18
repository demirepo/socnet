import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { loginThunk } from "../../redux/authReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getIsAuthorized } from "../../redux/authSelectors";

function Login({ isAuthed, login }) {
  const onSubmit = (data) => {
    const credentials = {
      email: data.login,
      password: data.password,
      rememberMe: data.rememberMe,
    };
    login(credentials);
  };
  if (isAuthed) return <Redirect to={"/profile"} />;

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { isAuthed: getIsAuthorized(state) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => dispatch(loginThunk(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
