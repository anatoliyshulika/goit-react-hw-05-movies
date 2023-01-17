import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import MovieList from 'components/MovieList/MovieList';
import { Container } from './Home.styled';

export default function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(res => {
      setMovieList(res.results);
    });
  }, []);

  return (
    <Container>
      <h2>Trending today</h2>
      <MovieList movieList={movieList} path="movies/" />
    </Container>
  );
}
