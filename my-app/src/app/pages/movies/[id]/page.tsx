'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { movies, reviews } from "../../../../../../simple_api/api/mock";
import Image from "next/image";
import Review from "../../../components/review"
import TicketCount from "../../../components/TicketCount";
import "../../../styles/moviepage.css";



export default function MoviePage({ params }: { params: { id: string } })  {
  const movie = movies.find((movie) => movie.id === params.id);
  if (!movie) {
    return <div className="loading">Loading...</div>;
  }
  
  return (
    <div className="movie-page">
      <div className="movie-card">
        <div>
          <Image
            src={movie.posterUrl}
            alt={movie.title}
            width={400}
            height={500}
            className="movie-pic"
          />
        </div>
        <div className="movie-info">
          <div className="movie-title">{movie.title}</div>
          <div className="movie-genre">Жанр:<div className="movie-genre-content"> {movie.genre}</div></div>
          <div className="movie-year">Год выпуска:<div className="movie-year-content">{movie.releaseYear}</div></div>
          <div className="movie-rating">Рейтинг: <div className="movie-rating-content">{movie.rating}</div></div>
          <div className="movie-director">Режиссер: <div className="movie-director-content">{movie.director}</div></div>
          <div className="movie-description">Описание</div>
          <div className="movie-description-content">{movie.description}</div>
        </div>
        <div className="ticket-count">
        </div>
      </div>
      <Review params={params} />
    </div>
  );
} 


