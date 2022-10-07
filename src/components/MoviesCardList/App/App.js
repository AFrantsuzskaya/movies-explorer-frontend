import React, { useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import InfoTooltips from "../InfoTooltips/InfoTooltips";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import RequireAuth from "../RequireAuth/RequireAuth";
import moviesApi from "../../utils/MoviesApi";
import * as MainApi from "../../utils/MainApi";

function App() {
  const [isInfoTooltips, setIsInfoTooltips] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState({
    show: false,
    message: "",
  });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [savedCardsList, setSavedCardsList] = useState([]);
  const [savedMoviesItems, setSavedMoviesItems] = useState([]);
  const [isLoading, setisLoading] = React.useState(false);

  React.useEffect(() => {
    setisLoading(true)
    MainApi.getUserInfo()
      .then((userData) => {
        if (userData) {
          setLoggedIn(true);
          setCurrentUser(userData);
          setLoggedIn(true);
        } else {
          console.log("не возможно авторизоваться");
        }
      })
      .catch((res) => {
        setLoggedIn(false);
        if (res === "Ошибка: 401") {
          console.log("необходимa авторизация");
        } else {
          console.log("ошибка получения данных пользователя");
        }
        setLoggedIn(false);
      }).finally(() => setisLoading(false));
    MainApi.getSavedMovies()
      .then((res) => {
        setSavedCardsList(res);
        setSavedMoviesItems(res.map((el) => el.movieId));
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, [loggedIn]);

  function getMovies() {
    setisLoading(true);
    moviesApi()
      .then((movie) => {
        setCards(movie);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => setisLoading(false));
  }

  //регистрация
  function handleRegister({ password, email, name }) {
    MainApi.register({ password, email, name })
      .then((res) => {
        if (res._id) {
          localStorage.setItem("userId", res._id);
          handleLogin({ password, email });
        } else {
          setErrorMessage("Ошибка регистрации");
        }
      })
      .catch((res) => {
        if (res === "Ошибка: 409") {
          setErrorMessage({
            show: true,
            message: "Пользователь уже зарегестрирован",
          });
        } else {
          setErrorMessage({
            show: true,
            message: "Ошибка сервера, попробуйте зарегистроваться позже",
          });
        }
      });
  }

  function handleLogin({ password, email }) {
    setErrorMessage({
      show: false,
      message: "",
    });
    MainApi.authorize({ password, email })
      .then((data) => {
        if (data) {
          setLoggedIn(true);
        } else {
          setErrorMessage("Ошибка входа");
          setLoggedIn(false);
        }
      })
      .catch((res) => {
        if (res === "Ошибка: 401") {
          setErrorMessage({
            show: true,
            message: "Проверьте введенные данные пользователя",
          });
        } else {
          setErrorMessage({
            show: true,
            message: "Ошибка сервера, попробуйте зарегистроваться позже",
          });
        }
        setLoggedIn(false);
      });
  }

  function updateUser(userNewData) {
    setErrorMessage({
      show: false,
      message: "",
    });
    MainApi.updateUserInfo(userNewData)
      .then((userNewData) => {
        setCurrentUser(userNewData);
      })
      .catch((res) => {
        if (res === "Ошибка: 409") {
          setErrorMessage({
            show: true,
            message: "Пользователь уже зарегестрирован",
          });
        } else {
          setErrorMessage({
            show: true,
            message: "Ошибка сервера, попробуйте позже",
          });
        }
      });
  }

  function handleLogout(event) {
    MainApi.logout()
      .then((res) => {
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.removeItem("isCheckbox");
        localStorage.removeItem("searchQwery");
        localStorage.removeItem("list");
      })
      .catch((err) => {
        console.log("err logout:", err);
      });
  }

  function openProfilePopup() {
    setIsInfoTooltips(true);
  }

  function closePopup() {
    setIsInfoTooltips(false);
  }

  //сохранение фильмов
  function handleSavedMovie(movie) {
    const toggleMovie = savedCardsList.find((el) => el.movieId === movie.id);
    if (toggleMovie) {
      return handleRemoveMovie(toggleMovie);
    } else {
      MainApi.setMovie(movie)
        .then((el) => {
          setSavedCardsList([el, ...savedCardsList]);
          setSavedMoviesItems([el.movieId, ...savedMoviesItems]);
        })
        .catch((err) => console.log(err, "не работает сохрание фильма"));
    }
  }

  function handleRemoveMovie(movie) {
    MainApi.removeMovie(movie._id)
      .then((res) => {
        const list = savedCardsList.filter((el) =>
          el._id === movie._id ? false : true
        );
        setSavedCardsList(list);
        setSavedMoviesItems(list.map((e) => e.movieId));
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header isOpen={openProfilePopup} loggedIn={loggedIn} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <RequireAuth loggedIn={loggedIn}>
                <Movies
                  cards={cards}
                  getMovies={getMovies}
                  savedCardsList={savedCardsList}
                  onClickLike={handleSavedMovie}
                  handleRemoveMovie={handleRemoveMovie}
                  savedMoviesItems={savedMoviesItems}
                  isLoading={isLoading}
                />
              </RequireAuth>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <RequireAuth loggedIn={loggedIn}>
                <SavedMovies
                  savedCardsList={savedCardsList}
                  handleRemoveMovie={handleRemoveMovie}
                  savedMoviesItems={savedMoviesItems}
                  isLoading={isLoading}
                />
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth loggedIn={loggedIn}>
                <Profile
                  update={updateUser}
                  handleLogout={handleLogout}
                  errorMessage={errorMessage}
                />
              </RequireAuth>
            }
          />
          <Route
            path="/signin"
            element={
              loggedIn ? (
                <Navigate to="/movies" />
              ) : (
                <Login
                  onLogin={handleLogin}
                  errorMessage={errorMessage}
                  getMovies={getMovies}
                />
              )
            }
          />
          <Route
            path="/signup"
            element={
              loggedIn ? (
                <Navigate to="/movies" />
              ) : (
                <Register
                  onRegister={handleRegister}
                  errorMessage={errorMessage}
                />
              )
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <InfoTooltips isOpen={isInfoTooltips} onClose={closePopup} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
