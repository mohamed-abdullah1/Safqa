import React from "react";
import MainLogo from "../MainLogo/MainLogo";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./topbar.module.scss";

const Topbar = () => {
  return (
    <div className={styles.container}>
      <MainLogo />
      <Searchbar />
    </div>
  );
};

export default Topbar;
