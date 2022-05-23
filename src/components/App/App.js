import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import moviesApi from "../../utils/MoviesApi";
import * as Auth from "../../utils/Auth";
import MainApi from "../../utils/MainApi";

function App() {
  const [isInfoTooltips, setIsInfoTooltips] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState({
    show: false,
    message:''
  });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  /*React.useEffect(() => {
    setCards([]);
  }, [])*/

  React.useEffect(() => {
    if(loggedIn === true) {
      
    
    MainApi.getUserInfo().then(res => {
     console.log(res)
      setCurrentUser(res);
      localStorage.setItem('user', currentUser);
    }) }
  }, [loggedIn])
  //регистрация
  function handleRegister({ password, email, name }) {
    Auth.register({ password, email, name })
      .then((res) => {
        console.log(res);
        if (res._id) {
          
          setCurrentUser(res);
          navigate("/movies");
          console.log("hello");
        } else {
          console.log(res);
          setErrorMessage('Ошибка регистрации');
        }
      })
      .catch((res) => {
        console.log(res)
        if (res === "Ошибка: 409") {
          setErrorMessage({
            show: true,
            message: "Пользователь уже зарегестрирован",
          })
        } else {
          setErrorMessage({
            show: true,
            message: "Ошибка сервера, попробуйте зарегестроваться позже"},
            )
          }
          
      })
        
  }

  function handleLogin({ password, email }) {
    
    Auth.authorize({password, email})
    .then((res) => {
      
      console.log(res)
      
      //localStorage.setItem('email', email);
     setLoggedIn(true);
     //console.log(setLoggedIn)
     // navigate("/movies");
     
      
    })
    .catch(err => {
      if(err.status === 401) {
        console.log('Необходимо зарегестрироваться')
      }
      console.log("ошибка входа")
    })
  }

  function getMovies() {
    moviesApi()
      .then((movie) => {
        //console.log(movie);
        setCards(movie);
      })
      .catch((err) => {
        console.log("Ошибка");
      });
  }

  React.useEffect(() => {
    getMovies();
  }, []);
  /*const currentUser = React.useContext(CurrentUserContext);*/
  function openProfilePopup() {
    setIsInfoTooltips(true);
  }

  function closePopup() {
    setIsInfoTooltips(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header isOpen={openProfilePopup} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/movies" element={<Movies cards={cards} />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login onLogin={handleLogin}/>} />
          <Route
            path="/signup"
            element={<Register onRegister={handleRegister} errorMessage={errorMessage}/>}
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
