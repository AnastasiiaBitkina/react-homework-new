'use client'

import React, { useState, useEffect } from "react";
import { movies } from "../../../../simple_api/api/mock";
import "../styles/filter.css";

const Filter: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState("");

  const uniqueGenres = Array.from(new Set(movies.map((movie) => movie.genre)));

  useEffect(()=>{
    setSelectedGenre("");
  },[]);
  return (
    <div className="filter">
      <label className="filter-label">Фильтр поиска</label>
      <div className="input-item">
        <label className="input-name">Название</label>
        <input className="input" />
      </div>
      <div className="select-genre-item">
      <label className="genre-name">Жанр</label>
        <select 
        className="select-genre"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}>
          <option 
          className="select-default-genre"
          value="">Выберите жанр</option>
        {uniqueGenres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div className="select-cinema-item">
        <label className="cinema-name">Кинотеатр</label>
        <select className="select-cinema"></select>
      </div>
    </div>
  );
};

export default Filter;

