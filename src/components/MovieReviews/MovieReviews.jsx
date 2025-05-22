import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import s from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div className={s.reviews}>
      {reviews.length === 0 ? (
        <p> We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(item => (
            <li className={s.list} key={item.id}>
              <h4 className={s.author}>{item.author}</h4>
              <p>"{item.content}"</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
