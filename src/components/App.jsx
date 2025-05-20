import React from 'react';
import css from './App.module.css';
import { Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className={css}>
      <Routes>
        <Router path="" element />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
