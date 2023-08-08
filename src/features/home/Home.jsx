import React from "react";
import styles from "./styles/home.module.scss";
import Product from "../../components/Product/Product";
import { PRODUCTS } from "../../global/CONSTANTS";
import ProductList from "../../components/ProductList/ProductList";
const Home = () => {
  return (
    <div>
      <ProductList title="Recommended For You" products={PRODUCTS} />
    </div>
  );
};

export default Home;
