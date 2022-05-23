import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile() {
  const currentUser = React.useContext(CurrentUserContext);

  
  return (
    <section className="profile">
      <h2 className="profile__title text">Привет, {currentUser.name}!</h2>
      <form className="profile__form">
        <div className="profile__label">
          <label className="text profile__text profile__text_type_lable">
            Имя
          </label>
          <input
            className="text profile__text profile__input"
            type="text"
            id="name"
            name="name"
            placeholder={currentUser.name}
            autoComplete="off"
            required
            minLength="2"
            maxLength="50"
          />
          <span className="text"></span>
        </div>
        <div className="profile__label">
          <label className="text profile__text profile__text_type_lable">
            E-mail
          </label>
          <input
            className="text profile__text profile__input"
            type="email"
            id="email"
            name="email"
            placeholder={currentUser.email}
            autoComplete="off"
            required
            minLength="8"
            maxLength="50"
          />
          <span className="text"></span>
        </div>
        <button className="link text profile__button">Редактировать</button>
      </form>
      <Link className="link text profile__exit-link" to="/">
        Выйти из аккаунта
      </Link>
    </section>
  );
};

export default Profile;
