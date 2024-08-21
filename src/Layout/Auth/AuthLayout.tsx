import { Outlet } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import s from './AuthLayout.module.css';

const AuthLayout = () => {
  return (
    <div className={s.auth}>
      <img src={Logo} alt='' className={s.logo} />
      <div className={s.content}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
