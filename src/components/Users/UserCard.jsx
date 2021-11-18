import s from "./Users.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import FollowButton from "./FollowButton";

export default function UserCard({
  user,
  toggleFollow,
  disabledFollowButtonList,
}) {
  return (
    <div>
      <div className={s.usersItem}>
        <div className={s.avatar}>
          <NavLink to={`/profile/${user.id}`}>
            <img src={user.avatar} alt="avatar" />
          </NavLink>
        </div>
        <div className={s.info}>
          <NavLink to={`/profile/${user.id}`}>
            <p className={s.name}>{user.name}</p>
          </NavLink>
          <FollowButton
            disabledFollowButtonList={disabledFollowButtonList}
            user={user}
            toggleFollow={toggleFollow}
          />
        </div>
      </div>
    </div>
  );
}
