import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import { toast } from 'react-toastify';
import avatar from './avatar.png';

export default function Cast() {
  const [casts, setCasts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieCredits(id)
      .then(res => setCasts(res.cast))
      .catch(error => {
        toast.error(error.response.data.status_message);
        return;
      });
  }, [id]);

  return (
    <ul>
      {casts.map(cast => (
        <li key={cast.id}>
          <img
            src={
              cast.profile_path
                ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                : avatar
            }
            alt="Actor avatar"
            width="100"
          />
          <p>{cast.name}</p>
          <p>{cast.character}</p>
        </li>
      ))}
    </ul>
  );
}
