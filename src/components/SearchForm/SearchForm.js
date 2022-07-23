import React, { useState } from "react";
import "./SearchForm.css";
import { FormValidator } from "../../hooks/FormValidator";
import { useLocation } from "react-router-dom";

function SearchForm({ isChecked, changeCheckbox, handleFilterMovies }) {
  const { values, handleChange, errors, isValid, setValues } = FormValidator();
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === "/movies") {
      if (localStorage.getItem("searchQwery")) {
        setValues({ search_input: localStorage.getItem("searchQwery") });
      }
    } else {
      setValues({ search_input: "" });
    }
  }, [setValues, pathname]);

  function handleSubmitFilterMovies(event) {
    event.preventDefault();
    handleFilterMovies(values.search_input);
  }

  return (
    <section className="search__container">
      <form className="search-form" onSubmit={handleSubmitFilterMovies}>
        <div className="search__box">
          <div className="search-form__icon"></div>
          <input
            name="search_input"
            id="search_input"
            type="text"
            placeholder="Фильм"
            className="search-form__input"
            required
            value={values.search_input || ""}
            onChange={handleChange}
          />
          <button className="link search-form__button" type="submit"></button>
        </div>
        <div className="switch__box">
          <input
            type="checkbox"
            className="switch link"
            checked={isChecked}
            onChange={changeCheckbox}
          />
          <p className="switch__name">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
