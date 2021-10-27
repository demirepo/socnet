import React from "react";
import { authAPI } from "../../api/api";
import LoginForm from "../LoginForm/LoginForm";

function Login(props) {
  const onSubmit = (data) => {
    console.log(data);
    const credentials = {
      email: data.login,
      password: data.password,
      rememberMe: data.rememberMe,
    };
    authAPI.login(credentials).then((response) => {
      if (response.data.resultCode === 0) {
        console.log("Логин прошел удачно");
      } else {
        console.log(response.data.messages);
      }
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

export default Login;
