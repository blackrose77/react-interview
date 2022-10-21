import React from "react";
import styled from "styled-components";
import { Movie } from "./Movies";

import Chip from "@mui/material/Chip";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import CloseIcon from "@mui/icons-material/Close";
import Badge from "@mui/material/Badge";

const SCategory = styled.h3`
  font-weight: normal;
`;

const SChip = styled(Chip)`
  &.MuiChip-root {
    margin-left: 15px;
  }
`;

const STitle = styled.h1`
  text-align: center;
  margin: 0;
  max-width: 200px;
  font-size: 20px;
  white-space: nowrap;
  display: block;
  overflow: hidden;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const SPoster = styled.img`
  object-fit: cover;
  max-width: 200px;
  height: 260px;
  transition: 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

const SWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  max-width: 200px;
`;

interface MovieProps {
  movie: Movie;
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
}

function MovieCard({ movie, movies, setMovies }: MovieProps) {
  const likeOrDislike = (myMovie: Movie, isLike: boolean) => {
    const moviesAfterLikeOrDislike = movies.map((currMovie) => {
      if (currMovie.id === myMovie.id)
        return {
          ...currMovie,
          likes: isLike ? currMovie.likes + 1 : currMovie.likes,
          dislikes: isLike ? currMovie.dislikes : currMovie.dislikes + 1,
        };
      return currMovie;
    });

    setMovies(moviesAfterLikeOrDislike);
  };

  const removeMovie = () => {
    const moviesAfterRemove = movies.filter(
      (currMovie) => currMovie.id !== movie.id
    );

    setMovies(moviesAfterRemove);
  };

  return (
    <Badge
      badgeContent={
        <CloseIcon
          sx={{ fontSize: 15, cursor: "pointer" }}
          onClick={removeMovie}
        />
      }
      color="info"
      style={{ marginRight: "15px", marginTop: "45px" }}
    >
      <SWrapper>
        <STitle>{movie.title}</STitle>
        <SCategory>{movie.category}</SCategory>
        {movie.url ? <SPoster src={movie.url} /> : null}
        <div style={{ display: "flex", marginTop: "20px" }}>
          <SChip
            icon={<ThumbUpOffAltIcon />}
            label={`${movie.likes}`}
            onClick={() => likeOrDislike(movie, true)}
            color="info"
          ></SChip>
          <SChip
            icon={<ThumbDownOffAltIcon />}
            label={`${movie.dislikes}`}
            onClick={() => likeOrDislike(movie, false)}
            color="info"
          ></SChip>
        </div>
      </SWrapper>
    </Badge>
  );
}

export default MovieCard;
