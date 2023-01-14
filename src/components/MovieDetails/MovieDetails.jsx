import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieDetails(id).then(res => setMovie(res));
  }, [id]);

  if (!movie.title) {
    return;
  }

  function makeGanres() {
    let gan = movie.genres.map(ganre => ganre.name);
    gan = gan.join(', ');
    return gan;
  }

  return (
    <>
      <button>Go back</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <h1>{movie.title}</h1>
        <p>User score: {Math.round(movie.vote_average * 10)}%</p>
        <p>Overview</p>
        <p>{movie.overview}</p>
        <p>Genres</p>
        <p>{makeGanres()}</p>
      </div>
      <div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
