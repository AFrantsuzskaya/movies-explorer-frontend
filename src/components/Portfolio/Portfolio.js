import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            className="link portfolio__link"
            href="https://afrantsuzskaya.github.io/how-to-learn-2/"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
          <a
            className="link portfolio__link_type_picture"
            href="https://afrantsuzskaya.github.io/how-to-learn-2/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="portfolio__arrow"></div>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="link portfolio__link"
            href="https://afrantsuzskaya.github.io/russian-travel/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <a
            className="link portfolio__link_type_picture"
            href="https://afrantsuzskaya.github.io/russian-travel/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <div className="portfolio__arrow"></div>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="link portfolio__link"
            href="https://afrantsuzskaya.github.io/mesto-react/"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <a
            className="link portfolio__link_type_picture"
            href="https://afrantsuzskaya.github.io/mesto-react/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="portfolio__arrow"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
