import logo from './logo.svg';
import './styles/App.css';
import Layout from './components/Layout';
import Home from './pages/Home'
import SignIUp from './pages/SignUp';
import Login from './pages/Login';
import Result from './pages/Result';
import Quiz from './pages/Quiz';
import PrivateRoute from './components/PrivateRoute';
import {AuthProvider} from './context/AuthContext'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
<Router>
<AuthProvider>
  <Layout>
  <Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/signup" element={<SignIUp/>}/>
<Route exact path="/login" element={<Login/>}/>
<PrivateRoute exact path="/quiz" element={<Quiz/>}/>
<PrivateRoute exact path="/result" element={<Result/>}/>
</Routes>
  </Layout>
  </AuthProvider>
</Router>
  );
}

export default App;
