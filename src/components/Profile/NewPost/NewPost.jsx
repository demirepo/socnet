import React from "react";
import s from "./NewPost.module.css";

export default function NewPost(props) {
  const textArea = React.createRef();

  const updateState = () => {
    let input = textArea.current.value;
    props.updateState(input);
  };

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
          <button onClick={props.addPost}>Добавить новый пост</button>
        </fieldset>
      </div>
    </div>
  );
}
