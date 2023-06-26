'use client'

import React, { useState } from "react";
import "../styles/main.css";
import Filter from "../components/Filter"
import MovieCard from "./MovieCard";

const MainPart: React.FC = () => {

  const [selectedGenre, setSelectedGenre] = useState("");
  return (
    <div className="main-part">
        <Filter onGenreChange={setSelectedGenre}  />
        <MovieCard selectedGenre={selectedGenre} />
    </div>
  );
};

export default MainPart;