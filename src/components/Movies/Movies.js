import React, { useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList isLoading={isLoading} />
    </section>
  );
}

export default Movies;
