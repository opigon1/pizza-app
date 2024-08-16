import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const App: FC<IProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default App;
