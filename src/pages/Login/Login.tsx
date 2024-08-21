
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import s from './Login.module.css'

const Login = () => {
  return (
    <div className={s.wrapper}>
      <Heading>Вход</Heading>
      <form action='#' className={s.form}>
        <label htmlFor='email' className={s.label}>Ваш Email
          <Input name='email' type='email' placeholder='Email' />
        </label>
        <label htmlFor='password' className={s.label}>Ваш пароль
          <Input name='password' type='password' placeholder='Пароль' />
        </label>
        <Button appearence='large' className={s.submit}>Вход</Button>
      </form>
      <div className={s.text_wrapper}>
        <p className={s.text}>Нет аккаунта?</p>
        <Link className={s.link} to='register'>Зарегестрироавться</Link>
      </div>
    </div>
  );
};

export default Login;
