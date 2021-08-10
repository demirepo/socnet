import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";

import s from "./Dialogs.module.css";
import {
  updateDialogStateActionCreator,
  postMessageActionCreator,
} from "../../Redux/state";

export default function Dialogs(props) {
  const dialogItemsList = props.data.dialogs.map((d) => (
    <DialogItem key={d.id} id={d.id} name={d.name} path={d.avatarPath} />
  ));

  const messageList = props.data.dialogHistory.userId1.map((m) => {
    const sideClass = m.author === "me" ? "flexLeft" : "flexRight";
    return <Message key={m.id} side={sideClass} text={m.text} />;
  });

  const textArea = React.createRef();

  const postTextArea = () => {
    let text = textArea.current.value;
    props.dispatch(postMessageActionCreator(text));
  };

  const updateState = () => {
    let text = textArea.current.value;
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
          className={s.textArea}
          ref={textArea}
          rows="8"
          value={props.data.dialogInputText}
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
