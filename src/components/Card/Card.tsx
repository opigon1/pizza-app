import s from './Card.module.css';
import saveButton from '../../assets/save-btn.svg';
import ratingIcon from '../../assets/rating.svg';
import { IProduct } from '../../interfaces/Propduct.interface';
import { Link } from 'react-router-dom';

const Card = ({
  id,
  name,
  image,
  ingredients,
  price,
  rating,
}: IProduct) => {
  return (
    <li className={s.card}>
      <Link className={s.card_link} to={`product/${id}`}>
      <img className={s.card_image} src={image} alt='Картинка пиццы' />
      <span className={s.price}>{price}</span>
      <button className={s.card_btn}>
        <img
          className={s.save_icon}
          src={saveButton}
          alt='Добавить в корзину'
        />
      </button>
      <span className={s.rating}>
        {rating} <img className={s.rating_icon} src={ratingIcon} alt='Рейтинг' />
      </span>
      <h2 className={s.card_name}>{name}</h2>
      <p className={s.card_description}>{ingredients}</p>
      </Link>

    </li>
  );
};

export default Card;
