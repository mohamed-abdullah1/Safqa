import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./bottomNav.module.scss";
import { BiCategory, BiHomeAlt, BiSolidCategory } from "react-icons/bi";
import { BsFillCartFill, BsFillPersonFill, BsPerson } from "react-icons/bs";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
const BottomNav = () => {
  const location = useLocation();
  //helper functions
  const activeColor = {
    color: "#726FAB",
  };
  //load when component is mounted
  useEffect(() => {
    console.log("👉", location);
  }, [location]);
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Link to="/" className={styles.itemContainer}>
            {location?.pathname === "/" ? (
              <AiFillHome className={styles.icon} style={activeColor} />
            ) : (
              <BiHomeAlt className={styles.icon} />
            )}
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/categories" className={styles.itemContainer}>
            {location?.pathname === "/categories" ? (
              <BiSolidCategory className={styles.icon} style={activeColor} />
            ) : (
              <BiCategory className={styles.icon} />
            )}
            <p>Categories</p>
          </Link>
        </li>
        <li>
          <Link to="/account" className={styles.itemContainer}>
            {location?.pathname === "/account" ? (
              <BsFillPersonFill className={styles.icon} style={activeColor} />
            ) : (
              <BsPerson className={styles.icon} />
            )}

            <p>Account</p>
          </Link>
        </li>
        <li>
          <Link to="/cart" className={styles.itemContainer}>
            {location?.pathname === "/cart" ? (
              <BsFillCartFill className={styles.icon} style={activeColor} />
            ) : (
              <AiOutlineShoppingCart className={styles.icon} />
            )}

            <p>Cart</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
