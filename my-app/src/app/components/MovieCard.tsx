import React from "react";
import { movies } from '../../../../simple_api/api/mock';
import Image from 'next/image';
import "../styles/moviecard.css";

const MovieCard: React.FC = () => {
  return (
    <div className="movie-card">
      {movies.map((movie, index) => (
        <div className="movie-card-item" key={index}>
          <div className="movie-pic"><Image
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
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
