import Post from "../Post/Post";
import s from "./MyPosts.module.css";

export default function MyPosts() {
  return (
    <div>
      <div className={s.myPosts}>my-posts</div>

      <div className={s.newPosts}>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <br></br>
          <button>Добавить новый пост</button>
        </div>
      </div>
      <Post message="какой-то текст поста №1" />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
