import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieReviews } from 'services/api';
import Loader from 'components/Loader/Loader';

export default function Revievs() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('resolved');
  const { id } = useParams();

  useEffect(() => {
    setStatus('pending');
    fetchMovieReviews(id)
      .then(res => {
        setReviews(res.results);
        setStatus('resolved');
      })
      .catch(error => {
        toast.error(error.response.data.status_message);
        setStatus('resolved');
        return;
      });
  }, [id]);

  if (reviews.length < 1) {
    return (
      <>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && (
          <p>We don't have any reviews for this movie.</p>
        )}
      </>
    );
  } else {
    return (
      <>
        {status === 'pending' && <Loader />}
        <ul>
          {reviews.map(rev => (
            <li key={rev.id}>
              <p>{rev.author}</p>
              <p>{rev.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
