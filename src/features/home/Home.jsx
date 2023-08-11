import React from "react";
import styles from "./styles/home.module.scss";
import Product from "../../components/Product/Product";
import { CATEGORIES, PRODUCTS } from "../../global/CONSTANTS";
import ProductList from "../../components/ProductList/ProductList";
const Home = () => {
  return (
    <div>
      <ProductList title="Recommended For You" products={PRODUCTS} />
      <div className={styles.categoriesContainer}>
        {Object.keys(CATEGORIES)?.map((key) => (
          <div key={key} className={styles.catContainer}>
            <img src={CATEGORIES[key]} />
          </div>
        ))}
      </div>
      <ProductList title="Top Laptops" products={PRODUCTS} />
    </div>
  );
};

export default Home;
