import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <h3 className={s.txt}>Page not found. Returning to the main page...</h3>;
};

export default NotFoundPage;
