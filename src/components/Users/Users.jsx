import s from "./Users.module.css";
import Spinner from "../Spinner/Spinner";
import { NavLink } from "react-router-dom";

export default function User(props) {
  let totalUsersCount = props.totalUsersCount;
  let pagesCount = Math.ceil(totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(
      <span
        className={
          i === props.currentPage ? s.pageNumber + " " + s.active : s.pageNumber
        }
        key={i}
        onClick={(e) => {
          props.setCurrentPage(e.target.innerText);
        }}
      >
        {i}
      </span>
    );
  }

  return (
    <div>
      {props.inProgress && <Spinner />}

      <div className={s.select}>
        Результатов на странице:&nbsp;
        <select
          name=""
          id=""
          value={props.pageSize}
          onChange={(e) => props.setPageSize(e.target.value)}
        >
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      {props.users.map((user) => (
        <div key={user.id}>
          <div className={s.usersItem}>
            <div className={s.avatar}>
              <NavLink to={`/profile/${user.id}`}>
                <img src={user.avatar} alt="avatar" />
              </NavLink>
            </div>
            <div className={s.info}>
              <p className={s.name}>{user.name}</p>
              {/* <p className={s.location}>
                  {user.location.city} ({user.location.country})
                </p> */}
              {user.followed ? (
                <button onClick={() => props.toggleFollow(user.id)}>
                  Отписаться
                </button>
              ) : (
                <button onClick={() => props.toggleFollow(user.id)}>
                  Подписаться
                </button>
              )}
              {/* <button>Написать сообщение</button> */}
            </div>
          </div>
        </div>
      ))}

      <div className={s.pagination}>
        <div>{pages}</div>
      </div>
    </div>
  );
}
