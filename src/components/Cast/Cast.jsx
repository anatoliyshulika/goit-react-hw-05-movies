import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import avatar from './avatar.png';

export default function Cast() {
  const [casts, setCasts] = useState([]);
  const [status, setStatus] = useState('resolved');
  const { id } = useParams();

  useEffect(() => {
    setStatus('pending');
    fetchMovieCredits(id)
      .then(res => {
        setCasts(res.cast);
        setStatus('resolved');
      })
      .catch(error => {
        toast.error(error.response.data.status_message);
        setStatus('resolved');
        return;
      });
  }, [id]);

  console.log(status);
  if (casts.length < 1) {
    return (
      <>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && (
          <p>We don't have any information about casts.</p>
        )}
      </>
    );
  } else {
    return (
      <>
        {status === 'pending' && <Loader />}
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
      </>
    );
  }
}
