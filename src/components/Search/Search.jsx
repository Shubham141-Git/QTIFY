import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search-icon.svg";

const Search = () => {
  return (
    <div>
      <form className={styles.wrapper}>
        <input className={styles.search} />
        <div>
          <button className={styles.searchBtn} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
