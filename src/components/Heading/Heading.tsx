import { IHeadingProps } from './Heading.props';
import s from './Heading.module.css';

const Heading = ({ children, className }: IHeadingProps) => {
  return (
    <h1 className={className ? s.heading + ' ' + className : s.heading}>
      {children}
    </h1>
  );
};

export default Heading;
