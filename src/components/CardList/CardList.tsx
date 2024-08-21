import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import s from './CardList.module.css';
import { IProduct } from '../../interfaces/Propduct.interface';
import  { AxiosError } from 'axios';
import { getAllPropduct } from '../../helper/api';
import Preloader from '../Preloader/Preloader';

const CardList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getProducts = async () => {
    try {
      setIsLoading(true);
      setProducts(await getAllPropduct());
      setIsLoading(false);
      setError('');
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.message);
      }

      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ul className={s.card_list}>
      {!isLoading &&
        products.map((p) => (
          <Card
          id={p.id}
            name={p.name}
            key={p.id}
            image={p.image}
            ingredients={p.ingredients}
            price={p.price}
            rating={p.rating}
          ></Card>
        ))}
      {isLoading && <Preloader />}
      {error && <p className={s.error}>{error}</p>}
    </ul>
  );
};

export default CardList;
