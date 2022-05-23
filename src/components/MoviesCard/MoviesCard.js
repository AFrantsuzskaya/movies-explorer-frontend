import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { MOVIES_URL } from "../../utils/constants";

function MoviesCard({ card }) {
  const { pathname } = useLocation();
  const {nameRU, image, trailerLink, duration} = card;
  const currentUser = React.useContext(CurrentUserContext);

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
        <a className="movie__trailer" href={trailerLink} target='_blank' rel='noreferrer'>
          <img className="movie__image" src={`${MOVIES_URL}${image.url}`} alt={nameRU}/>
        </a>
      </div>
      <div className="movie__info">
        <h2 className="movie__title">{nameRU}</h2>
        <p className="movie__time">{duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
