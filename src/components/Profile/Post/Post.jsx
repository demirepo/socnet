import s from "./Post.module.css";

export default function Post(props) {
  return (
    <div className={s.post}>
      <img className={s.image} src="" alt="ava" />
      <div className={s.message}>{props.message}</div>
    </div>
  );
}
