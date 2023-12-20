import React from 'react'
import styles from './Product.module.css'
import productImage from '../../images/product.svg'
import starIcon from '../../images/star.svg'

type Props = {
  style?: string;
}

const Product = ({style}: Props) => {
  const mainStyle = style ? `${styles['product-card']} ${styles[style]}` : styles['product-card']
  return (
    <div className={mainStyle}>
      <img src={productImage} alt="product image" />
      <div className={styles.prices}>
        <span className={styles.current}>25.000 ₽</span>
        <span className={styles.old}>27.000 ₽</span>
      </div>
      <div className={styles.info}>
        <div className={styles.stock}>В наличии</div>
        <div className={styles.rate}>
          <button><img src={starIcon} alt="" /></button>
          <button><img src={starIcon} alt="" /></button>
          <button><img src={starIcon} alt="" /></button>
          <button><img src={starIcon} alt="" /></button>
          <button><img src={starIcon} alt="" /></button>
        </div>
      </div>
      <h3 className={styles["product-name"]}>Мини-фигурка Super Heroes “Коллекционер”</h3>
      <div className={styles.vendor}>Артикул: 123456</div>
      <div className={styles.state}>Состояние: Новый</div>
      <button className={styles.button}>В корзину</button>
    </div>
  )
}

export default Product