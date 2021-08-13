import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

export default function Dialogs(props) {
  const dialogItemsList = props.dialogs.map((d) => (
    <DialogItem key={d.id} id={d.id} name={d.name} path={d.avatarPath} />
  ));

  const messageList = props.messages.userId1.map((m) => {
    const sideClass = m.author === "me" ? "flexLeft" : "flexRight";
    return <Messages key={m.id} side={sideClass} text={m.text} />;
  });

  const postTextArea = () => {
    props.postTextArea();
  };

  const updateState = (e) => {
    let text = e.target.value;
    props.updateState(text);
  };

  return (
    <div>
      <div className={s.container}>
        <ul className={s.dialogs}>{dialogItemsList}</ul>
        <div className={s.messages}>{messageList}</div>
      </div>
      <div>
        <textarea
          placeholder="Введите текст сообщения..."
          className={s.textArea}
          rows="8"
          value={props.dialogInputText}
          onChange={updateState}
        ></textarea>
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
