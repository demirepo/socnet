import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export default function Header(props) {
  return (
    <header className={s.header}>
      <img src="/img/logo.png" alt="logo"></img>
      {props.auth.authorized ? (
        <div className={s.login}>
          <img width="10" height="10" src="/img/ava-blue.jpg" alt="" />
          {props.auth.login}
        </div>
      ) : (
        <NavLink to={"/login"}>
          <div className={s.login}>Login</div>
        </NavLink>
      )}
    </header>
  );
}
