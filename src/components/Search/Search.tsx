
import Input from '../Input/Input';
import s from './Search.module.css'

const Search = () => {
    return (
            <Input className={s.search} placeholder='Введите блюдо или состав' />
    );
}

export default Search;
