// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import UserDetail from './components/UserDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users/:user_id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
