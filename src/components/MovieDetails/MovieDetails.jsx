import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { ImArrowLeft } from 'react-icons/im';
import poster from './poster.png';
import {
  Poster,
  PostWrapper,
  Container,
  Button,
  Description,
  Title,
  Line,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [goBack, setGoBack] = useState('/');

  useEffect(() => {
    fetchMovieDetails(id)
      .then(res => setMovie(res))
      .catch(error => {
        toast.error(error.response.data.status_message);
        return;
      });
  }, [id]);

  useEffect(() => {
    if (!location.state) {
      setGoBack('/');
      return;
    }
    setGoBack(location.state.from);
  }, []);

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
      <Container>
        <Button onClick={() => navigate(goBack)}>
          <ImArrowLeft /> Go back
        </Button>
        <PostWrapper>
          <Poster
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : poster
            }
            alt="Movie poster"
            width="250"
          />
          <Description>
            <h3>{movie.title}</h3>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <Title>Overview</Title>
            <p>{movie.overview}</p>
            <Title>Genres</Title>
            <p>{makeGanres()}</p>
          </Description>
        </PostWrapper>
      </Container>
      <Line></Line>
      <Container>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </Container>
      <Line></Line>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
