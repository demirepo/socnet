import s from "./Post.module.css";

export default function Post(props) {
  return (
    <div className={s.post}>
      <img className={s.image} src="img/ava-blue.jpg" alt="avatar" />
      <div className={s.message}>
        {props.text}
        <br></br>
        Понравилось: {props.likes} людям
      </div>
    </div>
  );
}
