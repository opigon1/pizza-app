import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import s from './CardList.module.css';
import { IProduct } from '../../interfaces/Propduct.interface';
import axios from 'axios';
import { BASE_URL } from '../../helper/api';
import Preloader from '../Preloader/Preloader';

const CardList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${BASE_URL}/products`);
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ul className={s.card_list}>
      {!isLoading && products.map((p) => (
        <Card
          name={p.name}
          key={p.id}
          image={p.image}
          ingredients={p.ingredients}
          price={p.price}
          rating={p.rating}
        ></Card>
      ))}
      {isLoading && <Preloader />}
    </ul>
  );
};

export default CardList;
