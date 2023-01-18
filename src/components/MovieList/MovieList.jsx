import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MovieList({ movieList, path }) {
  const location = useLocation();

  return (
    <ul>
      {movieList.map(movie => (
        <li key={movie.id}>
          <Link to={`${path}${movie.id}`} state={{ from: location }}>
            {movie.original_title ?? movie.original_name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  path: PropTypes.string.isRequired,
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
      original_name: PropTypes.string,
    })
  ).isRequired,
};
