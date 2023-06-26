'use client'

import React, { useState } from "react";
import "../styles/main.css";
import Filter from "../components/Filter"
import MovieCard from "./MovieCard";

const MainPart: React.FC = () => {

  const [selectedGenre, setSelectedGenre] = useState("");

  const [selectedCinema, setSelectedCinema] = useState("");

  const handleCinemaChange = (cinema: string) => {
    setSelectedCinema(cinema);
  };

  return (
    <div className="main-part">
      <Filter onGenreChange={setSelectedGenre}
        onCinemaChange={handleCinemaChange} />
      <MovieCard selectedGenre={selectedGenre}
      selectedCinema={selectedCinema}  />
    </div>
  );
};

export default MainPart;