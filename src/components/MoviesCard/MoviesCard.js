import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { MOVIES_URL } from "../../utils/constants";

function MoviesCard({
  card,
  onClickLike,
  handleRemoveMovie,
  saved,
}) {
  const { pathname } = useLocation();
  const { nameRU, image, trailerLink, duration } = card;

  function handleLikeClick() {
    saved = !saved;
    onClickLike(card);
  }

  function handleRemoveClick() {
    saved = false;
    handleRemoveMovie(card);
  }

  function lengthMovie(length) {
    const hours = Math.trunc(length / 60);
    const minutes = length % 60;
    return `${hours}ч ${minutes}м`;
  }

  return (
    <li className="movie">
      <div className="movie__block">
        {pathname === "/movies" ? (
          <button
            type="checkbox"
            className={
              saved === true
                ? "link movie__button_checked"
                : "link movie__button"
            }
            onClick={handleLikeClick}
          >
            {saved ? null : "Сохранить"}
          </button>
        ) : (
          <button
            type="checkbox"
            className="link movie__delete-button"
            onClick={handleRemoveClick}
          />
        )}
        <a
          className="movie__trailer"
          href={trailerLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="movie__image"
            src={pathname === "/movies" ? `${MOVIES_URL}${image.url}` : image}
            alt={nameRU}
          />
        </a>
      </div>
      <div className="movie__info">
        <h2 className="movie__title">{nameRU}</h2>
        <p className="movie__time">{lengthMovie(duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
