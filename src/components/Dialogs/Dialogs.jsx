import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Messages/Messages";

export default function Dialogs(props) {
  let dialogItemsList = props.data.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));

  let messageList = props.data.messages.map((message) => (
    <Message key={message.id} text={message.text} />
  ));

  return (
    <div className={s.container}>
      <ul className={s.dialogs}>{dialogItemsList}</ul>
      <div className={s.messages}>{messageList}</div>
    </div>
  );
}
