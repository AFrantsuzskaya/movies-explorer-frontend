import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard(props) {
  const { pathname } = useLocation();

  return (
    <li className="movie">
      <div className="movie__block">
        <input
          type="checkbox"
          className={
            pathname === "/movies"
              ? "link movie__button"
              : "link movie__delete-button"
          }
        />
        <img className="movie__image" src={props.card.link} alt="Фильм" />
      </div>
      <div className="movie__info">
        <h2 className="movie__title">{props.card.name}</h2>
        <p className="movie__time">{props.card.time}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
