import s from "./UserInfo.module.css";

export default function UserInfo({ updateAvatar, ...props }) {
  let contacts = props.data.contacts ? Object.keys(props.data.contacts) : [];
  const isOwner = props.data.userId === props.authorizedUserId;

  const contactsItems = contacts.map((m) => {
    return (
      <div key={m}>
        {m} :{" "}
        {props.data.contacts[`${m}`]
          ? props.data.contacts[`${m}`]
          : "не задано"}{" "}
      </div>
    );
  });

  const onAvatarUpload = (e) => {
    updateAvatar(e.target.files[0]);
  };

  return (
    <div className={s.userinfo}>
      <img
        className={s.avatar}
        src={props.data.photos?.large || "img/ava-blue.jpg"}
        alt="avatar"
      />
      {isOwner && <input type="file" onChange={onAvatarUpload} />}
      <div className={s.text}>Имя: {props.data.fullName}</div>
      <div className={s.text}>О себе: {props.data.aboutMe}</div>
      <div className={s.text}>{contactsItems}</div>
      <div className={s.text}>
        {props.data.lookingForAJob ? "Ищу работу" : "Работу не ищу"}
      </div>
      <div className={s.text}>
        Какую работу ищу:{props.data.lookingForAJobDescription}
      </div>
    </div>
  );
}
