import { NavLink, Outlet } from 'react-router-dom';
import cn from 'classnames';
import s from './Layout.module.css';
import avatar from '../../assets/avatar.png';
import exitIcon from '../../assets/exit-icon.svg';
import cartIcon from '../../assets/cart-icon.svg';
import menuIcon from '../../assets/menu-icon.svg';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { removeJwt } from '../../store/user.slice';

const Layout = () => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <>
      <div className={s.layout}>
        <aside className={s.aside}>
          <div className={s.profile}>
            <img className={s.avatar} src={avatar} alt='Аватар пользователя' />
            <h2 className={s.name}>Степан Рындин</h2>
            <p className={s.email}>step.rindin@yadnex.ru</p>
          </div>
          <ul className={s.nav}>
            <li>
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  cn(s.nav_item, {
                    [s.nav_item_active]: isActive,
                  })
                }
              >
                <img
                  className={s.nav_icon}
                  src={menuIcon}
                  alt='Иконка корзины'
                />
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/cart'}
                className={({ isActive }) =>
                  cn(s.nav_item, {
                    [s.nav_item_active]: isActive,
                  })
                }
              >
                <img className={s.nav_icon} src={cartIcon} alt='Иконка меню' />
                Корзина
              </NavLink>
            </li>
          </ul>
          <Button className={s.exit_button} appearence='small' onClick={() => dispatch(removeJwt())}>
            <img src={exitIcon} alt='Выйти из профиля' />
            Выйти
          </Button>
        </aside>
        <section className={s.content}>
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default Layout;
