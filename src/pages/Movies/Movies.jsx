import { useSearchParams } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { fetchSearchingMovies } from 'services/api';
import MovieList from 'components/MovieList/MovieList';
import { toast } from 'react-toastify';
import { Container, FieldSt, Button } from './Movies.styled';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('query') ?? '');
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }

    fetchSearchingMovies(searchParams.get('query'))
      .then(res => {
        if (res.results.length === 0) {
          toast.warn('Nothing found for your request!');
        } else {
          setMovieList(res.results);
        }
      })
      .catch(error => {
        toast.error(error.response.data.status_message);
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
