import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import { moviesCard, moviesCardSaved } from "../../utils/moviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";


function MoviesCardList({ isLoading, cards }) {
  const { pathname } = useLocation();
  const list = pathname === "/movies" ? moviesCard : moviesCardSaved;
  const buttonMovies = `${
    pathname === "/movies"
      ? "link movies-list__button"
      : "movies-list__button_hidden"
  }`;

  //console.log(cards)
  return (
    <section className="movies-list">
      
        {isLoading ? (
          <Preloader />
        ) : (
          <ul className="movies-list__box">
          {cards.map((movie) => {
           // console.log(movie)
            return <MoviesCard key={movie.id} card={movie} />;
          })}
          </ul>
        )}
      
      <button type="button" className={buttonMovies}>
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
