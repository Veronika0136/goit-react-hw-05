import React from 'react';
import { Routes, Route } from 'react-router-dom';
import css from './App.module.css';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Novigation from './Navigation/Navigation';

const App = () => {
  return (
    <div className={css}>
      <Novigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>

        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
