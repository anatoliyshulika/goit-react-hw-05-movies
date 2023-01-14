import axios from 'axios';

const API_KEY = '19b595e9d7755fc5647d9dc3547e0f3b';

async function fetchTrendingMovies() {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );
  return res.data;
}

async function fetchMovieDetails(id) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return res.data;
}

async function fetchMovieCredits(id) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
}

async function fetchMovieReviews(id) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return res.data;
}

export {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};

//  "homepage": "https://anatoliyshulika.github.io/goit-react-hw-05-movies/",
