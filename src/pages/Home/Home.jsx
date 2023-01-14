import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';

import { Link } from 'react-router-dom';

export default function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(res => {
      setMovieList(res.results);
    });
  }, []);

  return (
    <ul>
      {movieList.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            {movie.original_title ?? movie.original_name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
