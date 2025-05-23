import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import HomePage from '../pages/HomePage/HomePage';
// import MoviesPage from '../pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
// import MovieCast from './MovieCast/MovieCast';
// import MovieReviews from './MovieReviews/MovieReviews';
// import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
// import Navigation from './Navigation/Navigation';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const Navigation = lazy(() => import('./Navigation/Navigation'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:movieId" element={<MovieDetailsPage />} />

        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
