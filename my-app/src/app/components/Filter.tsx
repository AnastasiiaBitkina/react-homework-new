import React from "react";
import "../styles/filter.css";

const Filter: React.FC = () => {
  return (
    <div className="filter">
      <label className="filter-label">Фильтр поиска</label>
      <div className="input-item">
        <label className="input-name">Название</label>
        <input className="input" />
      </div>
      <div className="select-genre-item">
      <label className="genre-name">Жанр</label>
        <select className="select-genre"></select>
      </div>
      <div className="select-cinema-item">
        <label className="cinema-name">Кинотеатр</label>
        <select className="select-cinema"></select>
      </div>
    </div>
  );
};

export default Filter;

