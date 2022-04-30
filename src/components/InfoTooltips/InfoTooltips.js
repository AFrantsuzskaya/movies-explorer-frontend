import React from "react";
import { Link } from "react-router-dom";
import "./InfoTooltips.css";

function InfoTooltips({ isOpen, onClose }) {
  return (
    <section className={`navigation__box ${isOpen ? "navigation_open" : ""}`}>
      <div className="navigation__container">
        <ul className="navigation__list-popup">
          <li className="navigation__item">
            <Link
              className="link navigation__link-popup"
              onClick={onClose}
              to="/"
            >
              Главная
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              className="link navigation__link-popup link-decoration"
              onClick={onClose}
              to="/movies"
            >
              Фильмы
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              className="link navigation__link-popup"
              onClick={onClose}
              to="/saved-movies"
            >
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link
          to="/profile"
          className="link link__profile link__popup"
          onClick={onClose}
        >
          Аккаунт
        </Link>
      </div>
      <button
        className="link button__close"
        onClick={onClose}
        type="button"
      ></button>
    </section>
  );
}

export default InfoTooltips;
