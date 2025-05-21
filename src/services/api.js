import axios from 'axios';

// axios
//   .get(url, options)
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTFmNmRmNDliZTBiZDkyNDEwOTE1ZmE4ZDlmMDA4MSIsIm5iZiI6MTc0Nzc0MjkyMC43MjgsInN1YiI6IjY4MmM3MGM4MWU5MDkyMzA0NWY1NjI3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WvPXsgtcp-wSI146aph1UZ7bJFpUStdSE1PyZLrNd8Y',
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
    options
  );
  return response.data;
};

export const fetchSearchMovies = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`,
    options
  );
  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return response.data;
};
