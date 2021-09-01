import s from "./UserInfo.module.css";

export default function UserInfo(props) {
  let contacts = props.data.contacts ? Object.keys(props.data.contacts) : [];
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
  return (
    <div className={s.userinfo}>
      <img
        className={s.avatar}
        src={props.data?.photos?.large || "/img/ava-blue.jpg"}
        alt="avatar"
      />
      <div className={s.text}>Имя: {props.data.fullName}</div>
      <div className={s.text}>О себе: {props.data.aboutMe}</div>
      <div className={s.text}>{contactsItems}</div>
      <div className={s.text}>
        {props.data.lookingForAJob
          ? "В поисках работы"
          : "Трудоустроен, работу не ищу"}
      </div>
      <div className={s.text}>
        Какую работу ищу:{props.data.lookingForAJobDescription}
      </div>
    </div>
  );
}
