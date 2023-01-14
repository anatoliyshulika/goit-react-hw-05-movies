import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import NotFound from 'pages/NotFound/NotFound';
import Cast from './Cast/Cast';
import Revievs from './Revievs/Revievs';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Revievs />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
