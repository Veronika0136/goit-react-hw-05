import React, { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../services/api';
import s from './HomePage.module.css';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTrendingMovies();
        setTrendingMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  console.log(trendingMovies);
  console.log(trendingMovies.map(item => item.id));

  return (
    <div>
      <h1 className={s.title}>Trending today</h1>
      <MovieList arr={trendingMovies} />
    </div>
  );
};

export default HomePage;
