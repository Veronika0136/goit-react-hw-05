import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ arr }) => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <ul className={s.list}>
        {arr.map(item => (
          <li key={item.id}>
            <Link state={location} to={item.id.toString()}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
