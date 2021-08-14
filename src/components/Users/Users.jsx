import React from "react";
import s from "./users.module.css";

export default function Users(props) {
  const toggleFollow = (userId) => {
    props.toggleFollow(userId);
  };

  return props.users.map((user) => (
    <div key={user.id}>
      <div className={s.usersItem}>
        <div className={s.avatar}>
          <img src={user.avatar} alt="avatar" />
        </div>
        <div className={s.info}>
          <p className={s.name}>{user.name}</p>
          <p className={s.location}>
            {user.location.city} ({user.location.country})
          </p>
          {user.followed ? (
            <button onClick={() => toggleFollow(user.id)}>Отписаться</button>
          ) : (
            <button onClick={() => toggleFollow(user.id)}>Подписаться</button>
          )}
          {/* <button>Написать сообщение</button> */}
        </div>
      </div>
    </div>
  ));
}
