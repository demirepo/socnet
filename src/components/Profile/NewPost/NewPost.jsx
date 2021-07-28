import s from "./NewPost.module.css";

export default function NewPost() {
  return (
    <div className={s.newPost}>
      <div>
        <fieldset>
          <legend>&nbsp;Новый пост&nbsp;</legend>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Добавить новый пост</button>
        </fieldset>
      </div>
    </div>
  );
}
