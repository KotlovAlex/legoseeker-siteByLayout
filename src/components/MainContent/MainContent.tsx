import React from 'react'
import styles from './MainContent.module.css'
import Slider from '../Slider/Slider'
import ProductList from '../ProductList/ProductList'

const MainContent = () => {
  return (
    <div className={styles.main}>
      <Slider />
      <ProductList />
    </div>
  )
}

export default MainContent