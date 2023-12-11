import React from 'react';
import logo from '../../images/logo.svg';
import VKIcon from '../../images/VK.svg';
import likeIcon from '../../images/like.svg'
import cartIcon from '../../images/cart.svg';
import SearchIcon from '../../images/searchIcon.svg';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <img alt="logo" className={styles.logo} src={logo} />
        <div className={styles.contact}>
          <a href="tel:8-800-555-35-35"className={styles.number}>8 (800) 555-35-35</a>
          <div className={styles.vk}>
            <img alt="VK" src={VKIcon}/>
            <a href="/#">Наш VK</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <nav className={styles.nav}>
          <a href="/#">Главная</a>
          <a href="/#">Фигурки</a>
          <a href="/#">Кто мы</a>
          <a href="/#">Каталог</a>
          <a href="/#">Личный кабинет</a>
        </nav>
        <div className={styles.searchbar}>
          <img alt="search" src={SearchIcon} width='20px'></img>
          <input type="search" placeholder='Поиск' />
        </div>
        <div className={styles.counters}>
          <div className={styles.container}>
            <img alt="like" src={likeIcon}></img>
            <div className={styles.counter}>0</div>
          </div>
          <div className={styles.container}>
            <img alt="cart" src={cartIcon}></img>
            <div className={styles.counter}>0</div>
          </div>
        </div>
      </div>
      <input id={styles["menu-toggle"]} type="checkbox" />
      <label className={styles['menu-button-container']} htmlFor={styles["menu-toggle"]}>
        <div className={styles["menu-button"]}></div>
      </label>
      <div className={styles.menu}>
        <nav className={styles.nav}>
          <a href="/#">Главная</a>
          <a href="/#">Фигурки</a>
          <a href="/#">Кто мы</a>
          <a href="/#">Каталог</a>
          <a href="/#">Личный кабинет</a>
        </nav>
        <div className={styles.contacts}>
          <a href="tel:8-800-555-35-35"className={styles.number}>8 (800) 555-35-35</a>
          <div className={styles.vk}>
            <img alt="VK" src={VKIcon}/>
            <a href="/#">Наш VK</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header