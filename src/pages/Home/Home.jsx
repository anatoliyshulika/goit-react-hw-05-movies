import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import MovieList from 'components/MovieList/MovieList';
import { Container } from './Home.styled';
import Loader from 'components/Loader/Loader';

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [status, setStatus] = useState('resolved');

  useEffect(() => {
    setStatus('pending');
    fetchTrendingMovies()
      .then(res => {
        setMovieList(res.results);
        setStatus('resolved');
      })
      .catch(error => {
        toast.error(error.response.data.status_message);
        setStatus('resolved');
        return;
      });
  }, []);

  return (
    <Container>
      {status === 'pending' && <Loader />}
      <h2>Trending today</h2>
      <MovieList movieList={movieList} path="movies/" />
    </Container>
  );
}
