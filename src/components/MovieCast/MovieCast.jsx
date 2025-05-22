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

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div className={s.cast}>
      <ul>
        {cast.map(item => (
          <li className={s.li} key={item.id}>
            <img
              className={s.img}
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                  : defaultImg
              }
              alt="profile photo"
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
