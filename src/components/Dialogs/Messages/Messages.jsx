import s from "./Messages.module.css";
export default function Messages({ side, text }) {
  return <div className={`${s.messagesItem} ${s[side]}`}>{text}</div>;
}
