import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({ element: Element, ...rest }) {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Route {...rest} element={Element} />
  ) : (
    <Navigate to="/login" replace />
  );
}
