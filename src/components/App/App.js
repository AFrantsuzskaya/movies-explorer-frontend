import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import InfoTooltips from '../InfoTooltips/InfoTooltips';

function App() {
  const [isInfoTooltips, setIsInfoTooltips] = React.useState(false);
  
  function openProfilePopup() {
    setIsInfoTooltips(true);
  }

  function closePopap() {
    setIsInfoTooltips(false);
  }

  return (
    <div className='page'>
      <Header
        isOpen={openProfilePopup}
      />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
      <InfoTooltips
        isOpen={isInfoTooltips}
        onClose={closePopap}
      />
    </div>
  );
}

export default App;