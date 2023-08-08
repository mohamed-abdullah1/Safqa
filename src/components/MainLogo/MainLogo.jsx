import React from "react";
import styles from "./mainLogo.module.scss";
import logo from "../../assets/safqa_main2.svg";
const MainLogo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} />
      </div>
      <p className={styles.name}>Safqa</p>
    </div>
  );
};

export default MainLogo;
