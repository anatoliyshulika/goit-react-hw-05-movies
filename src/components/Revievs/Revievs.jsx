import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieReviews } from 'services/api';

export default function Revievs() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieReviews(id)
      .then(res => setReviews(res.results))
      .catch(error => {
        toast.error(error.response.data.status_message);
        return;
      });
  }, [id]);

  if (reviews.length < 1) {
    return <p>We don't have any reviews for this movie.</p>;
  } else {
    return (
      <ul>
        {reviews.map(rev => (
          <li key={rev.id}>
            <p>{rev.author}</p>
            <p>{rev.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}
