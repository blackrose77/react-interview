import React from "react";
import styled from "styled-components";
import { Movie } from "./Movies";
import Chip from "@mui/material/Chip";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

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
}

function MovieCard({ movie }: MovieProps) {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <SWrapper>
      <STitle>{movie.title}</STitle>
      <SCategory>{movie.category}</SCategory>
      <SPoster src={movie.url} />
      <div style={{ display: "flex", marginTop: "10px" }}>
        <SChip
          icon={<ThumbUpOffAltIcon />}
          label={`${movie.likes}`}
          onClick={handleClick}
          color="info"
        ></SChip>
        <SChip
          icon={<ThumbDownOffAltIcon />}
          label={`${movie.dislikes}`}
          onClick={handleClick}
          color="info"
        ></SChip>
      </div>
    </SWrapper>
  );
}

export default MovieCard;
