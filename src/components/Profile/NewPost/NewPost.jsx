import React from "react";
import s from "./NewPost.module.css";

export default function NewPost(props) {
  const updateState = (e) => {
    let text = e.target.value;
    props.updateState(text);
  };

  const addPost = () => props.addPost();

  return (
    <div className={s.newPost}>
      <div>
        <fieldset>
          <legend>&nbsp;Новый пост&nbsp;</legend>
          <textarea
            cols="30"
            rows="10"
            value={props.profileInputState}
            onChange={updateState}
          ></textarea>
          <button className={s.newpostBtn} onClick={addPost}>
            Добавить новый пост
          </button>
        </fieldset>
      </div>
    </div>
  );
}
