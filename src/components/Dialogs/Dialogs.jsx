import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";

import s from "./Dialogs.module.css";
import {
  updateDialogStateActionCreator,
  postMessageActionCreator,
} from "../../redux/dialogReducer";

export default function Dialogs(props) {
  const dialogItemsList = props.state.dialogs.map((d) => (
    <DialogItem key={d.id} id={d.id} name={d.name} path={d.avatarPath} />
  ));

  const messageList = props.state.dialogHistory.userId1.map((m) => {
    const sideClass = m.author === "me" ? "flexLeft" : "flexRight";
    return <Message key={m.id} side={sideClass} text={m.text} />;
  });

  const postTextArea = () => {
    props.dispatch(postMessageActionCreator());
  };

  const updateState = (e) => {
    let text = e.target.value;
    props.dispatch(updateDialogStateActionCreator(text));
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
          value={props.state.dialogInputText}
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
