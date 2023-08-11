import React from "react";
import styles from "./rating.module.scss";
import { AiFillStar } from "react-icons/ai";
const Rating = ({ value }) => {
  const ratingColors = {
    0: "#F24C3D",
    1: "#FF6D60",
    2: "#FF9B9B",
    3: "#CBFFA9",
    4: "#00DFA2",
    5: "#00df5d",
  };
  function getRatingColor(rating) {
    if (rating < 0) {
      return ratingColors[0];
    } else if (rating >= 0 && rating < 1) {
      return ratingColors[1];
    } else if (rating >= 1 && rating < 2) {
      return ratingColors[2];
    } else if (rating >= 2 && rating < 3) {
      return ratingColors[3];
    } else if (rating >= 3 && rating < 4) {
      return ratingColors[4];
    } else {
      return ratingColors[5];
    }
  }
  const style = {
    backgroundColor: getRatingColor(value),
  };
  const iconStyle = {
    color: "white",
  };
  return (
    <div style={style} className={styles.container}>
      <AiFillStar style={iconStyle} />
      <p>{value}</p>
    </div>
  );
};

export default Rating;
