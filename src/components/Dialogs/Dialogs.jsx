import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import validator from "../../utils/validation";
import { Textarea } from "../common/FormControls/FormControls";

export default function Dialogs({ dialogs, messages, onSubmit }) {
  const dialogItemsList = dialogs.map((d) => (
    <DialogItem key={d.id} id={d.id} name={d.name} path={d.avatarPath} />
  ));

  const messageList = messages.userId1.map((m) => {
    const sideClass = m.author === "me" ? "flexLeft" : "flexRight";
    return <Messages key={m.id} side={sideClass} text={m.text} />;
  });

  return (
    <>
      <div className={s.container}>
        <ul className={s.dialogs}>{dialogItemsList}</ul>
        <div className={s.messages}>{messageList}</div>
      </div>
      <DialogInputReduxForm onSubmit={onSubmit} />
    </>
  );
}

const max10 = validator.maxLength(10);
const DialogInput = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        placeholder="Введите текст сообщения..."
        className={s.textArea}
        rows="8"
        name={"dialogInput"}
        validate={[max10]}
      />
      <button className={s.button}>Отправить сообщение</button>
    </form>
  );
};

let DialogInputReduxForm = reduxForm({ form: "dialogInput" })(DialogInput);
