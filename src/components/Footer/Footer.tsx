import React from 'react'
import styles from './Footer.module.css'
import telegramIcom from '../../images/telegram-circle.svg'
import vkIcom from '../../images/vk-circle.svg'
import MCIcon from '../../images/mastercard.svg'
import VISAIcon from '../../images/visa.svg'
import MIRIcon from '../../images/mir.svg'
import DOLYAMIIcon from '../../images/dolyami.svg'

const Footer: React.FC = () => {
  const remark = "Логотипы LEGO, DUPLO, а также minifigure (минифигурка) являются торговыми марками корпорации The LEGO Group. Этот сайт не уполномочен и не спонсируется корпорацией The LEGO Group. Пользование данным сайтом означает ваше согласие с опубликованным договором офертой. Мы получаем и обрабатываем персональные данные посетителей нашего сайта в соответствии с официальной политикой обработки персональных данных";
  const products = ["Коллекционные наборы", "Уникальные наборы", "4+", "ART", "Architecture", "Astro Boy", "Atomic Storm", "Avatar", "BrickHeadz", "City", "Classic", "Crea tor", "DOTS", "DREAMZzz", "DUPLO®", "Disney Princess™", "Friends", "Gabby's Dollhouse", "Harry Potter", "Icons", "Ideas", "Indiana Jones", "Jurassic World™", "Marvel", "Metal Slug", "Minecraft", "Minifigures", "Minions", "Monkie Kid™", "Ninjago", "POPEYE", "Retro", "Saint Seiya", "Sherlock Holmes", "Sonic the Hedgehog", "Space", "Speed Champions", "Star Wars™", "Super Heroes", "Super Mario", "Technic", "The LEGO® Movie 2", "The Little Prince", "VIDIYO", "Автогонки", "Город", "Модельки", "Пожарные", "Полиция", "Розовая мечта"];
  const aboutCompany = ["О нас", "Акции", "Новости", "Мероприятия", "Контакты"];
  const help = ["Доставка и оплата", "Возврат и обмен", "Отзывы", "Вакансии","Вопрос-ответ","Где мой заказ?","Обратная связь","Карта сайта"];
  return (
    <footer className={styles.footer}>
      <div className={styles.upper}>
        <div className={styles.contacts}>
          <div className={styles.left}>
            <a className={styles.number} href="tel:8-800-555-35-35">8 (800) 555-35-35</a>
            <div className={styles.hours}>Режим работы <br/> 09:00 - 22:00 (МСК)</div>
          </div>
          <div className={styles.right}>
            <h3>Мы в соцсетях</h3>
            <div className={styles.links}>
              <a href="/#">
                <img src={telegramIcom} alt="telegram" />
              </a>
              <a href="/#">
                <img src={vkIcom} alt="vk" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.payments}>
          <h3>Вы можете оплатить:</h3>
          <div className={styles["payment-methods"]}>
            <img src={MCIcon} alt="Master Card" />
            <img src={VISAIcon} alt="VISA" />
            <img src={MIRIcon} alt="МИР" />
            <img src={DOLYAMIIcon} alt="Долями" />
          </div>
        </div>
      </div>
      <div className={styles.products}>
        <h3>Серии конструкторов</h3>
        <ul>
            {products.map(element =>
              <li><a href="/#">{element}</a></li>  
            )}
          </ul>
      </div>
      <div className={styles.info}>
        <div className={styles.about}>
          <h3>О компании</h3>
          <ul>
            {aboutCompany.map(element =>
              <li><a href="/#">{element}</a></li>  
            )}
          </ul>
        </div>
        <div className={styles.help}>
          <h3>Помощь</h3>
          <ul>
            {help.map(element =>
              <li><a href="/#">{element}</a></li>  
            )}
          </ul>
        </div>
      </div>
      <p className={styles.remark}>{remark}</p>
      <div className={styles.llc}>
        <div className={styles.copyright}>© Lego Seeker, 2023</div>
        <ul>
          <li> <a href="/#">Политика конфиденциальности</a> </li>
          <li> <a href="/#">Оферта</a> </li>
          <li> <a href="/#">Cookies</a> </li>
          <li> <a href="/#">Copyright</a> </li>
          <li> <a href="/#">Политика рекомендаций</a> </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer