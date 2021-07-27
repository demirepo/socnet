import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

export default function Profile() {
  return (
    <section className={s.content}>
      <img
        className={s.bigpic}
        src="https://fartuk.ru/upload/resize_cache/iblock/f42/1920_533_1d2c0be91f8b91a0d3c91a9448f348e3c/skinali_nyu_york_195782.jpg"
        alt="bigpic"
      />

      <div className={s.userinfo}>
        <img className={s.avatar} src="" alt="avatar" />
      </div>

      <MyPosts />
    </section>
  );
}
