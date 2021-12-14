import { NavLink } from "react-router-dom";
import s from "./DialogItems.module.css";

export default function DialogItem({ id, name, path }) {
  return (
    <NavLink className={s.dialogsItemLink} to={"/dialogs/" + id}>
      <li className={s.dialogsItem}>
        <img className={s.dialogsItemImg} src={path} alt="ava" />
        {name}
      </li>
    </NavLink>
  );
}
