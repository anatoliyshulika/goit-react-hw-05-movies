import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

export default function Revievs() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieReviews(id).then(res => setReviews(res.results));
  }, [id]);

  console.log(reviews);

  return (
    <ul>
      {reviews.map(rev => (
        <li>
          <p>{rev.author}</p>
          <p>{rev.content}</p>
        </li>
      ))}
    </ul>
  );
}
