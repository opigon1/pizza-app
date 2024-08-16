
import { IHeadingProps } from './Heading.props';
import s from './Heading.module.css'

const Heading = ({children}: IHeadingProps) => {
    return (
        <h1 className={s.heading}>
            {children}
        </h1>
    );
}

export default Heading;
