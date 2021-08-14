import axios from "axios";
import React from "react";
import s from "./users.module.css";

export default function Users(props) {
  const getUsers = () => {
    let loaded = 0;
    if (loaded === 0) {
      axios.get("https://randomuser.me/api/?results=10").then((response) => {
        props.setUsers(response.data.results);
      });
      loaded = 1;
    }
  };

  const toggleFollow = (userId) => {
    props.toggleFollow(userId);
  };

  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      <br />
      {props.users.map((user) => (
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
                <button onClick={() => toggleFollow(user.id)}>
                  Отписаться
                </button>
              ) : (
                <button onClick={() => toggleFollow(user.id)}>
                  Подписаться
                </button>
              )}
              {/* <button>Написать сообщение</button> */}
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}
