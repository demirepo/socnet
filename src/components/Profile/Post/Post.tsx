import s from "./Post.module.css";

type PropsType = {
  text: string;
  likes: number;
};

const Post: React.FC<PropsType> = ({ text, likes }) => {
  return (
    <div className={s.post}>
      <img className={s.image} src="img/ava-blue.jpg" alt="avatar" />
      <div className={s.message}>
        {text}
        <br></br>
        Понравилось: {likes} людям
      </div>
    </div>
  );
};

export default Post;
