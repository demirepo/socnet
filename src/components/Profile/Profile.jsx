import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UserInfo/UserInfo";
import NewPostReduxForm from "./NewPost/NewPost";
import Status from "./Status";

import s from "./Profile.module.css";

export default function Profile(props) {
  return (
    <section className={s.content}>
      <Status {...props} />
      <UserInfo data={props.profileData} />
      <NewPostReduxForm onSubmit={props.onSubmit} />
      <MyPosts posts={props.posts} />
    </section>
  );
}
