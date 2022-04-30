import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import { moviesCard, moviesCardSaved } from '../../utils/moviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
    const { pathname } = useLocation();
    const list = pathname === '/movies' ? moviesCard : moviesCardSaved;
    const buttonMovies = `${pathname === '/movies' ? 'movies-list__button' : 'movies-list__button_hidden'}`
    return(
        <section className='movies-list'>
            <ul className='movies-list__box'>
                {list.map((movie) => {
                    return(
                        <MoviesCard card={movie} />
                    )
                })}
            </ul>
            <button type='button' className={buttonMovies}>Ещё</button>
        </section>
    )
}

export default MoviesCardList;