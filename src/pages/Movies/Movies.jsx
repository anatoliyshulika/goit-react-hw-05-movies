import { useSearchParams } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { fetchSearchingMovies } from 'services/api';
import MovieList from 'components/MovieList/MovieList';
import { toast } from 'react-toastify';
import { Container, FieldSt, Button } from './Movies.styled';
import Loader from 'components/Loader/Loader';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('query') ?? '');
  const [movieList, setMovieList] = useState([]);
  const [status, setStatus] = useState('resolved');

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }

    setStatus('pending');
    fetchSearchingMovies(searchParams.get('query'))
      .then(res => {
        if (res.results.length === 0) {
          toast.warn('Nothing found for your request!');
          setStatus('resolved');
        } else {
          setMovieList(res.results);
          setStatus('resolved');
        }
      })
      .catch(error => {
        toast.error(error.response.data.status_message);
        setStatus('resolved');
        return;
      });
  }, [searchParams]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function submitQuery() {
    if (inputValue === '') {
      toast.info('Enter your requst');
      return;
    }

    setSearchParams({ query: inputValue });
  }

  return (
    <Container>
      {status === 'pending' && <Loader />}
      <Formik initialValues={{ name: '' }} onSubmit={submitQuery}>
        <Form>
          <FieldSt
            type="text"
            name="searchQuery"
            onChange={handleChange}
            value={inputValue}
          />
          <Button type="submit">Search</Button>
        </Form>
      </Formik>
      {movieList.length > 0 && <MovieList movieList={movieList} path="" />}
    </Container>
  );
}
