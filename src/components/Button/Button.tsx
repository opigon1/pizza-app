import { FC } from 'react';
import s from './Button.module.css'
import cn from 'classnames'
import { IButtonProps } from './Button.props';

const Button: FC<IButtonProps> = ({children, className, appearence, ...props}) => {
    return (
        <button className={cn(s.button, className, {
            [s.small]: appearence === 'small',
            [s.medium]: appearence === 'medium',
            [s.large]: appearence === 'large',
        })} {...props}>{children}</button>
    );
}

export default Button;
