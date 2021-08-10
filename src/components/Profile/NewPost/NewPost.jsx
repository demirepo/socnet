import React from "react";
import s from "./NewPost.module.css";

export default function NewPost(props) {
  const textArea = React.createRef();

  const updateState = () => {
    let input = textArea.current.value;
    props.dispatch({ type: "updateState", input: input });
  };

  const addPost = () => props.dispatch({ type: "addPost" });

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
