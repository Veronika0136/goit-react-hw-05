import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ arr }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={s.list}>
        {arr.map(item => (
          <li key={item.id}>
            <Link state={location} to={`/movies/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
