
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import s from './Register.module.css'

const Register = () => {
  return (
    <div className={s.wrapper}>
      <Heading>Регистрация</Heading>
      <form action='#' className={s.form}>
        <label htmlFor='email'className={s.label}>Ваш Email
          <Input name='email' type='email' placeholder='Email' />
        </label>
        <label htmlFor='password' className={s.label}>Ваш пароль
          <Input name='password' type='password' placeholder='Пароль' />
        </label>
        <label htmlFor='name' className={s.label}>Ваше имя
          <Input name='name' type='text' placeholder='Имя' />
        </label>
        <Button className={s.submit} appearence='large'>Зарегестрироавться</Button>
      </form>
      <div className={s.text_wrapper}>
        <p className={s.text}>Есть аккаунт?</p>
        <Link className={s.link} to='/auth'>Войти</Link>
      </div>
    </div>
  );
};

export default Register;
