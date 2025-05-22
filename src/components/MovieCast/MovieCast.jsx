import React, { useEffect, useState } from 'react';
import { fetchMovieCredits } from '../../services/api';
import { useParams } from 'react-router-dom';
import s from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setCast(data.cast);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [movieId]);

  console.log(cast);

  return (
    <div className={s.cast}>
      <ul>
        {cast.map(item => (
          <li className={s.li} key={item.id}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              alt="photo"
            />
            <p>{item.name}</p>
            <p className={s.text}>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
