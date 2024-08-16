import CardList from '../../components/CardList/CardList';
import Heading from '../../components/Heading/Heading';
import Search from '../../components/Search/Search';
import s from './Product.module.css';

const Product = () => {
  return (
    <div className={s.content}>
      <div className={s.content_heading}>
        {' '}
        <Heading>Меню</Heading>
        <Search />
      </div>
      <CardList />
    </div>
  );
};

export default Product;
