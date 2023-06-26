'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { movies } from "../../../../../../simple_api/api/mock";
import Image from "next/image";
import "../../../styles/moviepage.css";

export default function MoviePage({ params }: { params: { id: string } }) {
  const movie = movies.find((movie) => movie.id === params.id);
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
}

/*const MoviePage: React.FC = () => {
 const router = useRouter();

  const { id } = router.query as { id: string };

  const movie = movies.find((movie) => movie.id === id);

  /*const movie = movies.find((movie) => movie.id === "2aT976Fs_Bek0e2ZR_05V");*/

  /*if (!movie) {
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

export default MoviePage;*/

