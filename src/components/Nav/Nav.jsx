import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={s.navbar}>
      <ul>
        <li className={s.navbar__item}>
          <NavLink className={s.navbar__link} to="/profile">
            Profile
          </NavLink>
        </li>
        <li className={s.navbar__item}>
          <NavLink className={s.navbar__link} to="/dialogs">
            Dialogs
          </NavLink>
        </li>
        <li className={s.navbar__item}>
          <NavLink className={s.navbar__link} to="/news">
            News
          </NavLink>
        </li>
        <li className={s.navbar__item}>
          <NavLink className={s.navbar__link} to="/music">
            Music
          </NavLink>
        </li>
        <li className={s.navbar__item}>
          <NavLink className={s.navbar__link} to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
