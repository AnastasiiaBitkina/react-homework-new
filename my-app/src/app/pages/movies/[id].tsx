'use client'

import React from "react";
import { useRouter } from "next/router";
import { movies } from "../../../../../simple_api/api/mock";
import Image from "next/image";
import "../../styles/moviepage.css";

const MoviePage: React.FC = () => {
  const router = useRouter();

  const { id } = router.query as { id: string };

  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-card">
      <div className="movie-pic">
        <Image
          src={movie.posterUrl}
          alt={movie.title}
          width={100}
          height={120}
        />
      </div>
      <div className="movie-info">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-genre">{movie.genre}</div>
        <div className="movie-description">{movie.description}</div>
      </div>
    </div>
  );
};

export default MoviePage;

