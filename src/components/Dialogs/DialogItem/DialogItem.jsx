import { NavLink } from "react-router-dom";
import s from "./DialogItems.module.css";

export default function DialogItem(props) {
  return (
    <NavLink to={"/dialogs/" + props.id} className={s.dialogsItemLink}>
      <li className={s.dialogsItem}>
        <img className={s.dialogsItemImg} src={props.path} alt="ava" />
        {props.name}
      </li>
    </NavLink>
  );
}
