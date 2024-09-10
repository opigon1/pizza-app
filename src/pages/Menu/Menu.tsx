import { ChangeEvent, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import Heading from '../../components/Heading/Heading';
import Search from '../../components/Search/Search';
import s from './Menu.module.css';

const Menu = () => {
  const [filterByName, setFilterByName] = useState<string>('');

  const getFilterValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterByName(e.target.value);
  }

  return (
    <div className={s.content}>
      <div className={s.content_heading}>
        {' '}
        <Heading>Меню</Heading>
        <Search onChange={getFilterValue}/>
      </div>
      <CardList filterByName={filterByName}/>
    </div>
  );
};

export default Menu;
