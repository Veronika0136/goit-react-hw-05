import React, { useEffect, useState, useRef } from 'react';
import { NavLink, Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const location = useLocation();
  const goBackRef = useRef(location.state ?? '/movies');
  console.log(location);
  console.log(goBackRef);

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
      <Link className={s.btn} to={goBackRef.current}>
        Go back
      </Link>

      <div className={s.content}>
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          alt="img"
        />
        <ul className={s.list}>
          <li className={s.li_link}>
            <h3>{details.title}</h3>
          </li>
          <li className={s.li_link}>
            <p>Users score: {Math.round(details.popularity)}%</p>
          </li>
          <li className={s.li_link}>
            <h4>Overview</h4>
          </li>
          <li className={s.li_link}>
            <p>{details.overview}</p>
          </li>
          <li className={s.li_link}>
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
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
