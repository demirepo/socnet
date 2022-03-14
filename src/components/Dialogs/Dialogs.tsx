import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import validator from "../../utils/validation";
import { Textarea } from "../common/FormControls/FormControls";
import { Dialog, Message } from "../../redux/dialogReducer";

type PropsType = {
  dialogs: Array<Dialog>;
  messages: Array<Message>;
  onSubmit: (e: any) => void;
};

const Dialogs: React.FC<PropsType> = ({ dialogs, messages, onSubmit }) => {
  const dialogItemsList = dialogs.map((d) => (
    <DialogItem key={d.id} id={d.id} name={d.name} path={d.avatarPath} />
  ));

  const messageList = messages.map((m) => {
    const sideClass = m.authorId === 0 ? "flexLeft" : "flexRight";
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
};

const max10 = validator.maxLength(10);
const DialogInput: React.FC<any> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        placeholder="Input message text..."
        className={s.textArea}
        rows="8"
        name={"dialogInput"}
        validate={[max10]}
      />
      <button className={s.button}>Send message</button>
    </form>
  );
};

let DialogInputReduxForm = reduxForm({ form: "dialogInput" })(DialogInput);

export default Dialogs;
