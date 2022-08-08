import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '42df6f3c7599d2c5d225ca5d434dc871';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return response.data;
};

export const getMoviesById = async id => {
  const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieCast = async id => {
  const respons = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return respons.data;
};

export const getMovieReviews = async id => {
  const respons = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return respons.data;
};

export const getMovieByQuery = async query => {
  const respons = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return respons.data;
};
