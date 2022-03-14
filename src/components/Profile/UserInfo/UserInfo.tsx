import { ProfileDataType, ContactsType } from "../../../redux/profileReducer";
import s from "./UserInfo.module.css";

type PropsType = {
  updateAvatarHandler: (e: any) => void;
  data: ProfileDataType;
  authorizedUserId: number;
};

const UserInfo: React.FC<PropsType> = (props) => {
  const { updateAvatarHandler, data, authorizedUserId } = props;

  const isOwner = data.userId === authorizedUserId;
  const contacts = data.contacts ? Object.keys(data.contacts) : [];

  const contactsItems = contacts.map((el) => {
    return (
      <div key={el}>
        {el}:
        {data.contacts[`${el as keyof ContactsType}`]
          ? data.contacts[`${el as keyof ContactsType}`]
          : " не задано"}
      </div>
    );
  });

  interface Event<T = EventTarget> {
    target: T;
  }

  const onAvatarChange = (e: Event<HTMLInputElement>) => {
    if (e.target.files) {
      updateAvatarHandler(e.target.files[0]);
    }
  };

  return (
    <div className={s.userinfo}>
      <img
        className={s.avatar}
        src={data.photos?.large || "img/ava-blue.jpg"}
        alt="avatar"
      />

      {isOwner && <input type="file" onChange={onAvatarChange} />}

      <div className={s.text}>
        <div
          style={{ fontWeight: 800, fontSize: 24, textTransform: "uppercase" }}
        >
          {data.fullName}
        </div>
        Обо мне: {data.aboutMe && data.aboutMe}
        <div>
          {data.lookingForAJob ? "Ищу работу. " : "Работу не ищу"}
          {data.lookingForAJob && data.lookingForAJobDescription}
        </div>
        <br />
        <div>{contactsItems}</div>
      </div>
    </div>
  );
};

export default UserInfo;
