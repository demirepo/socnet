import s from "./Post.module.css";

export default function Post(props) {
  return (
    <div className={s.post}>
      <img
        className={s.image}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        alt="pixel"
      />
      <div className={s.message}>
        {props.text}
        <br></br>
        Понравилось: {props.likes} людям
      </div>
    </div>
  );
}
