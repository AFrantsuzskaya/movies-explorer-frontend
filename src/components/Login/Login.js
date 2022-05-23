import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import {FormValidator} from "../../hooks/FormValidator";

function Login({onLogin}) {

  const {values, handleChange, resetFrom, errors, isValid} = FormValidator();

  function handleSubmit(e){
    e.preventDefault();
    onLogin(values);
  }
  return (
    <section className="login">
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label">
          <p className="login__input-name">E-mail</p>
          <input
            className="login__input login__input_type_email"
            type="email"
            id="email"
            name="email"
            placeholder="pochta@yandex.ru"
            autoComplete="off"
            required
            minLength="6"
            maxLength="50"
            value={values.email || ''}
            onChange={handleChange}
            errors={errors}
          />
          <span id="email-error" className="login__input-error">
          {errors.email}
          </span>
        </label>
        <label className="login__label">
          <p className="login__input-name">Пароль</p>
          <input
            className="login__input login__input_type_password"
            type="text"
            id="password"
            name="password"
            placeholder="••••••••••••••"
            autoComplete="off"
            required
            minLength="8"
            maxLength="50"
            value={values.password || ''}
            onChange={handleChange}
            errors={errors}
          />
          <span id="password-error" className="login__input-error">
          {errors.password}
          </span>
        </label>
        <button type="submit" className="link login__button" disabled={!isValid}>
          {/*<Link className="login__button" to="/profile">*/}
            Войти
          {/*</Link>*/}
        </button>
      </form>
      <p className="login__text">
        Ещё не зарегистрированы?{" "}
        <Link className="link register__navigation" to="/signup">
          Регистрация
        </Link>
      </p>
    </section>
  );
}

export default Login;
