import React from 'react'
import styles from './ProductList.module.css'
import Product from '../Product/Product'

const ProductList = () => {
  return (
    <div className={styles.products}>
      <h1>Товары</h1>
      <div className={styles["product-list"]}>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product style='hidden320'></Product>
        <Product style='hidden320'></Product>
        <Product style='hidden1280'></Product>
        <Product style='hidden1280'></Product>
      </div>
      <a href="/#">Показать все</a>
    </div>
  )
}

export default ProductList