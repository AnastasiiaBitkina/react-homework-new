'use client'

import React from "react";
import { movies } from "../../../../simple_api/api/mock";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../styles/moviecard.css";

const MovieCard: React.FC<{ selectedGenre: string }> = ({ selectedGenre }) => {
  const router = useRouter();

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre === selectedGenre)
    : movies;

  const handleClick = (movieId: string) => {
    router.push(`/movies/${movieId}`);
  };

  return (
    <div>
      <div className="movie-card">
        {filteredMovies.map((movie, index) => (
          <React.Fragment key={index}>
            <a
              className="movie-card-item"
              onClick={() => handleClick(movie.id)}
            >
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
              </div>
              <div className="ticket-count"></div>
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
