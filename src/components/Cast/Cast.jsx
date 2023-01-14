import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';

export default function Cast() {
  const [casts, setCasts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieCredits(id).then(res => setCasts(res.cast));
  }, [id]);

  console.log(casts);

  return (
    <>
      <ul>
        {casts.map(cast => (
          <li key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt=""
            />
            <p>{cast.name}</p>
            <p>{cast.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
