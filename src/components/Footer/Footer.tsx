import React from 'react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  const remark = "Логотипы LEGO, DUPLO, а также minifigure (минифигурка) являются торговыми марками корпорации The LEGO Group. Этот сайт не уполномочен и не спонсируется корпорацией The LEGO Group. Пользование данным сайтом означает ваше согласие с опубликованным договором офертой. Мы получаем и обрабатываем персональные данные посетителей нашего сайта в соответствии с официальной политикой обработки персональных данных";
  const products = ["Коллекционные наборы", "Уникальные наборы", "4+", "ART", "Architecture", "Astro Boy", "Atomic Storm", "Avatar", "BrickHeadz", "City", "Classic", "Crea tor", "DOTS", "DREAMZzz", "DUPLO®", "Disney Princess™", "Friends", "Gabby's Dollhouse", "Harry Potter", "Icons", "Ideas", "Indiana Jones", "Jurassic World™", "Marvel", "Metal Slug", "Minecraft", "Minifigures", "Minions", "Monkie Kid™", "Ninjago", "POPEYE", "Retro", "Saint Seiya", "Sherlock Holmes", "Sonic the Hedgehog", "Space", "Speed Champions", "Star Wars™", "Super Heroes", "Super Mario", "Technic", "The LEGO® Movie 2", "The Little Prince", "VIDIYO", "Автогонки", "Город", "Модельки", "Пожарные", "Полиция", "Розовая мечта"];
  const aboutCompany = ["О нас", "Акции", "Новости", "Мероприятия", "Контакты"];
  const help = ["Доставка и оплата", "Возврат и обмен", "Отзывы", "Вакансии","Вопрос-ответ","Где мой заказ?","Обратная связь","Карта сайта"];
  return (
    <footer>
      <div className="contacts"></div>
      <div className="products"></div>
      <div className="about"></div>
      <p className="remark">{remark}</p>
      <div className="llc"></div>
    </footer>
  )
}

export default Footer