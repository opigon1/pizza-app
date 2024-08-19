import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import s from './CardList.module.css';
import { IProduct } from '../../interfaces/Propduct.interface';
import axios from 'axios';
import { BASE_URL } from '../../helper/api';

const CardList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    const { data } = await axios.get(`${BASE_URL}/products`);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ul className={s.card_list}>
      {products.map((p) => (
        <Card
          name={p.name}
          key={p.id}
          image={p.image}
          ingredients={p.ingredients}
          price={p.price}
          rating={p.rating}
        ></Card>
      ))}
    </ul>
  );
};

export default CardList;
