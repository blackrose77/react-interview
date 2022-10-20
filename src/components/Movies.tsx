import React, { useEffect, useState } from "react";
import { movies$ } from "../resources/movies";
import styled from "styled-components";

const SWrapper = styled.div``;

interface Movie {
  id: number;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
}

function Movies() {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [nbMoviePerPage, setNbMoviePerPage] = useState<number>(4);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const indexFirstMovie = currentPage * nbMoviePerPage;
  const indexLastMovie = indexFirstMovie + nbMoviePerPage;
  const displayedMovies = movies
    .slice(indexFirstMovie, indexLastMovie)
    .filter(
      (movie) => currentCategory === null || currentCategory === movie.category
    );

  useEffect(() => {
    const fetchData = async (data: Promise<Movie[]>) => {
      const movieList = await data;
      setMovies(movieList);
    };
    fetchData(movies$);
  }, []);

  return (
    <SWrapper>
      {displayedMovies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </SWrapper>
  );
}

export default Movies;
