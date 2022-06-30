import React from "react";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 64 64"
        version="1.1"
        viewBox="0 0 64 64"
        xmlSpace="preserve"
      >
        <g transform="translate(30 230)">
          <path
            d="M-2.3-182.9c-10.7 0-19.5-8.7-19.5-19.5 0-10.7 8.7-19.5 19.5-19.5s19.5 8.7 19.5 19.5c-.1 10.8-8.8 19.5-19.5 19.5zm0-36.1c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7 16.7-7.5 16.7-16.7c-.1-9.2-7.6-16.7-16.7-16.7z"
            className="st0"
          ></path>
          <path
            d="M23.7 -174.2L10.1 -187.7 12.3 -189.9 25.8 -176.3 23.7 -174.2"
            className="st0"
          ></path>
        </g>
      </svg>
      <input className={styles.input} placeholder="Поиск пиццы ... " />
    </div>
  );
};

export default Search;
