import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";

import s from "./Dialogs.module.css";

export default function Dialogs(props) {
  let dialogItemsList = props.data.dialogs.map((dialog) => (
    <DialogItem
      key={dialog.id}
      id={dialog.id}
      name={dialog.name}
      path={dialog.avatarPath}
    />
  ));

  let messageList1 = props.data.dialogHistory.userId1.map((message) => {
    const side = message.author === "me" ? "flexLeft" : "flexRight";
    return <Message key={message.id} side={side} text={message.text} />;
  });

  return (
    <div className={s.container}>
      <ul className={s.dialogs}>{dialogItemsList}</ul>
      <div className={s.messages}>{messageList1}</div>
    </div>
  );
}
