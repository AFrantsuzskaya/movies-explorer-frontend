import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const { pathname } = useLocation();
  const pathNav = `${
    pathname === "/" || pathname === "/movies" || pathname === "/saved-movies"
      ? "footer"
      : "footer_type_hidden"
  }`;

  return (
    <footer className={pathNav}>
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <p className="footer__copyright">&#169; 2022</p>
        <nav>
          <ul className="footer__list">
            <li className="footer__item">
              <a
                className="link footer__link"
                href="https://practicum.yandex.ru"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item">
              <a
                className="link footer__link"
                href="https://github.com/AFrantsuzskaya"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="footer__item">
              <a
                className="link footer__link"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
