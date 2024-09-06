import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const jwt = useSelector((state: RootState) => state.user.jwt);
  if (!jwt) {
    return <Navigate to='/auth' replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
