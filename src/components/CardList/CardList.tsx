import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import s from './CardList.module.css';
import { IProduct } from '../../interfaces/Propduct.interface';
import { AxiosError } from 'axios';
import { getAllPropduct, getProductByName } from '../../helper/api';
import Preloader from '../Preloader/Preloader';
import { ICardListProps } from './CardList.props';

const CardList = ({ filterByName }: ICardListProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getProducts(filterByName);
  }, [filterByName]);

  const getProducts = async (name: string) => {
    try {
      setIsLoading(true);
      setProducts(await getProductByName(name));
      setIsLoading(false);
      setError('');
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.message);
      }

      setIsLoading(false);
    }
  };

  return (
    <>
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
      {products.length == 0 && <p className={s.error}>Ничего не найдено</p>}
    </>
  );
};

export default CardList;
