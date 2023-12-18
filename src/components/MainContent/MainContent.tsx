import React from 'react'
import styles from './MainContent.module.css'
import Slider from '../Slider/Slider'

const MainContent = () => {
  return (
    <div className={styles.main}>
      <Slider />
    </div>
  )
}

export default MainContent