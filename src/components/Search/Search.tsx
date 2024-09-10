
import Input from '../Input/Input';
import s from './Search.module.css'
import { ISearchProps } from './Search.props';

const Search = ({...props}: ISearchProps) => {
    return (
            <Input className={s.search} placeholder='Введите блюдо или состав' {...props}/>
    );
}

export default Search;
