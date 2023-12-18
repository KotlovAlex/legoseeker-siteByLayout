import React from 'react'
import styles from './Slider.module.css'
import SliderImg1 from '../../images/slider1.svg'
import SliderImg2 from '../../images/slider2.svg'
import SliderImg3 from '../../images/slider3.svg'

const Slider = () => {
  const sliderImages = [SliderImg1, SliderImg2, SliderImg3];
  return (
    <div className={styles.slider}>
      <img src={SliderImg1} alt='Slider' />
    </div>
  )
}

export default Slider