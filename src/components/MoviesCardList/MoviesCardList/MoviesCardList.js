import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import useWindowWidth from "../../hooks/useWindowWidth";

function MoviesCardList({
  isLoading,
  cards,
  errorFormMessage,
  onClickLike,
  handleRemoveMovie,
  savedMoviesItems,
}) {
  const { pathname } = useLocation();
  const location = pathname === "/movies" ? cards.length : cards;
  const buttonMovies = `${
    pathname === "/movies"
      ? "link movies-list__button"
      : "movies-list__button_hidden"
  }`;
  const [showList, setShowList] = useState(cards);
  const [showCardList, setShowCardList] = useState(0);
  const [addShowCardList, setAddShowCardList] = useState(0);
  const width = useWindowWidth();

  React.useEffect(() => {
    if (width >= 1280) {
      setShowCardList(12);
      setAddShowCardList(3);
    } else if (width < 1280 && width >= 768) {
      setShowCardList(8);
      setAddShowCardList(2);
    } else if (width < 768 && width >= 320) {
      setShowCardList(5);
      setAddShowCardList(2);
    }
  }, [width]);

  React.useEffect(() => {
    if (pathname === "/movies") {
      const res = cards.filter((item, index) => index < showCardList);
      setShowList(res);
    }
  }, [cards]);

  React.useEffect(() => {
    if (pathname === "/saved-movies") {
      const res = cards.filter((item, index) => index < showCardList);
      setShowList(res);
    }
  }, [cards, showCardList]);

  function handleMoreButton() {
    if (cards.length - showList.length > 0) {
      const newList = cards.slice(
        showList.length,
        showList.length + addShowCardList
      );
      setShowList([...showList, ...newList]);
    }
  }

  return (
    <section className="movies-list">
      {errorFormMessage.show === true ? (
        <span id="button-error" className="register__form-error">
          {errorFormMessage.message}
        </span>
      ) : (
        <>
          {isLoading ? (
            <Preloader />
          ) : (
            <ul className="movies-list__box">
              {showList.map((movie) => {
                return (
                  <MoviesCard
                    key={movie.id}
                    card={movie}
                    onClickLike={onClickLike}
                    savedCardsList={cards}
                    handleRemoveMovie={handleRemoveMovie}
                    savedMoviesItems={savedMoviesItems}
                    saved={savedMoviesItems.includes(movie.id)}
                  />
                );
              })}
            </ul>
          )}
          {showList.length <= 3 || showList.length === location ? null : (
            <button
              type="button"
              className={buttonMovies}
              onClick={handleMoreButton}
            >
              Ещё
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
