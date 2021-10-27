import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UserInfo/UserInfo";
import NewPost from "./NewPost/NewPost";
import Status from "./Status";

import s from "./Profile.module.css";

export default function Profile(props) {
  return (
    <section className={s.content}>
      {/* <img
        className={s.bigpic}
        src="https://fartuk.ru/upload/resize_cache/iblock/f42/1920_533_1d2c0be91f8b91a0d3c91a9448f348e3c/skinali_nyu_york_195782.jpg"
        alt="bigpic"
      /> */}
      <Status {...props} />
      <UserInfo data={props.profileData} />
      <NewPost
        inputState={props.profileInputText}
        addPost={props.addPost}
        updateState={props.updateProfileState}
      />
      <MyPosts posts={props.posts} />
    </section>
  );
}
