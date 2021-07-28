import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

export default function DialogItem(props) {
  return (
    <li>
      <NavLink to={"/dialogs/" + props.id} className={s.dialogsItem}>
        {props.name}
      </NavLink>
    </li>
  );
}
