import { useLoaderData } from 'react-router-dom';
import { IProduct } from '../../interfaces/Propduct.interface';

const Product = () => {
  const data = useLoaderData() as IProduct;
  return <div>Product: {data.name}</div>;
};

export default Product;
