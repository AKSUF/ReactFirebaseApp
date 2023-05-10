import logo from './logo.svg';
import './styles/App.css';
import Layout from './components/Layout';
import Home from './pages/Home'
import SignIUp from './pages/SignUp';
import Login from './pages/Login';
import Result from './pages/Result';
import Quiz from './pages/Quiz';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
<Router>

  <Layout>
  <Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/signup" element={<SignIUp/>}/>
<Route exact path="/login" element={<Login/>}/>
<Route exact path="/quiz" element={<Quiz/>}/>
<Route exact path="/result" element={<Result/>}/>
</Routes>
  </Layout>
 
</Router>
  );
}

export default App;
