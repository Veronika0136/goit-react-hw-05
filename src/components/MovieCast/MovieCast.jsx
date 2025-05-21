import React, { useEffect, useState } from 'react';
import { fetchMovieCredits } from '../../services/api';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
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
    <div>
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt="photo" />
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
