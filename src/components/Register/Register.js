import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { FormValidator } from "../../hooks/FormValidator";

function Register({ onRegister, errorMessage }) {
  const { values, handleChange, errors, isValid } = FormValidator();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }

  return (
    <section className="register">
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmit}>
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
            value={values.name || ""}
            onChange={handleChange}
            errors={errors}
          />
          <span id="name-error" className="register__input-error">
            {errors.name}
          </span>
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
            value={values.email || ""}
            onChange={handleChange}
          />
          <span id="email-error" className="register__input-error">
            {errors.email}
          </span>
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
            value={values.password || ""}
            onChange={handleChange}
          />
          <span id="password-error" className="register__input-error">
            {errors.password}
          </span>
        </label>
        <span id="button-error" className="register__form-error">
          {errorMessage.message}
        </span>
        <button
          type="submit"
          className="link register__button"
          disabled={!isValid}
        >
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
}

export default Register;
