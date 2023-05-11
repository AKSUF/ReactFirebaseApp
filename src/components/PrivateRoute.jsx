import { Route, Redirect,Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
export default function PrivateRoute({ element: Element, ...rest }) {
  const { currentUser } = useAuth();
  const history=useNavigate();
  return currentUser ? (
   <Route {...rest}>{(props)=><Element {...props}/>}</Route>
  ) : (
    <Link to="/login" />
  );
}
