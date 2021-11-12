import s from "./Users.module.css";
import Spinner from "../common/Spinner/Spinner";
import { NavLink } from "react-router-dom";
import FollowButton from "./FollowButton";

export default function User(props) {
  let totalUsersCount = props.totalUsersCount;
  let pagesCount = Math.ceil(totalUsersCount / props.pageSize);
  let pages = [];
  // making pagination
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
    // rendering loading spinner
    <div>
      {props.isFetching && <Spinner />}
      {/* rendering select, that controlls page size*/}
      <div className={s.select}>
        Результатов на странице:&nbsp;
        <select
          name=""
          id=""
          value={props.pageSize}
          onChange={(e) => props.setPageSize(props.currentPage, e.target.value)}
        >
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      {/* transforming array of users into user's cards */}
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
              <FollowButton
                disabledFollowButtonList={props.disabledFollowButtonList}
                user={user}
                toggleFollow={props.toggleFollow}
              />
            </div>
          </div>
        </div>
      ))}
      {/* showing pagination */}
      <div className={s.pagination}>
        <div>{pages}</div>
      </div>
    </div>
  );
}
