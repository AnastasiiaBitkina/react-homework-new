'use client'

import React, { useState } from "react";
import { movies } from "../../../../simple_api/api/mock";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TicketCount from "./TicketCount";
import { cinemas } from "../../../../simple_api/api/mock";
import "../styles/moviecard.css";
import Link from "next/link";

const MovieCard: React.FC<{ selectedGenre: string; 
  selectedCinema: string;
  selectedMovieTitle: string; 
}> = ({ selectedGenre, selectedCinema,selectedMovieTitle }) => {
  const router = useRouter();

  /*const filteredMovies = movies.filter((movie) => {
    if (selectedGenre && selectedCinema) {
      return movie.genre === selectedGenre && cinemas.find(cinema => cinema.movieIds.includes(movie.id))?.name === selectedCinema;
    } else if (selectedGenre) {
      return movie.genre === selectedGenre;
    } else if (selectedCinema) {
      return cinemas.find(cinema => cinema.movieIds.includes(movie.id))?.name === selectedCinema;
    } else {
      return true;
    }
  });*/

  const filteredMovies = movies.filter((movie) => {
    const matchesGenre =
      selectedGenre && movie.genre === selectedGenre;
    const matchesCinema =
      selectedCinema &&
      cinemas.find((cinema) =>
        cinema.movieIds.includes(movie.id)
      )?.name === selectedCinema;
    const matchesMovieTitle =
      selectedMovieTitle &&
      movie.title
        .toLowerCase()
        .includes(selectedMovieTitle.toLowerCase());

    if (selectedGenre && selectedCinema && selectedMovieTitle) {
      return matchesGenre && matchesCinema && matchesMovieTitle;
    } else if (selectedGenre && selectedCinema) {
      return matchesGenre && matchesCinema;
    } else if (selectedGenre && selectedMovieTitle) {
      return matchesGenre && matchesMovieTitle;
    } else if (selectedCinema && selectedMovieTitle) {
      return matchesCinema && matchesMovieTitle;
    } else if (selectedGenre) {
      return matchesGenre;
    } else if (selectedCinema) {
      return matchesCinema;
    } else if (selectedMovieTitle) {
      return matchesMovieTitle;
    } else {
      return true;
    }
  });

  const [ticketCounts, setTicketCounts] = useState<{ [key: string]: number }>(
    {}
  );

  const handleClick = (movieId: string) => {
    router.push(`../pages/movies/${movieId}`);
  };

  const handleIncrement = (movieId: string) => {
    setTicketCounts((prevState) => ({
      ...prevState,
      [movieId]: (prevState[movieId] || 0) + 1,
    }));
  };

  const handleDecrement = (movieId: string) => {
    setTicketCounts((prevState) => {
      const count = prevState[movieId] || 0;
      if (count > 0) {
        return {
          ...prevState,
          [movieId]: count - 1,
        };
      }
      return prevState;
    });
  };

  const getTicketCount = (movieId: string) => {
    return ticketCounts[movieId] || 0;
  };

  return (
    <div>
      <div className="movie-card">
        {filteredMovies.map((movie, index) => (
          <React.Fragment key={index}>
            <div
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
              <div className="ticket-count">
                <TicketCount
                  movieId={movie.id}
                  count={getTicketCount(movie.id)}
                  onIncrement={() => handleIncrement(movie.id)}
                  onDecrement={() => handleDecrement(movie.id)}
                />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;