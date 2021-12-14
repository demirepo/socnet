import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { loginThunk } from "../../redux/authReducer";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Login() {
  const isAuthed = useSelector((state) => state.auth.isAuthorized);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const credentials = {
      email: data.login,
      password: data.password,
      rememberMe: data.rememberMe,
    };
    dispatch(loginThunk(credentials));
  };

  if (isAuthed) return <Redirect to={"/profile"} />;

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}
