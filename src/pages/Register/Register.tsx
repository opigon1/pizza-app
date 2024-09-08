
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import s from './Register.module.css'
import { RootState } from '../../store/store';
import { useState, useEffect, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { resetErrorMessage, register } from '../../store/user.slice';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, registerError } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt, navigate]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onRegister = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(resetErrorMessage())
    dispatch(register(formData));
  };

  return (
    <div className={s.wrapper}>
      <Heading>Регистрация</Heading>
      {registerError ? <p className={s.error}>{registerError}</p> : null}
      <form action='#' className={s.form} onSubmit={onRegister} noValidate>
        <label htmlFor='email'className={s.label}>Ваш Email
          <Input name='email' type='email' placeholder='Email' onChange={onChange} value={formData.email}/>
        </label>
        <label htmlFor='password' className={s.label}>Ваш пароль
          <Input name='password' type='password' placeholder='Пароль' onChange={onChange} value={formData.password}/>
        </label>
        <label htmlFor='name' className={s.label}>Ваше имя
          <Input name='name' type='text' placeholder='Имя' onChange={onChange} value={formData.name}/>
        </label>
        <Button className={s.submit} appearence='large' type='submit'>Зарегестрироавться</Button>
      </form>
      <div className={s.text_wrapper}>
        <p className={s.text}>Есть аккаунт?</p>
        <Link className={s.link} to='/auth'>Войти</Link>
      </div>
    </div>
  );
};

export default Register;
