import React from "react";

export default function Profile() {
  return (
    <section className="content">
      <img
        className="bigpic"
        src="https://fartuk.ru/upload/resize_cache/iblock/f42/1920_533_1d2c0be91f8b91a0d3c91a9448f348e3c/skinali_nyu_york_195782.jpg"
        alt="bigpic"
      />
      <div className="userinfo">
        <img
          className="avatar"
          src="https://i.pinimg.com/originals/1d/52/88/1d528825423bbfc1fe82dde5c871962d.jpg"
          alt="avatar"
        />
      </div>
      <div className="my-posts">my-posts</div>
      <div className="new-posts">new-posts</div>
      <div className="post1">post1</div>
      <div className="posts2">posts2</div>
    </section>
  );
}
