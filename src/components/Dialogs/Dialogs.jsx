import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";

import s from "./Dialogs.module.css";

export default function Dialogs(props) {
  let dialogItemsList = props.data.dialogs.map((d) => (
    <DialogItem key={d.id} id={d.id} name={d.name} path={d.avatarPath} />
  ));

  let messageList1 = props.data.dialogHistory.userId1.map((m) => {
    const sideClass = m.author === "me" ? "flexLeft" : "flexRight";
    return <Message key={m.id} side={sideClass} text={m.text} />;
  });

  const textArea = React.createRef();
  const postTextArea = () => {
    alert(textArea.current.value);
  };

  return (
    <div>
      <div className={s.container}>
        <ul className={s.dialogs}>{dialogItemsList}</ul>
        <div className={s.messages}>{messageList1}</div>
      </div>
      <div>
        <textarea className={s.textArea} ref={textArea} rows="8"></textarea>
        <input
          className={s.button}
          onClick={postTextArea}
          type="button"
          value="Отправить сообщение"
        />
      </div>
    </div>
  );
}
