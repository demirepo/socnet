import React from "react";
import s from "./Users.module.css";

function Paginator({
  totalUsersCount,
  pageSize,
  currentPage,
  setCurrentPage,
  setPageSize,
}) {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(
      <span
        className={
          i === currentPage ? s.pageNumber + " " + s.active : s.pageNumber
        }
        key={i}
        onClick={(e) => {
          setCurrentPage(e.target.innerText);
        }}
      >
        {i}
      </span>
    );
  }

  return (
    <>
      <div>
        <div className={s.select}>
          Результатов на странице:&nbsp;
          <select
            name=""
            id=""
            value={pageSize}
            onChange={(e) => setPageSize(currentPage, e.target.value)}
          >
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
      <div className={s.pagination}>
        <div>{pages}</div>
      </div>
    </>
  );
}

export default Paginator;
