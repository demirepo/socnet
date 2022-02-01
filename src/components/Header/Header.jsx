import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { logoutThunk } from "../../redux/authReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const isAuthed = useSelector((state) => state.auth.isAuthorized);
  const login = useSelector((state) => state.auth.login);
  const logout = () => dispatch(logoutThunk());

  return (
    <header className={s.header}>
      <img src="img/logo.png" alt="logo"></img>
      {isAuthed ? (
        <div className={s.login}>
          <img className={s.miniavatar} src="img/ava-blue.jpg" alt="ava" />
          {login}
          <button className={s.button} onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <NavLink to={"/login"}>
          <div className={s.login}>Login</div>
        </NavLink>
      )}
    </header>
  );
}
