import s from "./Messages.module.css";
export default function Messages(props) {
  const side = props.side;
  return <div className={s.messagesItem + " " + s[side]}>{props.text}</div>;
}
