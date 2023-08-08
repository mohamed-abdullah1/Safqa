import React from "react";
import styles from "./searchbar.module.scss";
import { Input } from "antd";
import { BsSearch } from "react-icons/bs";
const Searchbar = () => {
  return (
    <div className={styles.container}>
      <Input
        placeholder="What are you looking for?"
        className={styles.search}
      />
      <div></div>
    </div>
  );
};

export default Searchbar;
