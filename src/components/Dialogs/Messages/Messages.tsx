import s from "./Messages.module.css";

type PropsType = {
  side: "flexLeft" | "flexRight";
  text: string;
};

const Messages: React.FC<PropsType> = ({ side, text }) => {
  return <div className={`${s.messagesItem} ${s[side]}`}>{text}</div>;
};

export default Messages;
