'use client'

import React, { useState } from "react";
import "../styles/main.css";
import Filter from "../components/Filter"
import MovieCard from "./MovieCard";

const MainPart: React.FC = () => {

  const [selectedGenre, setSelectedGenre] = useState("");

  const [selectedCinema, setSelectedCinema] = useState("");

  const [selectedMovieTitle, setSelectedMovieTitle] = useState("");

  const handleCinemaChange = (cinema: string) => {
    setSelectedCinema(cinema);
  };

  const handleMovieTitleChange = (title: string) => {
    setSelectedMovieTitle(title);
  }
  
  

  return (
    <div className="main-part">
      <Filter onGenreChange={setSelectedGenre}
        onCinemaChange={handleCinemaChange}
        onMovieTitleChange={handleMovieTitleChange} />
      <MovieCard selectedGenre={selectedGenre}
      selectedCinema={selectedCinema}
      selectedMovieTitle={selectedMovieTitle}  />
    </div>
  );
};

export default MainPart;