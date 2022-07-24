import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Header.css";

function Header({ isOpen, loggedIn }) {
  const { pathname } = useLocation();
  const pathNav = `${
    pathname === "/signup" || pathname === "/signin"
      ? "header__buttons-hidden"
      : "header__buttons"
  }`;
  const pathWidth = `${
    pathname === "/signup" || pathname === "/signin" ? "header__auth" : "header"
  }`;
  
  return (
    <>
      {pathname === "/profile" ||
      pathname === "/" ||
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/signin" ||
      pathname === "/signup" ? ((loggedIn && pathname === "/") ||
        pathname === "/profile" ||
        pathname === "/movies" ||
        pathname === "/saved-movies" ? (
          <header className="header_type_profile">
            <Link className="header__logo-link" to="/">
              <img className="header__logo-img" src={logo} alt="Логотип" />
            </Link>
            <div className="link__nav-movie">
              <Link className="link link link__movies" to="/movies">
                Фильмы
              </Link>
              <Link className="link link__saved-movies" to="/saved-movies">
                Сохранённые фильмы
              </Link>
            </div>
            <div className="link__account">
              <p className="link__nav-name">Аккаунт</p>
              <Link
                className="link link__profile link__nav"
                to="/profile"
              ></Link>
            </div>
            <button
              className="link header__menu"
              onClick={isOpen}
              type="button"
            ></button>
          </header>
        ) : (
          <header className={pathWidth}>
            <Link className="header__logo-link" to="/">
              <img className="header__logo-img" src={logo} alt="Логотип" />
            </Link>
            <div className={pathNav}>
              <Link
                className="link button header__button_type_signup"
                to="/signup"
              >
                Регистрация
              </Link>
              <Link
                className="link button header__button_type_signin"
                to="/signin"
              >
                Войти
              </Link>
            </div>
          </header>
        )
      ) : null}
    </>
  );
}

export default Header;
