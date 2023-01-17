import axios from 'axios';

const API_KEY = '19b595e9d7755fc5647d9dc3547e0f3b';

async function fetchTrendingMovies() {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );
  if (res.status === 200) {
    return res.data;
  } else {
    return Promise.reject();
  }
}

async function fetchMovieDetails(id) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  if (res.status === 200) {
    return res.data;
  } else {
    return Promise.reject();
  }
}

async function fetchMovieCredits(id) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  if (res.status === 200) {
    return res.data;
  } else {
    return Promise.reject();
  }
}

async function fetchMovieReviews(id) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  if (res.status === 200) {
    return res.data;
  } else {
    return Promise.reject();
  }
}

async function fetchSearchingMovies(query) {
  const res = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  if (res.status === 200) {
    return res.data;
  } else {
    return Promise.reject();
  }
}

export {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
  fetchSearchingMovies,
};
