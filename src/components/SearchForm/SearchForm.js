import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search__container">
      <form className="search-form">
        <div className="search__box">
          <div className="search-form__icon"></div>
          <input
            type="text"
            placeholder="Фильм"
            className="search-form__input"
            required
          />
          <button className="link search-form__button" type="submit"></button>
        </div>
        <div className="switch__box">
          <input type="checkbox" className="switch link" />
          <p className="switch__name">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
