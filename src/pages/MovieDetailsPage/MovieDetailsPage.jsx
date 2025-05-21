import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';

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
      <button type="submit">Go back</button>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} alt="img" />
        <ul>
          <li>{details.title}</li>
          <li>Users score:{details.popularity}%</li>
          <li>Overview</li>
          <li>{details.overview}</li>
          <li>Genres</li>
          <li>text</li>
        </ul>
      </div>
      <div>
        <p>Additional information</p>
        <nav>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
