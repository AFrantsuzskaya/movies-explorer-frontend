import React, { useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import { filterShortMovies, filterNameMovies } from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

function Movies({
  onClickLike,
  onDeleteClick,
  savedCardsList,
  savedMoviesItems,
  isLoading,
}) {
  const [shortFilmsList, setShortFilmsList] = useState([]);
  const [isChecked, setIsChecked] = useState(
    JSON.parse(localStorage.getItem("isCheckbox")) || false
  );
  const [errorFormMessage, setErrorFormMessage] = useState({
    show: false,
    message: "",
  });
  const [filteredMoviesList, setFilteredMoviesList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const [searchText, setSearchText] = useState("");

  // получение фильмов
  React.useEffect(() => {
    let filmsList = filteredMoviesList;
    console.log(filteredMoviesList);

    if (isChecked === true) {
      filmsList = filterShortMovies(filmsList);
    }
    if (searchText) {
      filmsList = filterNameMovies(searchText, filmsList);
      if (filmsList.length === 0) {
        setErrorFormMessage({
          show: true,
          message: "Ничего не найдено",
        });
      } else {
        setErrorFormMessage({ show: false, message: "" });
      }
    }
    setShortFilmsList(filmsList);
  }, [isChecked, filteredMoviesList, searchText]);

  //переключение чекбокса
  function changeCheckbox() {
    setIsChecked(!isChecked);
    localStorage.setItem("isCheckbox", JSON.stringify(!isChecked));
  }

  //  форма поиска фильмов
  function handleFilterMovies(values) {
    if (values) {
      setSearchText(values);
      moviesApi()
        .then((movie) => {
          const filterFilmsList = movie.filter((el) => {
            return String(el.nameRU)
              .toLowerCase()
              .includes(values.toLowerCase());
          });
          localStorage.setItem("list", JSON.stringify(filterFilmsList));
          localStorage.setItem("searchQwery", values);
          if (filterFilmsList.length === 0) {
            setErrorFormMessage({
              show: true,
              message: "Ничего не найдено",
            });
          } else {
            setErrorFormMessage({ show: false, message: "" });
            setFilteredMoviesList(filterFilmsList);
            if (isChecked === false) {
              return setShortFilmsList(filterFilmsList);
            }
            return filterShortMovies(filterFilmsList);
          }
        })
        .catch((err) => {
          if (err) {
            console.log(err);
            setErrorFormMessage({
              show: true,
              message:
                "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
            });
          }
        });
    } else {
      setErrorFormMessage({
        show: true,
        message: "Нужно ввести ключевое слово",
      });
    }
  }

  return (
    <section className="movies">
      <SearchForm
        filterShortMovies={filterShortMovies}
        changeCheckbox={changeCheckbox}
        isChecked={isChecked}
        handleFilterMovies={handleFilterMovies}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          cards={shortFilmsList}
          isLoading={isLoading}
          errorFormMessage={errorFormMessage}
          onClickLike={onClickLike}
          onDeleteClick={onDeleteClick}
          savedCardsList={savedCardsList}
          savedMoviesItems={savedMoviesItems}
          isLoading={isLoading}
        />
      )}
    </section>
  );
}

export default Movies;
