import React from 'react';
import { Link } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ arr }) => {
  return (
    <div>
      <ul className={s.list}>
        {arr.map(item => (
          <li key={item.id}>
            <Link to={item.id.toString()}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
