import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies({
  isLoading,
  savedCardsList,
  handleRemoveMovie,
  savedMoviesItems,
}) {
  const [cardsList, setCardsList] = useState(savedCardsList);
  const [searchText, setSearchText] = useState("");
  const [checked, setChecked] = useState(false);
  const [errorFormMessage, setErrorFormMessage] = useState({
    show: false,
    message: "",
  });

  React.useEffect(() => {
    let filtered = savedCardsList;
    if (checked === true) {
      filtered = filterShortMovies(filtered);
    } else {
      // setCardsList(savedCardsList);
    }
    if (searchText) {
      filtered = filterNameMovies(searchText, filtered);
      if (filtered.length === 0) {
        setErrorFormMessage({
          show: true,
          message: "Ничего не найдено",
        });
      } else {
        setErrorFormMessage({ show: false, message: "" });
      }
    }
    setCardsList(filtered);
  }, [checked, searchText, savedCardsList]);

  function changeCheckbox() {
    setChecked(!checked);
  }

  function filterShortMovies(cardsList) {
    const newCardsList = cardsList.filter((el) => el.duration < 40);
    return newCardsList;
  }

  function filterNameMovies(values, cardsList) {
    const filterFilmsList = cardsList.filter((el) => {
      return String(el.nameRU).toLowerCase().includes(values.toLowerCase());
    });
    return filterFilmsList;
  }

  function handleFilterSavedMovies(val) {
    if (val) {
      setSearchText(val);
    } else {
      setErrorFormMessage({
        show: true,
        message: "Нужно ввести ключевое слово",
      });
    }
  }

  return (
    <section className="saved-movie">
      <SearchForm
        changeCheckbox={changeCheckbox}
        isChecked={checked}
        handleFilterMovies={handleFilterSavedMovies}
      />
      {
        <MoviesCardList
          isLoading={isLoading}
          errorFormMessage={errorFormMessage}
          cards={cardsList}
          handleRemoveMovie={handleRemoveMovie}
          savedMoviesItems={savedMoviesItems}
        />
      }
    </section>
  );
}

export default SavedMovies;
