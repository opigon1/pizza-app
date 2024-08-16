
import Card from '../Card/Card';
import s from './CardList.module.css'

const CardList = () => {
    return (
        <ul className={s.card_list}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </ul>
    );
}

export default CardList;
