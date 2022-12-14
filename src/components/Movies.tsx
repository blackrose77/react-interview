import React, { useEffect, useState } from "react";
import { movies$ } from "../resources/movies";
import styled from "styled-components";
import Pagination from "./common/Pagination";
import Categories from "./common/Categories";
import MovieCard from "./MovieCard";

const SMoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e5e5e5;
`;

export interface Movie {
  id: number;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
  url?: string;
}

function Movies() {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [nbMoviePerPage, setNbMoviePerPage] = useState<number>(4);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const indexFirstMovie = currentPage * nbMoviePerPage;
  const indexLastMovie = indexFirstMovie + nbMoviePerPage;

  const moviesByCategory = movies.filter(
    (movie) => currentCategory === null || currentCategory === movie.category
  );
  const displayedMovies = moviesByCategory.slice(
    indexFirstMovie,
    indexLastMovie
  );

  const categories = Array.from(new Set(movies.map((movie) => movie.category)));

  useEffect(() => {
    const fetchData = async (data: Promise<Movie[]>) => {
      const movieList = await data;
      setMovies(movieList);
    };
    fetchData(movies$);
  }, []);

  return (
    <SWrapper>
      <Categories
        categories={categories}
        currCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <SMoviesContainer>
        {displayedMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            movies={movies}
            setMovies={setMovies}
          ></MovieCard>
        ))}
      </SMoviesContainer>

      <Pagination
        nbElement={moviesByCategory.length}
        page={currentPage}
        setPage={setCurrentPage}
        rowsPerPage={nbMoviePerPage}
        setRowsPerPage={setNbMoviePerPage}
      />
    </SWrapper>
  );
}

export default Movies;
