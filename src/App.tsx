import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/login/login';
import SignUpPage from './components/signup/signup';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Default route redirects to the login page */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default App;
