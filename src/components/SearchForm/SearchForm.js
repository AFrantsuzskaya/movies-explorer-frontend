import React, { useState } from "react";
import "./SearchForm.css";
import { FormValidator } from "../../hooks/FormValidator";

function SearchForm() {
 // const {inputValue, handleChange, resetFrom, errors, isValid} = FormValidator();
  //const [errorMessage, setErrorMessage] = useState('');

  return (
    <section className="search__container">
      <form className="search-form">
        <div className="search__box">
          <div className="search-form__icon"></div>
          <input
            name="name"
            type="text"
            placeholder="Фильм"
            className="search-form__input"
            required
           // value={inputValue.name || ''}
           // onChange={handleChange}
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
