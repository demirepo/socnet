import axios from "axios";
import React from "react";
import s from "./users.module.css";

export default class Users extends React.Component {
  //https://randomuser.me/api/?results=10
  //https://social-network.samuraijs.com/
  componentDidMount() {
    axios
      .get(
        `https://randomuser.me/api/?page=${this.currentPage}&results=15&seed=abc`
      )
      .then((response) => {
        this.props.setUsers(response.data.results);
      });
  }

  // componentDidUpdate() {
  //   console.log(window.state);
  // }

  toggleFollow = (userId) => {
    this.props.toggleFollow(userId);
  };

  setPageSize = (pageSize) => {
    this.props.setPageSize(pageSize);
    console.log(this.props.state);
  };

  setCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://randomuser.me/api/?page=${currentPage}&results=${this.props.pageSize}&seed=abc`
      )
      .then((response) => {
        this.props.setUsers(response.data.results);
      });
  };

  render() {
    let totalUsersCount = this.props.users.length;
    let pagesCount = Math.ceil(totalUsersCount / this.props.pageSize);
    let pages = [];
    console.log(this);
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(
        <span
          className={
            i === this.props.currentPage
              ? s.pageNumber + " " + s.active
              : s.pageNumber
          }
          key={i}
          onClick={(e) => {
            this.setCurrentPage(e.target.innerText);
          }}
        >
          {i}
        </span>
      );
    }

    return (
      <div>
        <div className={s.pagination}>
          <div>{pages}</div>

          <span className={s.select}>
            Результатов на странице:&nbsp;
            <select
              name=""
              id=""
              onChange={(e) => this.setPageSize(e.target.value)}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </span>
        </div>
        {this.props.users.map((user) => (
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
                  <button onClick={() => this.toggleFollow(user.id)}>
                    Отписаться
                  </button>
                ) : (
                  <button onClick={() => this.toggleFollow(user.id)}>
                    Подписаться
                  </button>
                )}
                {/* <button>Написать сообщение</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
