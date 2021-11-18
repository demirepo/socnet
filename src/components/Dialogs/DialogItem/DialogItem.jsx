import { NavLink } from "react-router-dom";
import s from "./DialogItems.module.css";

export default function DialogItem({ id, name, path }) {
  return (
    <NavLink to={"/dialogs/" + id} className={s.dialogsItemLink}>
      <li className={s.dialogsItem}>
        <img className={s.dialogsItemImg} src={path} alt="ava" />
        {name}
      </li>
    </NavLink>
  );
}
