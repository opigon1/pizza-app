import s from './Card.module.css'
import cardImage from '../../assets/mock-previu.png'
import saveButton from '../../assets/save-btn.svg'
import ratingIcon from '../../assets/rating.svg'

const Card = () => {
    return (
        <li className={s.card}>
            <img className={s.card_image} src={cardImage} alt="Картинка пиццы" />
            <span className={s.price}>300</span>
            <button className={s.card_btn}><img className={s.save_icon} src={saveButton} alt="Добавить в корзину" /></button>
            <span className={s.rating}>4.5 <img className={s.rating_icon} src={ratingIcon} alt="Рейтинг" /></span>
            <h2 className={s.card_name}>Наслаждение</h2>
            <p className={s.card_description}>Салями, руккола, помидоры, оливки</p>
        </li>
    );
}

export default Card;
