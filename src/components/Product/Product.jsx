import React from "react";
import styles from "./product.module.scss";

const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={product?.images[0]} alt="" />
      </div>
      <p className={styles.title}>
        {product?.title?.length > 60
          ? product?.title.slice(0, 60) + " .."
          : product?.title}
      </p>
      <p className={styles.price}>EGP {product?.price}</p>
      <div className={styles.itemsContainer}>
        <p>express</p>
        <p>{product?.rating}</p>
        <p>({product?.numOfRates})</p>
      </div>
    </div>
  );
};

export default Product;
