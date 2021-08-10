import React from "react";
import {
  addPostActionCreator,
  updateProfileStateActionCreator,
} from "./../../../Redux/state";

import s from "./NewPost.module.css";

export default function NewPost(props) {
  const textArea = React.createRef();

  const updateState = () => {
    let text = textArea.current.value;
    props.dispatch(updateProfileStateActionCreator(text));
  };

  const addPost = () => props.dispatch(addPostActionCreator());

  return (
    <div className={s.newPost}>
      <div>
        <fieldset>
          <legend>&nbsp;Новый пост&nbsp;</legend>
          <textarea
            cols="30"
            rows="10"
            value={props.inputState}
            onChange={updateState}
            ref={textArea}
          ></textarea>
          <button onClick={addPost}>Добавить новый пост</button>
        </fieldset>
      </div>
    </div>
  );
}
