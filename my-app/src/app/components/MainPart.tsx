import React from "react";
import "../styles/main.css";
import Filter from "../components/Filter"
import MovieCard from "./MovieCard";

const MainPart: React.FC = () => {
  return (
    <div className="main-part">
        <Filter />
        <MovieCard />
    </div>
  );
};

export default MainPart;