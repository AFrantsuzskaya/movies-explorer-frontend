import React from 'react';
import {  } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies() {

    return(
        <section className='saved-movie'>
          <SearchForm/>
          <MoviesCardList />
        </section>
    )
}

export default SavedMovies;