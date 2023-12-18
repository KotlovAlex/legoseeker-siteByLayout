import React, { useState } from 'react'
import styles from './Slider.module.css'
import SliderImg1 from '../../images/slider1.svg'
import SliderImg2 from '../../images/slider2.svg'
import SliderImg3 from '../../images/slider3.svg'

const Slider = () => {
  const sliderImages = [SliderImg1, SliderImg2, SliderImg3];
  const [currentSlider, setCurrentSlider] = useState(1)
  const activeSlider = `${styles.button} ${styles.active}`;
  return (
    <div className={styles.slider}>
      <img src={sliderImages[currentSlider]} alt='Slider' />
      <div className={styles.buttons}>
        <div onClick={() => setCurrentSlider(0)} className={currentSlider === 0 ? activeSlider : styles.button} />
        <div onClick={() => setCurrentSlider(1)} className={currentSlider === 1 ? activeSlider : styles.button} />
        <div onClick={() => setCurrentSlider(2)} className={currentSlider === 2 ? activeSlider : styles.button} />
      </div>
    </div>
  )
}

export default Slider