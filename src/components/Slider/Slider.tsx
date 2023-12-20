import React, { useState } from 'react'
import styles from './Slider.module.css'
import SliderImg1 from '../../images/slider1.svg'
import SliderImg2 from '../../images/slider2.svg'
import SliderImg3 from '../../images/slider3.svg'

type additionalClass = {
  [key: number]: string;
}

const Slider = () => {
  const sliderImages = [SliderImg1, SliderImg2, SliderImg3];
  const [currentSlider, setCurrentSlider] = useState(1)
  const activeSlider = `${styles.button} ${styles.active}`;
  const additionalClass: additionalClass = {
    0: '',
    1: styles.second,
    2: styles.third
  }
  const imagesClass = `${styles.images} + ${additionalClass[currentSlider]}`
  return (
    <div className={styles.slider}>
      <div className={imagesClass}>
        <img src={sliderImages[0]} alt='Slider' />
        <img src={sliderImages[1]} alt='Slider' />
        <img src={sliderImages[2]} alt='Slider' />
      </div>
      <div className={styles.buttons}>
        <div onClick={() => setCurrentSlider(0)} className={currentSlider === 0 ? activeSlider : styles.button} />
        <div onClick={() => setCurrentSlider(1)} className={currentSlider === 1 ? activeSlider : styles.button} />
        <div onClick={() => setCurrentSlider(2)} className={currentSlider === 2 ? activeSlider : styles.button} />
      </div>
    </div>
  )
}

export default Slider