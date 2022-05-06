import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <section className="register">
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <label className="register__label">
          <p className="register__input-name">Имя</p>
          <input
            className="register__input register__input_type_name"
            type="text"
            id="name"
            name="name"
            placeholder="Виталий"
            autoComplete="off"
            required
            minLength="2"
            maxLength="40"
          />
          <span id="name-error" className="register__input-error"></span>
        </label>
        <label className="register__label">
          <p className="register__input-name">E-mail</p>
          <input
            className="register__input register__input_type_email"
            type="email"
            id="email"
            name="email"
            placeholder="pochta@yandex.ru"
            autoComplete="off"
            required
            minLength="6"
            maxLength="50"
          />
          <span id="email-error" className="register__input-error"></span>
        </label>
        <label className="register__label">
          <p className="register__input-name">Пароль</p>
          <input
            className="register__input register__input_type_password"
            type="text"
            id="password"
            name="password"
            placeholder="••••••••••••••"
            autoComplete="off"
            required
            minLength="8"
            maxLength="50"
          />
          <span id="password-error" className="register__input-error">
            Что-то пошло не так...
          </span>
        </label>
        <button type="submit" className="link register__button">
          Зарегистрироваться
        </button>
      </form>
      <p className="register__text">
        Уже зарегистрированы?{" "}
        <Link className="link login__navigation" to="/signin">
          Войти
        </Link>
      </p>
    </section>
  );
};

export default Register;
