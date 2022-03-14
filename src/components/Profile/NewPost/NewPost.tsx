import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./NewPost.module.css";

type PropsType = {
  handleSubmit: any;
};

const NewPost: React.FC<PropsType> = ({ handleSubmit }) => {
  return (
    <div className={s.newPost}>
      <form onSubmit={handleSubmit}>
        <div>
          <fieldset>
            <legend>&nbsp;Новый пост&nbsp;</legend>
            <Field
              component="textarea"
              name="newMessage"
              cols="30"
              rows="10"
              placeholder="Введите свое сообщение"
              // value={props.profileInputState}
              // onChange={updateState}
            ></Field>
            <button className={s.newpostBtn}>Добавить новый пост</button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

const NewPostReduxForm = reduxForm({ form: "newPost" })(NewPost);
export default NewPostReduxForm;
