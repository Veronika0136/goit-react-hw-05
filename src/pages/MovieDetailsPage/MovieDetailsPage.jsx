import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setDetails(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [movieId]);

  console.log(details);

  return (
    <div>
      <button className={s.btn} type="submit">
        Go back
      </button>
      <div className={s.content}>
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
          alt="img"
        />
        <ul className={s.list}>
          <li>
            <h3>{details.title}</h3>
          </li>
          <li>
            <p>Users score: {Math.round(details.popularity)}%</p>
          </li>
          <li>
            <h4>Overview</h4>
          </li>
          <li>
            <p>{details.overview}</p>
          </li>
          <li>
            <h4>Genres</h4>
          </li>
          <li className={s.genres}>
            {details.genres && details.genres.map(item => <p key={item.id}>{item.name}</p>)}
          </li>
        </ul>
      </div>

      <p className={s.txt}>Additional information</p>

      <nav className={s.nav}>
        <ul>
          <li className={s.li_link}>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li className={s.li_link}>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
