import React from 'react';
import './styles/App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Result from './pages/Result';
import Quiz from './pages/Quiz';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
           <Route exact path="/quiz/:id" element={<Quiz />} />
          <Route exact path="/result" element={<Result />} />
  {/* {currentUser ? (
              <>
                <Route exact path="/quiz" element={<Quiz />} />
                <Route exact path="/result" element={<Result />} />
              </>
            ) : (
              <Navigate to="/login" replace />
            )} */}
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
