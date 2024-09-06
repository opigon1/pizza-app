import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import s from './Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { FormEvent, useEffect, useState } from 'react';
import { login, resetErrorMessage } from '../../store/user.slice';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, loginError } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt, navigate]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onLogin = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(resetErrorMessage())
    dispatch(login(formData));
  };
  return (
    <div className={s.wrapper}>
      <Heading>Вход</Heading>
      <form action='#' className={s.form} onSubmit={onLogin} noValidate>
        {loginError ? <p className={s.error}>{loginError}</p> : null}
        <label htmlFor='email' className={s.label}>
          Ваш Email
          <Input
            name='email'
            type='email'
            placeholder='Email'
            onChange={onChange}
            value={formData.email}
          />
        </label>
        <label htmlFor='password' className={s.label}>
          Ваш пароль
          <Input
            name='password'
            type='password'
            placeholder='Пароль'
            onChange={onChange}
            value={formData.password}
          />
        </label>
        <Button appearence='large' className={s.submit} type='submit'>
          Вход
        </Button>
      </form>
      <div className={s.text_wrapper}>
        <p className={s.text}>Нет аккаунта?</p>
        <Link className={s.link} to='register'>
          Зарегестрироавться
        </Link>
      </div>
    </div>
  );
};

export default Login;
