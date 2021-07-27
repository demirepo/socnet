import React from "react";
import s from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={s.navbar}>
      <ul>
        <li className={s.navbar__item}>
          <a className={s.navbar__link} href="http://oper.ru">
            Profile
          </a>
        </li>
        <li className={s.navbar__item}>
          <a className={s.navbar__link} href="http://oper.ru">
            Messages
          </a>
        </li>
        <li className={s.navbar__item}>
          <a className={s.navbar__link} href="http://oper.ru">
            News
          </a>
        </li>
        <li className={s.navbar__item}>
          <a className={s.navbar__link} href="http://oper.ru">
            Music
          </a>
        </li>
        <li className={s.navbar__item}>
          <a className={s.navbar__link} href="http://oper.ru">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}
