'use client'

import React, { useState, useEffect } from "react";
import { movies } from "../../../../simple_api/api/mock";
import { cinemas } from "../../../../simple_api/api/mock";
import "../styles/filter.css";


const Filter: React.FC<{
  onGenreChange: (genre: string) => void;
  onCinemaChange: (cinema: string) => void;
  onMovieTitleChange: (title: string) => void;
}> = ({ onGenreChange, onCinemaChange, onMovieTitleChange }) => {
  const uniqueGenres = Array.from(new Set(movies.map((movie) => movie.genre)));

  const [cinemaList, setCinemaList] = useState<string[]>([]);

  const [movieTitle, setMovieTitle] = useState<string>("");


  useEffect(() => {
    setCinemaList(cinemas.map((cinema) => cinema.name));
  }, []);


  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenre = e.target.value;
    onGenreChange(selectedGenre);
  };

  const handleCinemaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCinema = e.target.value;
    onCinemaChange(selectedCinema);
  };

 const handleMovieTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    onMovieTitleChange(title);
  };
 


  return (
    <div className="filter">
      <label className="filter-label">Фильтр поиска</label>
      <div className="input-item">
        <label className="input-name">Название</label>
        <input
          className="input"
          value={movieTitle}
          onChange={handleMovieTitleChange}
        />
      </div>
      <div className="select-genre-item">
        <label className="genre-name">Жанр</label>
        <select className="select-genre" onChange={handleGenreChange}>
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
        <select className="select-cinema" onChange={handleCinemaChange}>
          <option className="select-cinema"
            value="">Выберите кинотеатр</option>
          {cinemaList.map((cinema, index) => (
            <option key={index} value={cinema}>
              {cinema}
            </option>
          ))}
        </select>

      </div>
    </div>
  );
};

export default Filter;

