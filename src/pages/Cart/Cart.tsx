import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import s from './Cart.module.css';
import { AppDispatch, RootState } from '../../store/store';
import { IProduct } from '../../interfaces/Propduct.interface';
import { useEffect, useState } from 'react';
import { getProductById, handleOrder } from '../../helper/api';
import CartItem from '../../components/CartItem/CartItem';
import { clearCart } from '../../store/cart.slice';
import { useNavigate } from 'react-router-dom';



const DELIVERY = 169;

const Cart = () => {
  const [cartProducts, setCardProducts] = useState<IProduct[]>([]);
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  const total = items
    .map((i) => {
      const product = cartProducts.find((p) => p.id === i.id);
      if (!product) {
        return 0;
      }
      return i.count * product.price;
    })
    .reduce((acc, i) => (acc += i), 0);

  useEffect(() => {
    loadAllProducts();
  }, [items]);

  const loadAllProducts = async () => {
    const res = await Promise.all(items.map((i) => getProductById(i.id)));
    setCardProducts(res);
  };

  const orderHandler = async () => {
    handleOrder(items)
    dispatch(clearCart())
    navigate('/success')
  }

  return (
    <div className={s.content}>
      <Heading className={s['headling']}>Корзина</Heading>
      {items.map((i) => {
        const product = cartProducts.find((p) => p.id === i.id);
        if (!product) {
          return;
        }
        return <CartItem key={product.id} count={i.count} {...product} />;
      })}
      <div className={s['line']}>
        <div className={s['text']}>Итог</div>
        <div className={s['price']}>
          {total}&nbsp;<span>₽</span>
        </div>
      </div>
      <hr className={s['hr']} />
      <div className={s['line']}>
        <div className={s['text']}>Доставка</div>
        <div className={s['price']}>
          {DELIVERY}&nbsp;<span>₽</span>
        </div>
      </div>
      <hr className={s['hr']} />
      <div className={s['line']}>
        <div className={s['text']}>
          Всего <span className={s['total-count']}>({items.length})</span>
        </div>
        <div className={s['price']}>
          {total + DELIVERY}&nbsp;<span>₽</span>
        </div>
      </div>
      <div className={s['checkout']}>
        <Button appearence='large' onClick={orderHandler}>оформить</Button>
      </div>
    </div>
  );
};

export default Cart;
