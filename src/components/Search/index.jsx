import debounce from "lodash.debounce";
import React from "react";
import { SearchContext } from "../../App";
import styles from "./Search.module.scss";

const Search = () => {
  const [value, setValue] = React.useState("");
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

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
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы ... "
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          enableBackground="new 0 0 512 512"
          version="1.1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <path d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"></path>
        </svg>
      )}
    </div>
  );
};

export default Search;
