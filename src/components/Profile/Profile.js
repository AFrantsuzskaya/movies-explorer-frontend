import React from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { FormValidator } from "../../hooks/FormValidator";

function Profile({ update, errorMessage, handleLogout, setErrorMessage }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setIsValid, setValues } = FormValidator();
  
  React.useEffect(() => {
    if(values) {
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      })
      setErrorMessage({
        show: false,
        message: '',
      })
    }
  }, [currentUser]);

  React.useEffect(()=> {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsValid(false);
    }
  }, [values, isValid, currentUser])

  function handleSubmit(e) {
    e.preventDefault();
    update(values);
  }

  function handleSignout() {
    handleLogout();
  }

  return (
    <section className="profile">
      <h2 className="profile__title text">Привет, {currentUser.name}!</h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <label className="profile__label">
          <div className="profile__input-container">
            <p className="text profile__text profile__text_type_lable">Имя</p>
            <input
              className="text profile__text profile__input"
              type="text"
              id="name"
              name="name"
              placeholder='Имя'
              autoComplete="off"
              required
              minLength="2"
              maxLength="50"
              value={values.name || ""}
              onChange={handleChange}
              errors={errors}
            />
          </div>
          <span id="name-error" className="login__input-error">
            {errors.name}
          </span>
        </label>
        <label className="profile__label">
          <div className="profile__input-container">
            <p className="text profile__text profile__text_type_lable">
              E-mail
            </p>
            <input
              className="text profile__text profile__input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
              minLength="8"
              maxLength="50"
              value={values.email || ""}
              onChange={handleChange}
            />
          </div>
          <span className="login__input-error" id="email-error">
            {errors.email}
          </span>
        </label>
        <span id="button-error" className="register__form-error">
          {errorMessage.message}
        </span>
        <button className="link text profile__button" disabled={!isValid}>
          Редактировать
        </button>
      </form>
      <button
        type="button"
        className="link text profile__exit-link"
        onClick={handleSignout}
      >
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
