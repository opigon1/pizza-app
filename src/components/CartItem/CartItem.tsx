import s from './CartItem.module.css';
import { ICartItem } from './CartItem.interface';
import minusIcon from '../../assets/minus-icon.svg';
import plusIcon from '../../assets/plus-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import { addToCart, decrementCount, removeFromCart } from '../../store/cart.slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';

const CartItem = (props: ICartItem) => {
  const dispatch = useDispatch<AppDispatch>();

  const incrementCount = () => {
    dispatch(addToCart(props.id));
  };

  const handledecrementCount = () => {
    dispatch(decrementCount(props.id));
  };

  const handleRomoveFromCart = () => {
    dispatch(removeFromCart(props.id));
  };

  return (
    <div className={s['item']}>
      <div
        className={s['image']}
        style={{ backgroundImage: `url('${props.image}')` }}
      ></div>
      <div className={s['description']}>
        <div className={s['name']}>{props.name}</div>
        <div className={s['price']}>{props.price}&nbsp;₽</div>
      </div>
      <div className={s['actions']}>
        <button className={s['minus']} onClick={handledecrementCount}  disabled={props.count <= 0}>
          <img src={minusIcon} alt='Удалить из корзины' />
        </button>
        <div className={s['number']}>{props.count}</div>
        <button
          className={s['plus']}
          onClick={incrementCount}
         
        >
          <img src={plusIcon} alt='Добавить в корзину' />
        </button>
        <button className={s['remove']} onClick={handleRomoveFromCart}>
          <img src={deleteIcon} alt='Удалить все' />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
