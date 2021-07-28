import s from "./UserInfo.module.css";

export default function UserInfo(props) {
  return (
    <div className={s.userinfo}>
      <img
        className={s.avatar}
        src="https://i.pinimg.com/originals/1d/52/88/1d528825423bbfc1fe82dde5c871962d.jpg"
        alt="avatar"
      />
      <div className={s.text}>Некое описание профиля</div>
    </div>
  );
}
