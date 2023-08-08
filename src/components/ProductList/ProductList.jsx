import React from "react";
import styles from "./productList.module.scss";
import Product from "../Product/Product";
const ProductList = ({ title, products }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.products}>
        {products?.map((productItem) => (
          <Product product={productItem} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
