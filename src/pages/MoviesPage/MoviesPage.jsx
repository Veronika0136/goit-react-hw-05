import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import MovieList from '../../components/MovieList/MovieList';
import { fetchSearchMovies } from '../../services/api';
import toast from 'react-hot-toast';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [arr, setArr] = useState([]);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        const data = await fetchSearchMovies(query);
        setArr(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [query]);

  const handleChangeQuery = newQuery => {
    setQuery(newQuery);
    setArr([]);
  };

  const handleSubmit = (values, options) => {
    const newQuery = values.query.trim();
    if (newQuery) {
      handleChangeQuery(newQuery);
    } else {
      toast.error('Please enter some text to search for a movie');
    }
    options.resetForm();
  };

  const initialValues = {
    query: '',
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field className={s.input} name="query" type="text" />
          <button className={s.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
      <MovieList arr={arr} />
    </div>
  );
};

export default MoviesPage;
