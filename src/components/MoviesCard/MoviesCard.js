import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {
    const { pathname } = useLocation();

    return(
        <li className='movie'>
          <div className='movie__block'>
            <div className='movie__info'>
              <h2 className='movie__title'>{props.card.name}</h2>
              <p className='movie__time'>{props.card.time}</p>
            </div>
            <input type='checkbox' className={ pathname === '/movies' ? 'movie__button' : 'movie__delete-button' } />
          </div>
          <img className='movie__image' src={props.card.link} alt='Фильм'/>
        </li>
    )
}

export default MoviesCard;