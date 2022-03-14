import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from "./Users.module.css";

type PropsType = {
  totalUsersCount: number;
  currentPage: number | string;
  pageSize: number;
  setCurrentPage: (currentPage: number) => void;
  setPageSize: (currentPage: number, pageSize: number) => void;
};

const Paginator: React.FC<PropsType> = (props) => {
  const {
    totalUsersCount,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
  } = props;

  let [currentPageInput, setCurrentPageInput] = useState(currentPage);
  let [currentPortion, setCurrentPortion] = useState(0);
  const portionSize = 10;

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];

  const getFirstPortionElem = () => {
    return 1 + currentPortion * portionSize;
  };
  const getLastPortionElem = () => {
    let result = currentPortion * portionSize + portionSize;
    return result <= pagesCount ? result : pagesCount;
  };

  useEffect(() => {
    setCurrentPageInput(currentPage);
  }, [currentPage]);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    let value = (e.target as HTMLInputElement).value;
    if (isNaN(+value)) return;
    if (value === "") {
      setCurrentPageInput("");
    } else {
      setCurrentPageInput(parseInt(value));
    }
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      let value = parseInt((e.target as HTMLInputElement).value);
      if (value) {
        if (value < 1) {
          value = 1;
        } else if (value > pagesCount) {
          value = pagesCount;
          console.log(value);
        } else {
          setCurrentPage(value);
          setCurrentPortion(Math.floor((value - 1) / portionSize));
        }
      }
    }
  };

  const decresePortion = () => {
    if (currentPortion > 0) {
      setCurrentPortion(--currentPortion);
      setCurrentPage(getFirstPortionElem());
    }
  };

  const incresePortion = () => {
    if (currentPortion < Math.floor(pagesCount / portionSize)) {
      setCurrentPortion(++currentPortion);
      setCurrentPage(getFirstPortionElem());
    }
  };

  for (let i = getFirstPortionElem(); i <= getLastPortionElem(); i++) {
    pages.push(
      <span
        className={
          i === currentPage ? s.pageNumber + " " + s.active : s.pageNumber
        }
        key={i}
        onClick={(e: React.MouseEvent<HTMLInputElement>) => {
          setCurrentPage(+(e.target as HTMLInputElement).innerText);
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
            value={pageSize}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setPageSize(+currentPage, +e.target.value)
            }
          >
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <div className={s.pagination}>
        <button onClick={decresePortion}>prev 10</button>
        <input
          type="text"
          value={currentPageInput}
          onKeyDown={onEnter}
          onInput={handleInput}
          onFocus={(e) => e.target.select()}
        />

        <div>{pages}</div>
        <button onClick={incresePortion}>next 10</button>
      </div>
    </>
  );
};

export default Paginator;
